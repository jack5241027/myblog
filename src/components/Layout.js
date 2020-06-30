/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header';
import './layout.css';

const Container = styled.div`
  width: 95%;
  max-width: 780px;
  padding: 0px 1.0875rem 1.45rem;
  margin: 0px auto;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            tags
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Header tags={data.site.siteMetadata.tags} siteTitle={data.site.siteMetadata.title} />
        <Container>
          <main>{children}</main>
        </Container>
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
