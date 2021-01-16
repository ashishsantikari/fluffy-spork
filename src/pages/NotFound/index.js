import Text from '../../components/Text';
import Box from '../../components/Box';
import Link from '../../components/Link';

const NotFound = () => (
  <Box>
    <Box paddingY="10px">
      <Text>Oh no! We are having a bad day today. Please try again!!</Text>
    </Box>
    <Box>
      <Link href="/">Click here</Link> to go back to home.
    </Box>
  </Box>
);

export default NotFound;
