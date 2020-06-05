const path = require('path');
const kebabCase = require('lodash.kebabcase');

// exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions;
//   const contentPath = 'lessons';
//   let slug;

//   if (node.internal.type === 'Mdx') {
//     return;
//   }

//   if (node.internal.type === 'Mdx') {
//     if (
//       Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
//       Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
//     ) {
//       slug = `/${kebabCase(node.frontmatter.slug)}`;
//     }
//     actions.createNodeField({
//       node,
//       name: 'slug',
//       value: `${contentPath}${slug}`,
//     });
//   }
// };

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
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
      path: `/lessons/${node.frontmatter.slug}`,
      component: require.resolve('./src/templates/lesson-template.tsx'),
      context: { slug: node.frontmatter.slug },
    });
  });
};
