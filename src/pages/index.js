import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Post from '../components/Post';


const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query getAllPost {
        allPost: allMarkdownRemark{
          nodes {
            info: frontmatter {
              title
              description
              id
              path
              tags
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" />
        <React.Fragment>
          {data.allPost.nodes.map(({info}) => (
            <Post
              key={info.id}
              title={info.title}
              id={info.id.toString()}
              desc={info.description}
              tag={info.tags[0]}
              path={info.path}
            />
          ))}
        </React.Fragment>
      </Layout>
    )}
  />
);

export default IndexPage;
