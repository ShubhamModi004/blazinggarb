import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import netlifyIdentity from 'netlify-identity-widget';

import Header from "./header"
import "./layout.css"

const getSiteMetadata = graphql`
      {
        site {
          siteMetadata {
            title,
            description,
            author
          }
        }
      }
`

class Layout extends React.Component() {
  
  render() {
    const { children } = this.props;
    const user = netlifyIdentity.currentUser();
    return (  
      <StaticQuery
        query={getSiteMetadata}
        render={data => (
          <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <ul style={{ display: 'flex', borderBottom: '1px solid', listStyle: 'none' }}>
              <li style={{ padding: '3px', margin: '10px'}}><Link getProps={({ isCurrent }) => {
                  return isCurrent ? { className: "active" } : null
                }} to="/" >Home</Link></li>
              <li style={{ padding: '3px', margin: '10px' }}><Link getProps={({ isCurrent }) => {
                  return isCurrent ? { className: "active" } : null
                }} to="/page-2">Page 2</Link></li>
              <li style={{ padding: '3px', margin: '10px' }}><Link getProps={({ isCurrent }) => {
                  return isCurrent ? { className: "active" } : null
                }} to="/page-3">Page 3</Link></li>
              <li style={{ padding: '3px', margin: '10px' }}><Link getProps={({ isCurrent }) => {
                  return isCurrent ? { className: "active" } : null
                }} to="/blog">Blog</Link></li>
              <li style={{ padding: '3px', margin: '10px' }}><Link getProps={({ isCurrent }) => {
                return isCurrent ? { className: "active" } : null
              }} to="/products">Products</Link></li>
            </ul>
            
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              <main>{children}</main>
              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="http://shubham004.in/intelictoWebsite">{data.site.siteMetadata.author}</a>
              </footer>
            </div>
          </>
        )}
      />
    )
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
