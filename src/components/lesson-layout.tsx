import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const LessonLayout = ({ title, body }) => (
  <div>
    <h1>{title}</h1>
    <section>
      <MDXRenderer>{body}</MDXRenderer>
    </section>
  </div>
);

export default LessonLayout;
