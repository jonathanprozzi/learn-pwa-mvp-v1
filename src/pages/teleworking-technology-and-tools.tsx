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
    <div>
      <h1>{location.state.courseName}</h1>
      <img src={location.state.courseImage} alt="" />
      <pre>{location.state.courseDescription}</pre>
      <CourseLayout data={data} />
    </div>
  );
};

export default TeleworkingTechnologyAndToolsCoursePage;
