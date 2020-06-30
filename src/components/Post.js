import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrap = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(239, 239, 239);
  &:not(::last-child) {
    margin-bottom: 1.5em;
  }
`

const Tag = styled.div`
  font-family: 'Avenir Next','Helvetica Neue','Segoe UI','Helvetica','Arial','sans-serif';
  line-height: 32px;
  font-weight: 500;
  font-size: 14px;
  color: #3366FF;
`
const Title = styled.div`
  display: block;
  font-size: 24px;
  color: #000000;
  font-family: "KelsonSansBold";
`
const Date = styled.div`
  color: #aaaaaa;
  font-size: 12px;
  font-family: 'Sebino-Regular';
`
const Desc = styled.div`
  margin: 10px 0 0;
  font-family: 'Sebino-Regular';
`

const ReadMore = styled.div`
  display: flex;
  justify-content: flex-end;
  font-family: "Corporate-Regular";
  font-weight: 700;
`

const StyledLink = styled(Link)`
  color: #aaaaaa;
  border-bottom: 2px solid #aaaaaa;
  font-size: 14px;
  line-height: 14px;
`

const formatIDtoDate = id => `${id.slice(0,4)}/${id.slice(4,6)}/${id.slice(6,8)}`

const Post = ({
  title,
  id,
  desc,
  tag,
  path,
}) => (
  <Wrap>
    <Tag>
      <Link to={`/${tag}`}>
        {tag.toUpperCase()}
      </Link>
    </Tag>
    <Title>{title}</Title>
    <Date>{formatIDtoDate(id)}</Date>
    <Desc>{desc}</Desc>
    <ReadMore>
      <StyledLink to={`${path}`}>
        READ MORE
      </StyledLink>
    </ReadMore>
  </Wrap>
)

Post.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
}

export default Post
