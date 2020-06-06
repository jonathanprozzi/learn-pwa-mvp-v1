import React from 'react';
import { Box, Button, Heading, Text, useColorMode } from '@chakra-ui/core';
import Layout from '../components/layout';
import CourseGrid from '../components/course-grid';

const IndexPage = () => {
  return (
    <Layout>
      <Box p={5}>
        <CourseGrid />
      </Box>
    </Layout>
  );
};

export default IndexPage;
