import { fromPromise, assign, setup } from 'xstate';
import { cachified } from '@epic-web/cachified';
import dogCache from '../src/utils/localStorageCache';

const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random';
const CACHE_KEY = 'random-dog-image';

// --- ACTOR LOGIC ---
// Define the actual data fetching logic using 'cachified'
// XState v5 uses 'setup' to define reusable actors/actions
const fetchDogImageLogic = fromPromise(async () => {
  const result = await cachified({
    key: CACHE_KEY,
    cache: dogCache, // Use our localStorage cache adapter
    ttl: 1000 * 60 * 5, // Cache Time-To-Live: 5 minutes
    staleWhileRevalidate: 1000 * 60 * 10, // Serve stale data for 10 minutes while revalidating
    
    // The function to execute if the data is missing or stale
    getFreshValue: async () => {
      console.log("Fetching FRESH value from API...");
      const response = await fetch(DOG_API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch dog image.");
      }
      const data = await response.json();
      // data.message is the image URL
      return data.message; 
    }
  });

  return result; // The result is the image URL (data.message)
});


// --- STATE MACHINE ---
export const dogFetchMachine = setup({
  // 1. Register the actor logic
  actors: {
    fetchDogImage: fetchDogImageLogic,
  },
  // 2. Define assign actions to update context
  actions: {
    assignSuccess: assign({
      dogImageUrl: ({ event }) => event.output,
      error: null,
    }),
    assignError: assign({
      error: ({ event }) => event.error.message,
    }),
  },
  // 3. Define the machine's context (local state)
}).createMachine({
  id: 'dogFetcher',
  context: {
    dogImageUrl: null,
    error: null,
  },
  initial: 'loading',
  states: {
    loading: {
      // 4. Invoke the actor on entering the 'loading' state
      invoke: {
        src: 'fetchDogImage',
        id: 'fetch-service',
        
        // Transition to 'success' on actor resolution
        onDone: {
          target: 'success',
          actions: 'assignSuccess',
        },
        
        // Transition to 'error' on actor rejection
        onError: {
          target: 'error',
          actions: 'assignError',
        },
      },
    },
    success: {
      on: {
        REFETCH: {
          target: 'loading',
          reenter: true,
        },
      },
    },
    error: {
      on: {
        RETRY: 'loading',
      },
    },
  },
});