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
  { text: "สินค้า", url: "/pricing" },
  { text: "บทความ", url: "/articles" },
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

    <h3>อย่ารอจนสายเกินไป</h3>
    <p>ในอดีตนับร้อยๆปี มีความเชื่อกันว่าที่คนเราป่วยและตายนั้น มีสาเหตุมาจากเชื้อโรค แต่จากผลงานวิจัยตั้งแต่ปีพ.ศ. 2503 
    ได้โต้แย้งความเชื่อเก่าๆที่ว่าคนเราป่วยและตายเพราะเชื้อโรค <b>มาเป็นว่าเพราะ<u>ความเสื่อม</u>ในระดับเซลล์ของมนุษย์เอง</b> 
    เมื่อนักวิทยาศาสตร์ค้นพบสาเหตุที่แท้จริงนี้แล้ว ก็ทำการค้นคว้าวิจัยต่อถึงวิธีการหยุดภาวะความเสื่อมของเซลล์ 
    ไม่ให้เพิ่มมากขึ้นจนเป็นสาเหตุทำให้เกิดโรค</p>

    <p>ทั้งหมดที่กล่าวมานี้ มีผลงานวิจัยรองรับมากมาย และผ่านการตรวจสอบจากรัฐบาลอเมริกัน(มีสิทธิบัตรคุ้มครอง) 
      และการที่ได้เข้าตลาดหลักทรัพย์ Nasdaq นั้น ถือว่าเป็นการรับรอง(การันตี) ทั้งตัวสินค้าและการดำเนินงานของบริษัทฯเป็นอย่างดี</p>

    <p>จากการทดลองหาค่า P-value ของNrf2 ผลที่ได้เท่ากับ 0.0001 ซึ่งหมายถึง ในจำนวนผู้ใช้โปรแทนดิม(Nrf2) 10,000 คน
    สามารถลดระดับภาวะความเสื่อมของเซลล์(oxidative strees) ได้เฉลี่ย 40% ในเวลา 30 วัน ถึง 9,999 คน(ไม่ได้ผลเพียงหนึ่งคน) 
    ข้อมูลทั้งหมดนี้เป็นข้อเท็จจริงที่มีหลักฐานยืนยันได้</p>

    

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
