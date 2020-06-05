import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Box, Heading } from '@chakra-ui/core';
import Layout from './layout';

const LessonLayout = ({ title, body }) => (
  <Layout>
    <Heading as="h1" size="xl">
      {title}
    </Heading>
    <MDXRenderer>{body}</MDXRenderer>
  </Layout>
);

export default LessonLayout;
