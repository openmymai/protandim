/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import { Container } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.css"

const Layout = ({ children }) => {
  return (
    <>
      <Container>
      <br />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        {/* Main Content */}
        <main>
          {children}
        </main>
        {/* Main Content */}
        
        <hr />
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; โปรแทนดิม ประเทศไทย
        </footer>
      </div>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
