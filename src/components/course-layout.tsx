import React from 'react';
import { Link } from 'gatsby';
import { Grid, Flex, Box, Heading } from '@chakra-ui/core';

const CourseLayout = ({ data, courseName, courseImage, courseDescription }) => {
  return (
    <Box p={5}>
      <Heading as="h2">{courseName}</Heading>

      {data.allMdx.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={`${node.frontmatter.course}/${node.fields.slug}`}>
            {node.fields.slug}
          </Link>
        </div>
      ))}
    </Box>
  );
};

export default CourseLayout;
