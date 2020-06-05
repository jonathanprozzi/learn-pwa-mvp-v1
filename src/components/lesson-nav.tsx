import React from 'react';
import { Flex, ButtonGroup, Button } from '@chakra-ui/core';

const LessonNav = () => {
  return (
    <Flex
      direction="row"
      align="center"
      justify="space-around"
      marginY={4}
      borderBottom="1px"
      borderColor="gray.200"
    >
      <ButtonGroup spacing={2} paddingBottom={4}>
        <Button
          size="sm"
          width="150px"
          leftIcon="arrow-back"
          variantColor="cyan"
        >
          Previous Lesson
        </Button>
        <Button
          size="sm"
          width="150px"
          rightIcon="arrow-forward"
          variantColor="cyan"
        >
          Next Lesson
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default LessonNav;
