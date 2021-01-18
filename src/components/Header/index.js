import React from "react";
import Box from "../Box";
import Text from "../Text";
import Flex from "../Flex";
import Link from "../Link";
import theme from "../../theme";

const Header = () => (
  <Flex paddingTop="20px">
    <Box width="50%" paddingTop>
      <Text as="h1" textTransform="uppercase" color={theme.color.primary}>
        Repo Viewer
      </Text>
    </Box>
    <Flex width="50%" justifyContent="flex-end" alignItems="center">
      <Box paddingRight="10px">
        <Link to="/">Dashboard</Link>
      </Box>
      <Box>
        <Link to="/likes">View my favouriates</Link>
      </Box>
    </Flex>
  </Flex>
);

export default Header;
