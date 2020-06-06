import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Box, Button, Heading, Text, useColorMode } from '@chakra-ui/core';
import Layout from '../components/layout';
import CourseGrid from '../components/course-grid';

const TeleworkingTechnologyAndToolsCoursePage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx(
        filter: {
          frontmatter: { course: { eq: "teleworking-technology-and-tools" } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              course
              slug
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Box p={5}>
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={`${node.frontmatter.course}/${node.fields.slug}`}>
              {node.fields.slug}
            </Link>
          </div>
        ))}
      </Box>
    </Layout>
  );
};

export default TeleworkingTechnologyAndToolsCoursePage;
