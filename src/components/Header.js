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

const TagLink = styled(Link)`
  position: relative;
  margin: 0 1rem;
  color: #000000;
  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    border-bottom: 2px solid #3366FF;
    transition: 0.4s;
  }

  &:hover:after {
    width: 100%;
  }
`

const Tag = styled.div`
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
        <TagLink to="/">
          All
        </TagLink>
        {tags.map((tag) => (
          <TagLink key={tag} to={`/${tag}`}>
            {tag.toUpperCase()}
          </TagLink>
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
