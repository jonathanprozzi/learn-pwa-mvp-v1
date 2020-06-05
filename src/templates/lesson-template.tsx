import React from 'react';
import { graphql } from 'gatsby';
import LessonLayout from '../components/lesson-layout';

export const query = graphql`
  query LessonQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        slug
        # date(formatString: "MMMM DD, YYYY")
        # excerpt
        # categories
      }
      # timeToRead
      # excerpt
      # wordCount {
      #   words
      # }
    }
  }
`;

const LessonTemplate = ({ data }) => {
  return (
    <div>
      <LessonLayout
        title={data.mdx.frontmatter.title}
        // date={data.mdx.frontmatter.date}
        // categories={data.mdx.frontmatter.categories}
        // excerpt={
        //   data.mdx.frontmatter.excerpt
        //     ? data.mdx.frontmatter.excerpt
        //     : data.mdx.excerpt
        // }
        body={data.mdx.body}
      ></LessonLayout>
    </div>
  );
};

export default LessonTemplate;
