import React from 'react';
import { Box, Button, Heading, Text, useColorMode } from '@chakra-ui/core';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <Box p={5}>
        <Heading size="md" mb={5}>
          Hello World
        </Heading>
      </Box>
    </Layout>
  );
};

export default IndexPage;
