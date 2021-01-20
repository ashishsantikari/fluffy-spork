import React from "react";
import Box from "../Box";
import Text from "../Text";

const InfoMessage = ({ message }) => {
  return (
    <Box width="100%" paddingY="20px">
      <Text as="h3">{message}</Text>
    </Box>
  );
};

export default InfoMessage;
