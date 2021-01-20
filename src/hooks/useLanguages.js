import useLocalStorage from "./useLocalStorage";
import { features } from "../features";

const useLanguages = () => {
  const [languages, setLanguages] = useLocalStorage(
    features.languageStorageKey
  );

  return { languages, setLanguages };
};

export default useLanguages;
