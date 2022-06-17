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
]

const Experience = () => (
  <Layout>
    <div className={styles.textCenter}>
    <Seo title="Experience" />
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
  
    <h1 className={styles.textCenter}>โรคมะเร็ง</h1>
    { /* First Row Cancer */ }
    <Row xs={1} md={4}>
      <Col>{/* 1 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/wkvMkZFtOOg"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>มะเร็งเต้านม มะเร็งรังไข่ ทั้งคีโม ทั้งฉายแสง ทั้งยา แต่กลับรุกรานมากขึ้น แล้วทำอย่างไรให้ตัวเองหาย?</h6>
      </Col>
      <Col>{/* 2 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/0jPDvKaR_Fo"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>มะเร็ง 3 ชนิดในเวลา 5 ปี ลำไส้,ตับ,ท้อง เธอหยุดใช้เคมีหันมาหา Nrf2 Nrf1 ผ่านไป 8 เดือนเธอเป็นอย่างไร?</h6>
      </Col>
      <Col>{/* 3 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/qHK9h6ZjJvU"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>ข้อเข่าเสื่อม , ตาแห้ง, ริดสีดวงทวาร, มะเร็งลำไส้ใหญ่</h6>
      </Col>
      <Col>{/* 4 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/gPpWTNG23Yg"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>มะเร็งตับ, หัวใจเต้นผิดจังหวะ, ต้อกระจก หายไปเพราะอะไร?</h6>
      </Col>
    </Row>
    { /* Second Row Cancer */ }
    <Row xs={1} md={4}>
      <Col>{/* 1 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/x0E5qvnoQfc"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>มะเร็งที่ตับ หัวใจเต้นผิดจังหวะ ต้อกระจก คืนสู่ปกติได้อย่างไร? ใครมีปัญหานี้มาฟังกันค่ะ</h6>
      </Col>
      <Col>{/* 2 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/BmpX75EcjrE"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>มะเร็งสายพันธุ์ GIS ที่ทางเดินอาหาร, มะเร็งตับ, มีก้อนเนื้อที่ท้องขนาด 2 กก., ตัดกระเพาะ</h6>
      </Col>
      <Col>{/* 3 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/HrvjArYvEP0"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>มะเร็งต่อมลูกหมาก หายได้อย่างไร โดย น.ท.อรรถพันธ์ ญาณกรธนาทรัพย์</h6>
      </Col>
      <Col>{/* 4 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/5OFZ422EUH0"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>มะเร็งปากมดลูก ระยะที่สาม เข้าระยะสี่ เธอทำอย่างไร จึงคืนสู่ปกติ</h6>
      </Col>
    </Row>
    { /* Third Row Cancer */ }
    <Row xs={1} md={4}>
      <Col>{/* 1 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/p1KVgSlQhsc"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>คุณ สุปราณี สมดุลยาวาทย์ แชร์ประสบการณ์ใช้ Protandim ที่เธอได้รับผลดีมากกว่ายี่สิบรายการ</h6>
      </Col>
      <Col>{/* 2 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/Fg-d6MSs24A"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>ไมเกรน, อ้วน, มะเร็ง, ปลอกประสาทอักเสบ</h6>
      </Col>
      <Col>{/* 3 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/HwGg3jQFlE0"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>ไต ฟอกไต เปลี่ยนไต มะเร็งตับ ทนทรมานมานาน ได้อย่างไร และ หลังจากใช้ Protandim ชีวิตเปลี่ยนอย่างไร</h6>
      </Col>
      <Col>{/* 4 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/D2MtMEXOgp4"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>โรคกล้ามเนื้อหัวใจอ่อนแรงเฉียบพลัน ที่เกิดขึ้นกับคุณแอ้ม จันทิรา เลือกการดูแลตัวเองด้วย Protandim</h6>
      </Col>
    </Row>
    <hr />
    
    <h1 className={styles.textCenter}>โรคเบาหวาน</h1>
    { /* First Row Diabete */ }
    <Row xs={1} md={4}>
      <Col>{/* 1 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/C-En2zpcCbY"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>โรคเบาหวาน คุณชูพัฒน์ สิริแสงพัฒน์ ป่วยกับโรคเบาหวานมานานถึง 14 ปี แต่แล้วก็หายขาด 100% จากโรคนี้</h6>
      </Col>
      <Col>{/* 2 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/3I719dSK0Cg"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>Highlight คุณชูพัฒน์ สิริแสงพัฒน์ เคยเป็นเบาหวาน นานถึง14 ปี EP.1</h6>
      </Col>
      <Col>{/* 3 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/gD2y2WjojTo"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>Highlight คุณชูพัฒน์ สิริแสงพัฒน์ เคยเป็นเบาหวาน นานถึง14 ปี EP.2</h6>
      </Col>
      <Col>{/* 4 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/8_PTLQbx7aw"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>ภูมิแพ้ หลอดลมตีบ เบาหวาน เส้นเลือดสมองตีบ หัวใจโต หัวเข่าเสื่อมเส้นยึด</h6>
      </Col>
    </Row>

    { /* Second Row Diabete */ }
    <Row xs={1} md={4}>
      <Col>{/* 1 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/QQnsRGIfTgI"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>หัวใจ ความดัน เบาหวาน</h6>
      </Col>
      <Col>{/* 2 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/Arzzl8IyKCg"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>ความดัน เบาหวาน กับ อดีตนักวิชาการขนส่งชำนาญการ กลุ่มกิจการระหว่างประเทศ กรมเจ้าท่า</h6>
      </Col>
      <Col>{/* 3 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/XhCM8Um4lGQ"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>Covid-19 , งูสวัด ความดัน เบาหวาน หัวใจ ถูกปราบด้วยการใช้ Nrf2, Nrf1</h6>
      </Col>
      <Col>{/* 4 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/lKk_4lqwWy4"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>โรคหัวใจล้มเหลว หัวใจโต เลือดคั่งในหัวใจ น้ำท่วมปอด ความดัน เบาหวาน หัวเข่าเสื่อม นิ้วล้อค ไม่มีแรง</h6>
      </Col>
    </Row>
    <hr />

    <h1 className={styles.textCenter}>โรคความดัน</h1>
    { /* First Row Hypertension */ }
    <Row xs={1} md={4}>
      <Col>{/* 1 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/Mp2ifuQbtRY"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>ปวดกระเบนเหน็บ กระดูกทับเส้นประสาท บ้านหมุน ไมเกรน ความดันโลหิตสูง คอเลสเตอรอล เข่าเสื่อม</h6>
      </Col>
      <Col>{/* 2 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/Or6NicR1J9Y"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>โรคหลับใน ริดสีดวงทวาร ภูมิแพ้ ความดันต่ำ</h6>
      </Col>
      <Col>{/* 3 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/Vm7_UYred7o"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>Covid-19 ,หอบ, กรดไหลย้อน, ภูมิแพ้, น้ำในหู, ความดันต่ำ,ไขมันในเลือดสูง,ไขมันพอกตับ,เก้าต์, ซึมเศร้า</h6>
      </Col>
      <Col>{/* 4 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/Q119GYe5C8w"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>ความดัน ไขมัน และอีกหลายปัญหาที่ควรรับฟังวีดีโอนี้</h6>
      </Col>
    </Row>
    <hr />

    <h1 className={styles.textCenter}>อยากสวยต้องแอคติเวทด้วยโปรแทนดิม</h1>
    { /* First Row Beautiful */ }
    <Row xs={1} md={4}>
      <Col>{/* 1 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/aYzXltvJGPs"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>เพราะอยากสวย และ นอนไม่หลับ จึง Activate ด้วย Protandim</h6>
      </Col>
      <Col>{/* 2 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/pjNrHSJH-Sc"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>ปวดเมื่อย ทั่วร่างกาย คุณแม่เป็นอัมพฤกษ์ คุณพ่อเป็นเก๊าท์</h6>
      </Col>
      <Col>{/* 3 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/hIpzhShAPq4"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>โรคไทรอยด์ เป็นพิษ, ไฮปอร์ไทรอยด์</h6>
      </Col>
      <Col>{/* 4 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/4ky-unop5xw"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>เพราะเคยเป็นผู้สื่อข่าวมานานกว่า 20 ปี บุกพิสูจน์และหาข้อมูลก่อน Activate ร่างกายตนเองเพื่อย้อนวัย</h6>
      </Col>
    </Row>
    <hr />

    <h1 className={styles.textCenter}>โรคหัวใจ</h1>
    { /* First Row Heart */ }
    <Row xs={1} md={4}>
      <Col>{/* 1 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/E7hGacjBA68"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>โรคหัวใจล้มเหลว หัวใจโต เลือดคั่งในหัวใจ น้ำท่วมปอด</h6>
      </Col>
      <Col>{/* 2 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/cQfKTKr-3zU"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>โรคหลอดเลือดหัวใจอุดตัน, ก้อนเนื้องอกในมดลูก</h6>
      </Col>
      <Col>{/* 3 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/D2MtMEXOgp4"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>โรคกล้ามเนื้อหัวใจอ่อนแรงเฉียบพลัน ที่เกิดขึ้นกับคุณแอ้ม จันทิรา เลือกการดูแลตัวเองด้วย Protandim</h6>
      </Col>
      <Col>{/* 4 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/R-wWj04KjYs"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>ป่วยทั้งครอบครัว มดลูกโต ลิ้นหัวใจปิดไม่สนิท ตะคริว เส้นเลือดขอด อ้วน ตาต้อกระจก เก๊าท์ กรดไหลย้อน</h6>
      </Col>
    </Row>
    <hr />

    <h1 className={styles.textCenter}>โรคเส้นเลือดในสมอง</h1>
    { /* First Row Brain */ }
    <Row xs={1} md={4}>
      <Col>{/* 1 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/XyFVQfFsHts"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>คุณสวัสดิ์ ผู้ป่วยเส้นเลือดในสมองแตก</h6>
      </Col>
      <Col>{/* 2 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/gxg535j4YfM"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>เส้นเลือดใหญ่แตกในสมองที่คุณหมอไม่รักษาแต่ร่างกายตัวเองกลับเป็นหมอรักษาให้ตัวเองจนกลับลุกมาเดินได้</h6>
      </Col>
      <Col>{/* 3 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/8_PTLQbx7aw"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>ภูมิแพ้ หลอดลมตีบ เบาหวาน เส้นเลือดสมองตีบ หัวใจโต หัวเข่าเสื่อมเส้นยึด</h6>
      </Col>
      <Col>{/* 4 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/oTLtGagE5ag"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>ไทรอยด์ เส้นเลือดตีบ โรคตับ อดนอน อ่อนเพลีย</h6>
      </Col>
    </Row>
    <hr />

    <h1 className={styles.textCenter}>โรคไต</h1>
    { /* First Row Kidney */ }
    <Row xs={1} md={4}>
      <Col>{/* 1 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/l-2CDzFolUo"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>โรคไตเรื้อรัง หอบหืด ท้องผูก อายุเธอเพียง 35 แต่ต้องฟอกไตมานานกว่า 2 ปี มาฟังเธอเล่ากันค่ะ</h6>
      </Col>
      <Col>{/* 2 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/y2KRaahpg8g"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>ตับ ไต Covid เม็ดเลือด คุณวศิน อารียเดช เลือก Activate(เปิดทางให้) ยีน รักษาร่างกายเองอย่างธรรมชาติ</h6>
      </Col>
      <Col>{/* 3 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/HwGg3jQFlE0"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>ไต ฟอกไต เปลี่ยนไต มะเร็งตับ ทนทรมานมานาน ได้อย่างไร และ หลังจากใช้ Protandim ชีวิตเปลี่ยนอย่างไร</h6>
      </Col>
      <Col>{/* 4 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/aSlcW2xzjDc"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>Driving Syndrome ไต กรดไหลย้อน เอ็นร้อยหวาย ไมเกรน ลมดักในหัวใจ ลดความอ้วนไม่ลง</h6>
      </Col>
    </Row>
    <hr />
    <h1 className={styles.textCenter}>อัมพฤกษ์ อัมพาต</h1>
    { /* First Row Paralysis */ }
    <Row xs={1} md={4}>
      <Col>{/* 1 */}
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/fNlouAS1IH0"
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>อัมพฤกษ์ อัมพาต(สัญญาณ)คุณกุลดิช ลิดดิโลว์ เล่าการดูแลตัวเองด้วยวิธี Activate Cells (ไม่เลือกผ่าตัด)</h6>
      </Col>
      <Col>{/* 2 */}

      </Col>
      <Col>{/* 3 */}

      </Col>
      <Col>{/* 4 */}

      </Col>
    </Row>
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

export default Experience
