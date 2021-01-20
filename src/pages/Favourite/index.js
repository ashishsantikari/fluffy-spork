import React from "react";
import useFavourites from "../../hooks/useFavourites";
import Title from "../../components/Title";
import RepoList from "../../components/RepoList";
import useIsFavourite from "../../hooks/useIsFavourite";
import Page from "../../components/Page";
import InfoMessage from "../../components/InfoMessage";

const Favourite = () => {
  const [favourites, setFavourites] = useFavourites();
  const [isFavourite] = useIsFavourite();

  return (
    <Page>
      <Title headline={"Your favouriate repositories"} />
      <RepoList
        repos={favourites}
        isFavouriate={isFavourite}
        setFavouriates={setFavourites}
        infoMessage={() =>
          favourites.length === 0 && (
            <InfoMessage message="Your favourite list is empty" />
          )
        }
      />
    </Page>
  );
};

export default Favourite;
