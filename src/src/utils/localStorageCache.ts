import { type Cache } from '@epic-web/cachified';
// Simple adapter to use localStorage as a cache for cachified

const dogCache:Cache = {
  // cachified expects 'get' to return the cached value or null
  get(key:string) {
    const item = localStorage.getItem(key);
    if (!item) return null;
    
    // cachified stores an object with { metadata, value }
    try {
      return JSON.parse(item);
    } catch (e) {
      console.error("Error parsing cached item:", e);
      return null;
    }
  },

  // cachified expects 'set' to store the value and its metadata
  set(key:string, value:any) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  // 'delete' is optional but good practice
  delete(key:string) {
    localStorage.removeItem(key);
  },
};

export default dogCache;