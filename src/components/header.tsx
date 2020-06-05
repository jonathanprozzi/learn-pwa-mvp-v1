import React from 'react';
import { Link } from 'gatsby';
import { Flex, Heading, Link as ChakraLink } from '@chakra-ui/core';
import ColorToggle from './color-toggle';

const Header: React.FC = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      height="8vh"
      w="100vw"
      bg="black"
      boxShadow="md"
    >
      <Flex
        direction="row"
        justify="space-around"
        w={['100vw', '100vw', '80vw', '80vw']}
      >
        <Link to="/">
          <ChakraLink color="teal.200">
            <Heading as="h1" size="lg" color="white">
              Learn Offline MVP v1
            </Heading>
          </ChakraLink>
        </Link>
        <ColorToggle />
      </Flex>
    </Flex>
  );
};

export default Header;
