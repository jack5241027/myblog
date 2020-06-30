/**
 * Implement Gatsby's Node APIs.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

exports.createPages = (params) => {
  const { actions, graphql } = params;
  const { createPage } = actions;

  const postTemplate = path.resolve('src/templates/blog-post.js');

  const tagListTemplate = path.resolve('src/templates/tag-list.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              title
              description
              id
              path
              tags
            }
          }
        }
      }
      
      site {
        siteMetadata {
          tags
        }
      }
    }
  `).then(({ errors, data }) => {
    if (errors) {
      errors.forEach(e => console.error(e.toString()));
      return Promise.reject(errors);
    }
    data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      });
    });
    data.site.siteMetadata.tags.forEach(tag => {
      createPage({
        path: `/${tag}`,
        component: tagListTemplate,
        context: {
          // This time the entire product is passed down as context
          tag,
          postList: data.allMarkdownRemark.edges.filter(({ node }) => 
            node.frontmatter.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
          ).map((post) => ({
            ...post.node.frontmatter
          }))
        }
      });
    });
  });
};
