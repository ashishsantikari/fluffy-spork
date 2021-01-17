import React from "react";
import styled from "@emotion/styled";
import Box from "../Box";
import Flex from "../Flex";
import ExternalLink from "../ExternalLink";
import Text from "../Text";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import theme from "../../theme";

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
  const { border, borderRadius, boxShadow } = theme.elements.list.item;
  return (
    <Flex
      paddingY="15px"
      marginY="15px"
      border={border}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
    >
      <Flex justifyContent="center" alignItems="center" paddingX="15px">
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
      </Flex>
      <Box>
        <Flex>
          <Box>
            <ExternalLink
              fontSize="24px"
              href={link}
              target="_blank"
              color={theme.color.secondary}
            >
              {name}
            </ExternalLink>
            <Text color="gray" fontSize="16px">
              {" "}
              with {stars} Stars
            </Text>
          </Box>
        </Flex>
        <Text as="div" paddingY="5px" display="inline-block" fontSize="18px">
          {description || "No description provided"}
        </Text>
      </Box>
    </Flex>
  );
};

export default RepoDetail;
