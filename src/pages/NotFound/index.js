import Text from "../../components/Text";
import Box from "../../components/Box";
import ExternalLink from "../../components/ExternalLink";
import Page from "../../components/Page";

const NotFound = () => (
  <Page>
    <Box paddingY="10px">
      <Text>Oh no! We are having a bad day today. Please try again!!</Text>
    </Box>
    <Box>
      <ExternalLink href="/">Click here</ExternalLink> to go back to home.
    </Box>
  </Page>
);

export default NotFound;
