import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col, Image } from "react-bootstrap"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import lineOrder from "../images/lineorder.gif"

const mainPageLinks = [
  { text: "หน้าแรก", url: "/" },
  { text: "ไลฟ์เวนเทจ", url: "/lifevantage" },
  { text: "งานวิจัย", url: "/research" },
  { text: "ประสบการณ์", url: "/experience" },
  { text: "สินค้า", url: "/pricing" },
  { text: "บทความ", url: "/articles" },
]

const Pricing = () => (
  <Layout>
    <div className={styles.textCenter}>
    <Seo title="Pricing" />
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
    <h1 className={styles.textCenter}>จุดเริ่มต้นเล็กๆ สร้างฝันที่ยิ่งใหญ่</h1>
    <hr />

    <Row xs={1} md={2}>
      <Col>
        <center>
          <StaticImage
            src="../images/ProtandimNrf1.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </center>
        <br />
        <h5><b>โปรแทนดิม Nrf1</b></h5>
      </Col>
      <Col>
        <center>
          <StaticImage
            src="../images/ProtandimNrf2.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </center>
        <br />
        <h5><b>โปรแทนดิม Nrf2</b></h5>
      </Col>
    </Row>
    <br />
    <hr />
    <Row xs={1} md={2}>
      <Col>
        <center>
          <StaticImage
            src="../images/ProtandimNrf1Nrf2.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </center>
        <br />
        <h5><b>โปรแทนดิม Nrf1&Nrf2</b></h5>
      </Col>
      <Col>
        <center>
          <StaticImage
            src="../images/Probio.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </center>
        <br />
        <h5><b>โปรไบโอ</b></h5>
      </Col>
    </Row>
    <br />
    <hr />
    <Row xs={1} md={2}>
      <Col>
        <center>
          <StaticImage
            src="../images/Bronze.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </center>
        <br />
        <h5><b>ชุดลบเลือนริ้วรอย</b></h5>
      </Col>
      <Col>
        <center>
          <StaticImage
            src="../images/Bronze2.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </center>
        <br />
        <h5><b>ชุดลบเลือนริ้วรอย 2</b></h5>
      </Col>
    </Row>
    <Row xs={1} md={1}>
      <Col>
        <center>
          <StaticImage
            src="../images/ActivatedEssentialNew.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </center>
        <br />
        <h5><b>ชุดดูแลลำไส้</b></h5>
      </Col>
    </Row>
    <br />
    <hr />
    <Row xs={1} md={2}>
      <Col>
        <center>
          <StaticImage
            src="../images/FacialCleanser.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </center>
        <br />
        <h5><b>เฟเชียล คลีนเซอร์</b></h5>
        <h6>ปราศจากสารซัลเฟต ให้คุณผิวนุ่ม ชุ่มชื้น ด้วย เทคโนโลยี เอ็นอาร์เอฟทู ทรูไซเอินซ์ เฟเชียล คลีนเซอร์ 
          ชำระล้าง, ฟื้นฟู, และซ่อมแซมผิวคุณโดยยังคงรักษาความมันที่คอยเก็บความชุ่มชื้นให้แก่ใบหน้า</h6>
      </Col>
      <Col>
        <center>
          <StaticImage
            src="../images/PerfectingLotion.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </center>
        <br />
        <h5><b>เพอร์เฟคติ้ง โลชัน</b></h5>
        <h6>เพอร์เฟ็คติ้ง โลชั่น คืนความสดใส ความมีชีวิตชีวา เปล่งประกาย, ความชุ่มชื้นของผิวหน้า 
          และโทนผิวที่สม่ำเสมอภายใน 4 สัปดาห์ ด้วยนวัตกรรม Nrf2 ของเรา</h6>
      </Col>
    </Row>
    <Row xs={1} md={2}>
      <Col>
        <center>
          <StaticImage
            src="../images/EyeSerum.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </center>
        <br />
        <h5><b>อาย เซรั่ม</b></h5>
        <h6>คืนความสดชื่นและสดใสให้แก่รอบดวงตา ด้วยนวัตกรรม Nrf2 ในการลดรอยคล้ำรอบดวงตา, 
          คืนความกระชับแก่ผิว, และลดถุงใต้ตา ทำให้กล้ามเนื้อรอบดวงตากระชับขึ้น</h6>
      </Col>
      <Col>
        <center>
          <StaticImage
            src="../images/AntiAgingCream.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </center>
        <br />
        <h5><b>แอนตี้ เอจจิ้ง ครีม</b></h5>
        <h6>ครีมต่อต้านริ้วรอยขั้นสูงที่แสดงทางคลินิกเพื่อให้ความชุ่มชื้นอย่างล้ำลึก
          และช่วยต่อต้านริ้วรอยและรอยเหี่ยวย่นด้วย Nrf2 อันทรงพลัง</h6>
      </Col>
    </Row>
    <br />
    <hr />
    <Row xs={1} md={1}>
      <Col>
        <center>
          <StaticImage
            src="../images/BeautySystem.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </center>
        <br />
        <h5><b>ชุดดูแลผิวพรรณและความงาม</b></h5>
        <h6>เพื่อผลลัพธ์ที่ดีที่สุดจากระบบการดูแลความงามประจำวันของคุณจากผลิตภัณฑ์ทั้งหมด 
          ตั้งแต่คลีนเซอร์ไปจนถึงครีมเสริมประสิทธิภาพด้วย Nrf2 อันทรงพลัง</h6>
      </Col>
    </Row>
    <br />
    <hr />
    <Row xs={1} md={2}>
      <Col>
        <center>
          <StaticImage
            src="../images/PlatinumPackage1.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </center>
        <br />
        <h5><b>เวนเทจ แพลทตินั่ม แพ็คเก็ต #1</b></h5>
        <h6>โปรแทนดิม เอ็นอาร์เอฟ ทู 20 ขวด</h6>
        <h6>โปรแทนดิม เอ็นอาร์เอฟ วัน 9 ขวด</h6>
      </Col>
      <Col>
        <center>
          <StaticImage
            src="../images/PlatinumPackage2.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </center>
        <br />
        <h5><b>เวนเทจ แพลทตินั่ม แพ็คเก็ต #2</b></h5>
        <h6>โปรแทนดิม เอ็นอาร์เอฟ ทู 17 ขวด</h6>
        <h6>โปรแทนดิม เอ็นอาร์เอฟ วัน 9 ขวด</h6>
        <h6>ทรูไซเอินซ์ บิวตี้ ซิสเต็ม 1 ชุด</h6>
      </Col>
    </Row>
    <br />
    <hr />

    <Row xs={1} md={2}>
      <Col>
        <center>
          <StaticImage
            src="../images/GoldPackage.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </center>
        <br />
        <h5><b>โกลด์ แพ็คเก็ต</b></h5>
        <h6>โปรแทนดิม เอ็นอาร์เอฟ ทู 7 ขวด</h6>
        <h6>โปรแทนดิม เอ็นอาร์เอฟ วัน 3 ขวด</h6>
        <h6>ทรูไซเอินซ์ บิวตี้ ซิสเต็ม 1 ชุด</h6>
      </Col>
      <Col>
        <center>
          <StaticImage
            src="../images/VantageGold.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </center>
        <br />
        <h5><b>เวนเทจ โกลด์ แพ็คเก็ต</b></h5>
        <h6>โปรแทนดิม เอ็นอาร์เอฟ ทู 9 ขวด</h6>
        <h6>โปรแทนดิม เอ็นอาร์เอฟ วัน 4 ขวด</h6>
      </Col>
    </Row>

    <br />
    <hr />

    <h4>สอบถามผ่านไลน์...คลิก</h4> 
      <a href="https://lin.ee/PdT5d43" target="_blank" rel="noopener noreferrer">
        <StaticImage
          src="../images/linemai.png"
          width={300}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
      </a>
    <h3>โทร: (065) 993 2500</h3>
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

export default Pricing
