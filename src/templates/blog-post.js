import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

export default function Template({ data }) {
  const { frontmatter, html } = data.content;

  return (
    <Layout>
        <SEO title="Tag" />
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const postQuery = graphql`
  fragment post on MarkdownRemark {
    frontmatter {
      id
      title
      path
    }
  }

  query BlogPostQuery($path: String!) {
    content: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      ...post
    }
  }
`;
