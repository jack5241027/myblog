import React from 'react';
import styled from "styled-components"

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Post from '../components/Post';

const Tag = styled.h3`
  margin: 0;
`

export default function TagList({ pageContext }) {
  const { postList, tag } = pageContext
  return (
    <Layout>
        <SEO title="Tag" />
        <React.Fragment>
            <Tag>{tag.toUpperCase()}</Tag> 
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
