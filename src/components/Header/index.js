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
      <Link to="/" paddingX="10px">
        Dashboard
      </Link>
      <Link to="/likes" paddingX="10px">
        View my favouriates
      </Link>
    </Flex>
  </Flex>
);

export default Header;
