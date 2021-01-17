import React from "react";
import Box from "../Box";
import Flex from "../Flex";
import Link from "../Link";
import Text from "../Text";

const RepoDetail = ({ name, description, stars, link }) => {
  return (
    <Box>
      <Flex>
        <Box>
          <Link fontSize="24px" href={link} target="_blank">
            {name}
          </Link>
          <Text color="gray" fontSize="22px">
            {" "}
            with {stars} Stars
          </Text>
        </Box>
      </Flex>
      <Text fontSize="20px">{description || "No description provided"}</Text>
    </Box>
  );
};

export default RepoDetail;
