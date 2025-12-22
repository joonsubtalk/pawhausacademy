import { createMachine } from 'xstate';

// Define a simple state machine for the application
export const appMachine = createMachine({
  /** @xstate-layout N4IgpgJg5gBAFgczAXlAjmADKAzgYwG4B0AKgIICCAogIQAyAgsnKkSgMQCyAop4CEsAisgA9UAggCq+fXq2qRzAEwBOAEwAGAMyHkUAdgCsEgBwA6bYt31lABzK9WvQF9Xps-NQAWRMQA */
  id: 'app',
  initial: 'idle',
  states: {
    idle: {
      on: {
        FETCH_DATA: 'loading',
      },
    },
    loading: {
      on: {
        DATA_LOADED: 'ready',
        ERROR: 'error',
      },
    },
    ready: {},
    error: {
      on: {
        RETRY: 'loading',
      },
    },
  },
});