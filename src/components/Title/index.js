import React from "react";
import Box from "../Box";
import Text from "../Text";
import theme from "../../theme";

const Title = ({ headline }) => (
  <Box paddingY="20px">
    <Text
      as="h2"
      textDecoration="underline"
      title="headline"
      color={theme.color.blue}
    >
      {headline}
    </Text>
  </Box>
);

export default Title;
