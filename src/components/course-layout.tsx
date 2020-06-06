import React from 'react';
import { Link } from 'gatsby';
import { Grid, Flex, Box, Heading, Image, Text } from '@chakra-ui/core';
import Layout from './layout';

const CourseLayout = ({ data, courseName, courseImage, courseDescription }) => {
  return (
    <Layout>
      <Flex d="column" align="center" justify="center" p={4} m={2}>
        <Heading as="h2" size="xl" textAlign="center">
          {courseName ? courseName : 'Loading Name'}
        </Heading>
        <Flex direction="column" align="center" justify="center" marginTop={4}>
          <Box maxW="2xl" borderWidth="1px" rounded="lg" overflow="hidden">
            <Image src={courseImage} alt={courseName}></Image>
          </Box>
          <Text fontSize="md">{courseDescription}</Text>
        </Flex>
        <Heading as="h3" size="lg" textAlign="center">
          Course Lessons
        </Heading>
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={`${node.frontmatter.course}/${node.fields.slug}`}>
              {node.fields.slug}
            </Link>
          </div>
        ))}
      </Flex>
    </Layout>
  );
};

export default CourseLayout;
