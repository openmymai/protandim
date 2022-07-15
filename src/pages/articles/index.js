import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Image } from "react-bootstrap"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import * as styles from "../../components/index.module.css"

import lineOrder from "../../images/lineorder.gif"


const mainPageLinks = [
  { text: "หน้าแรก", url: "/" },
  { text: "ไลฟ์เวนเทจ", url: "/lifevantage" },
  { text: "งานวิจัย", url: "/research" },
  { text: "ประสบการณ์", url: "/experience" },
  { text: "บทความ", url: "/articles" },
]

const links = [
  {
    text: "ไตอยู่ที่ไหน? ทำหน้าที่อะไร?",
    url: "kidney01",
    description: "ไตเป็นอวัยวะรูปคล้ายถั่ว โดยปกติคนเราจะมีไต 2 ข้างอยู่ตรงบริเวณชายโครงด้านหลังบริเวณบั้นเอว",
  },
  {
    text: "",
    url: "",
    description: "",
  },
  {
    text: "",
    url: "",
    description: "",
  },
  {
    text: "",
    url: "",
    description: "",
  },
]
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
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
        src="../../images/LFVNFullLogo.jpg"
        loading="eager"
        width={800}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    </div>
    <h1 className={styles.textCenter}>จุดเริ่มต้นเล็กๆ สร้างฝันที่ยิ่งใหญ่</h1>
    <hr />

    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>

    

    {/* Line Order Image */}
      <center>
        <a href="https://lin.ee/PdT5d43" target="_blank" rel="noopener noreferrer">
          <Image
            src={lineOrder}
            alt=""
            fluid
            width={500}
          />
        </a>
      </center>
    {/* Line Order Image */}
  </Layout>
)

export default IndexPage
