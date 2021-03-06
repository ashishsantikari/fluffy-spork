import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultData = []) => {
  const fetchData = (key) => {
    const data = window.localStorage.getItem(key);
    if (!data) return defaultData;
    return JSON.parse(data);
  };

  const [storedValue, setStoredValue] = useState(() => {
    return fetchData(key);
  });

  useEffect(() => {
    function setValue(data) {
      window.localStorage.setItem(key, JSON.stringify(data));
    }

    setValue(storedValue);

    return () => {};
  }, [storedValue, key]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
