import React from 'react';
import {
  PseudoBox,
  Box,
  Flex,
  Heading,
  Text,
  Badge,
  Image,
} from '@chakra-ui/core';

const CourseCard = ({ courseName, courseImage, courseDescription, isNew }) => {
  return (
    <PseudoBox
      w="100%"
      h="auto"
      maxW="2xl"
      rounded="md"
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.2);"
      _hover={{
        cursor: 'pointer',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Image src={courseImage} alt="asdf" roundedTop="md" />
      <Box p="4" alignItems="center" justifyContent="center">
        <Box d="flex" alignItems="baseline">
          {/* {isNew && (
            <Badge rounded="full" px="2" variantColor="teal">
              New
            </Badge>
          )} */}

          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            // ml={data.isNew ? 2 : 0}
            ml={0}
          >
            {courseName}
          </Box>
        </Box>
        <Box mt="1" fontWeight="normal" as="span" lineHeight="tight">
          {courseDescription}
        </Box>
      </Box>
    </PseudoBox>
  );
};

export default CourseCard;
