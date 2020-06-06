import React from 'react';
import { Grid, Flex, Box, Heading } from '@chakra-ui/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from './layout';
import LessonNav from './lesson-nav';

const LessonLayout = ({ title, course, body }) => (
  <Layout>
    <Flex direction="column" maxW="900px" minHeight="100vh" margin="0 auto">
      <LessonNav />
      <Box marginX={4}>
        <Heading as="h1" size="xl">
          {title}
        </Heading>
        <pre>{course}</pre>
        <Flex direction="column">
          <MDXRenderer>{body}</MDXRenderer>
        </Flex>
      </Box>
    </Flex>
  </Layout>
);

export default LessonLayout;
