import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from "styled-components"

import Layout from '../components/Layout';
import Image from '../components/Image';
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
