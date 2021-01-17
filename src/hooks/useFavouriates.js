import produce from "immer";
import useLocalStorage from "./useLocalStorage";
import { features } from "../features";

const useFavouriates = () => {
  const [data, setData] = useLocalStorage(features.favRepoStorageKey);

  const setFavouriates = ({ id, name, description, stars, link }) => {
    const item = { id, name, description, stars, link };
    setData(
      produce((draft) => {
        const idx = draft.findIndex((item) => item.id === id);
        if (idx > -1) {
          draft.splice(idx, 1);
        } else {
          draft.push(item);
        }
      })
    );
  };

  return [data, setFavouriates];
};

export default useFavouriates;
