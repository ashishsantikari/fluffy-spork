import useFavourites from "./useFavourites";

const useIsFavourite = () => {
  const [favourites] = useFavourites();

  const isFavourite = (repoId) => {
    return favourites.some((repo) => repo.id === repoId);
  };

  return [isFavourite];
};

export default useIsFavourite;
