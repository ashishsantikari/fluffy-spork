import React from "react";
import styled from "@emotion/styled";
import Box from "../Box";
import Flex from "../Flex";
import Link from "../Link";
import Text from "../Text";
import { ReactComponent as Star } from "../../icons/star.svg";

const BlackStarLogo = styled(Star)`
  &:hover {
    fill: orange;
    cursor: pointer;
  }
`;

const RedStarLogo = styled(BlackStarLogo)`
  fill: red;
`;

const RepoDetail = ({
  id,
  name,
  description,
  stars,
  link,
  toggleFavouriate,
  isFavouriate,
}) => {
  return (
    <Flex>
      <Box padding="5px">
        {isFavouriate ? (
          <RedStarLogo
            height="32px"
            width="32px"
            onClick={() =>
              toggleFavouriate({ id, name, description, stars, link })
            }
          />
        ) : (
          <BlackStarLogo
            height="32px"
            width="32px"
            onClick={() =>
              toggleFavouriate({ id, name, description, stars, link })
            }
          />
        )}
      </Box>
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
    </Flex>
  );
};

export default RepoDetail;
