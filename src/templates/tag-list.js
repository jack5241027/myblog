import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from "styled-components"

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Post from '../components/Post';

export default function TagList({ pageContext }) {
  const { postList, tag } = pageContext
  return (
    <Layout>
        <SEO title="Tag" />
        <React.Fragment>
            <h2>{tag}</h2> 
            {postList.map((info) => (
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
  );
}
