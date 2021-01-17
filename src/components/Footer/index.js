import React from "react";
import Box from "../Box";
import Text from "../Text";
import Flex from "../Flex";

const Footer = () => (
  <Flex justifyContent="center" alignItems="center" marginY="20px">
    <Box width="100%">
      <Text color="gray">
        No cookies are saved. Only usage of local storage is required for proper
        functioning.{" "}
      </Text>
      <Text color="gray">Icons made by </Text>
      <a href="https://icon54.com/" title="Pixel perfect">
        Pixel perfect
      </a>{" "}
      <Text color="gray">from </Text>
      <a href="https://www.flaticon.com/" title="Flaticon">
        {" "}
        www.flaticon.com
      </a>
    </Box>
  </Flex>
);

export default Footer;
