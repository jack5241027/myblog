import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Wrap = styled.div`
  text-align: center;
  background: #ffffff;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #eff0ef;
`

const SocialMedia = styled.header`
  background-color: #000000;
  color: #bababa;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`

const Title = styled.h1`
  color: #000000;
  margin: 0;
  padding: 2rem 3rem 3rem;
  font-family: 'Utopia-Std-Bold-Subhead';
`

const Container = styled.div`
  margin: 0px auto;
  padding: 1.45rem 1.0875rem;
`

const Icon = styled.div``

const Tag = styled.div`
  margin: 0 1rem;
  color: #000000;
`

const Nav = styled.div`
  justify-content: center;
  display: flex;
  font-family: 'Brutal-Type-Regular';
`

const Header = ({ siteTitle, tags }) => (
  <Wrap>
    <Container>
      <Title>
        <StyledLink to="/">
          {siteTitle}
        </StyledLink>
      </Title>
      <Nav>
        <Link to="/">
          <Tag key="All">All</Tag>
        </Link>
        {tags.map((tag) => (
          <Link key={tag} to={`/${tag}`}>
            <Tag>{tag.toUpperCase()}</Tag>
          </Link>
        ))}
      </Nav>
    </Container>
  </Wrap>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
