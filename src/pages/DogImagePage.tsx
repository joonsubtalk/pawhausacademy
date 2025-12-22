import { useMachine } from '@xstate/react';
import { dogFetchMachine } from '../state/dogFetchMachine';

const DogImagePage = () => {
  // The dogFetchMachine starts in the 'loading' state immediately
  const [snapshot, send] = useMachine(dogFetchMachine);
  
  const { dogImageUrl, error } = snapshot.context;
  const isLoading = snapshot.matches('loading');

  return (
    <div className="page-container">
      <h1>Random Dog Image Fetcher 🐶</h1>
      <p>State: **{snapshot.value}**</p>
      
      {/* --- Loading State --- */}
      {isLoading && (
        <p>Loading image... (If this is not the first time, it's checking the cache or revalidating.)</p>
      )}

      {/* --- Error State --- */}
      {snapshot.matches('error') && (
        <div style={{ color: 'red', border: '1px solid red', padding: '1rem' }}>
          <p>Error: {error}</p>
          <button onClick={() => send({ type: 'RETRY' })}>Retry</button>
        </div>
      )}

      {/* --- Success State --- */}
      {dogImageUrl && (
        <div>
          <img 
            src={dogImageUrl} 
            alt="Random Dog" 
            style={{ maxWidth: '400px', maxHeight: '400px', borderRadius: '8px', border: '2px solid #333' }} 
          />
          <p>Source: <a href={dogImageUrl} target="_blank" rel="noopener noreferrer">{dogImageUrl.substring(0, 50)}...</a></p>
        </div>
      )}
      
      {/* --- Refetch Button (always available after initial load) --- */}
      <button 
        onClick={() => send({ type: 'REFETCH' })} 
        disabled={isLoading} 
        style={{ marginTop: '1rem' }}
      >
        {isLoading ? 'Fetching...' : 'Force Refetch (Check Cache)'}
      </button>
    </div>
  );
};

export default DogImagePage;