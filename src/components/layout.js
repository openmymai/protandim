/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby";
import Typed from "typed.js";
import * as styles from "./index.module.css";

import "./layout.css"
import { Container } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image";

import "bootstrap/dist/css/bootstrap.css"

const mainPageLinks = [
  { text: "หน้าแรก", url: "/" },
  { text: "ไลฟ์เวนเทจ", url: "/lifevantage" },
  { text: "งานวิจัย", url: "/research" },
  { text: "ประสบการณ์", url: "/experience" },
];

const Layout = ({ children }) => {
  const el = useRef(null)
  const typed = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        `จุดเริ่มต้นเล็กๆ สร้างฝันที่ยิ่งใหญ่`
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };
    typed.current = new Typed(el.current, options)

    return () => {
      typed.current.destroy()
    }
  },[]);

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
      <div className={styles.textCenter}>
      <div className={styles.intro}>
        {mainPageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== mainPageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
      </div>
      <StaticImage
        src="../images/LFVNFullLogo.jpg"
        loading="eager"
        width={800}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    </div>
    <div className="text">
      <center><h3><span style={{whiteSpace: 'pre'}} ref={el} /></h3></center>
    </div>
      <hr />
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
