// storage.ts
const isLocalStorageAvailable = () => {
    try {
      localStorage.setItem("__test__", "__test__");
      localStorage.removeItem("__test__");
      return true;
    } catch (e) {
      return false;
    }
  };
  
  const storage = isLocalStorageAvailable() ? localStorage : null;
  
  export const getItem = (key: string) => {
    if (storage) {
      return storage.getItem(key);
    } else {
      console.warn("localStorage is not available.");
      return null;
    }
  };
  
  export const setItem = (key: string, value: string) => {
    if (storage) {
      storage.setItem(key, value);
    } else {
      console.warn("localStorage is not available.");
    }
  };
  