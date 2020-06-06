import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import CourseLayout from '../components/course-layout';

const TeleworkingTechnologyAndToolsCoursePage = ({ location }) => {
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
    <CourseLayout
      data={data}
      courseName={location.state.courseName || 'loading'}
      courseImage={location.state.courseImage || 'loading'}
      courseDescription={location.state.courseDescription || 'loading'}
    />
  );
};

export default TeleworkingTechnologyAndToolsCoursePage;
