import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import netlifyIdentity from 'netlify-identity-widget';
import "./layout.css"


import gatsbyLogo from '../images/gatsby-icon.png';

class Header extends React.Component {

  componentDidMount() {
    netlifyIdentity.init();
  }

  render() {
    const { siteTitle } = this.props; 
    return(
      (
        <header
          style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`,
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1.45rem 1.0875rem`,
            }}
          >

            {/* Title and Logo */}
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <img src={gatsbyLogo} alt="Gatsby garb Logo" style={{
                width: '50px',
                border: '3px solid orange',
                margin: '0 5px',
                borderRadius: '50%'
              }} />
              <h1 style={{ margin: 0 }}>
                <Link
                  to="/"
                  className="blazing"
                  getProps={({ isCurrent }) => {
                    return isCurrent ? { className: "active" } : null
                  }}
                >
                  {siteTitle}
                </Link>
              </h1>
              <div data-netlify-identity-menu></div>
            </span>
          </div>
        </header>
      )
    )
  }
  
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
