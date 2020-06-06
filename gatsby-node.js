const kebabCase = require('lodash.kebabcase');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  const contentPath = 'lessons';
  let slug;

  if (node.internal.type !== 'Mdx') {
    return;
  }

  if (node.internal.type === 'Mdx') {
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${kebabCase(node.frontmatter.slug)}`;
    } else if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      !Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${kebabCase(node.frontmatter.title)}`;
    }
    actions.createNodeField({
      node,
      name: 'slug',
      value: `${contentPath}${slug}`,
      // value: slug,
    });
    actions.createNodeField({
      node,
      name: 'course',
      value: 'course-node',
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            course
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic(
      'There was an error loading the Md/Mdx files.',
      result.errors
    );
  }

  result.data.allMdx.nodes.forEach((node) => {
    createPage({
      path: `${node.frontmatter.course}/${node.fields.slug}`,
      // path: `${node.frontmatter.course}/lessons/${node.fields.slug}`,
      component: require.resolve('./src/templates/lesson-template.tsx'),
      context: { slug: node.fields.slug, course: node.fields.course },
    });
  });
};
