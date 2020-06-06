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
      courseName="Teleworking Technology & Tools"
      courseImage="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      courseDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorem tempora ducimus deserunt porro aliquid nulla perferendis ab facere non?"
      // courseName={location.state.courseName || 'loading'}
      // courseImage={location.state.courseImage || 'loading'}
      // courseDescription={location.state.courseDescription || 'loading'}
    />
  );
};

export default TeleworkingTechnologyAndToolsCoursePage;
