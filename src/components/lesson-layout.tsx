import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Box, Heading } from '@chakra-ui/core';
import Layout from './layout';

const LessonLayout = ({ title, body }) => (
  <Layout>
    <Box>
      <Heading as="h1" size="2xl">
        {title}
      </Heading>
      <MDXRenderer>{body}</MDXRenderer>
    </Box>
  </Layout>
);

export default LessonLayout;
