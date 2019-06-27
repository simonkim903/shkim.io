import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"

const Content = styled.div`
  padding: 1.5rem 3rem;
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
`

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }

  :hover::after {
    transform: scaleX(1);
  }
`

const HomeLink = styled(NavLink)`
  margin-left: 0;
`

const SiteHeader = styled.header`
  background: transparent;
`

const Header = () => (
  <SiteHeader>
    <Content>
      <NavLink to="/blog">shkim.io</NavLink>
      <HomeLink to="/">about</HomeLink>
    </Content>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
