import React from 'react';
import { graphql } from 'gatsby';

export default function Template({ data }) {
  const { frontmatter, html } = data.content;

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
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
