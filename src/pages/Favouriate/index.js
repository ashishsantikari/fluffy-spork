import React from "react";
import RepoDetail from "../../components/RepoDetail";
import Box from "../../components/Box";
import useFavouriates from "../../hooks/useFavouriates";

const Favouriate = () => {
  const [favouriates, setFavouriates] = useFavouriates();

  return (
    <Box>
      {favouriates.map((repo) => (
        <RepoDetail {...repo} toggleFavouriate={setFavouriates} />
      ))}
    </Box>
  );
};

export default Favouriate;
