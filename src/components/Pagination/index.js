import React from 'react';
import Button from '../Button';
import Flex from '../Flex';
import Text from '../Text';

const Pagination = ({
  inProgress,
  currentPage,
  goToPreviousPage,
  goToNextPage,
}) => {
  const isFirstPage = currentPage === 1;
  return (
    <Flex justifyContent="flex-start">
      <Flex marginRight="10px" paddingTop="5px" alignItems="center">
        <Text as="span">Page {currentPage}</Text>
      </Flex>
      <Button
        padding="5px"
        marginRight="20px"
        width="80px"
        onClick={goToPreviousPage}
        disabled={isFirstPage || inProgress}
      >
        Previous
      </Button>
      <Button
        padding="5px"
        width="80px"
        onClick={goToNextPage}
        disabled={inProgress}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
