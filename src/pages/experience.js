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
]

const experienceLinksUpdate = [
  {
    text: "คุณแม่ลูกสามหลังจาก Activate และหายจากไมเกรน จึงมองเห็นทางที่จะสานฝันของเธอ",
    url: "https://www.youtube.com/embed/S8b0DUFQ6oE"
  },
  { 
    text: "กชชม ดราศรี นักแสดง สไตล์ลิสต์ อยู่กับเรื่องสวยงามมาตลอด บอกว่า Nrf2 ทำให้ได้สวยงาม และแข็งแรงที่สุด",
    url: "https://www.youtube.com/embed/q73Q0obpImU"
  },
  {
    text: "มาเป็นพี่เลี้ยงเด็กในอเมริกาและทำงานร้านอาหาร ยังไม่พบฝันอันแท้จริง จนกระทั่งมาพบ #Nrf2",
    url: "https://www.youtube.com/embed/wJQIutD_CXM"
  },
  {
    text: "คุณตู่ Siwatayin Garner ทำงานนวดที่ฮาวาย หลังเลิกงานรู้สึกเหนื่อย หายใจไม่เต็ม นอนหลับยากที่สุด",
    url: "https://www.youtube.com/embed/6M6woOE3qMk"
  },
]

const experienceLinks = [
  {
    text: "บ้านหมุน ไมเกรน คุณแม่เลี้ยงเดี่ยว ฟังทางนี้",
    url: "https://www.youtube.com/embed/kktX3XU7n4s"
  },
  {
    text: "ใครเป็น #ไมเกรน ใคนชอบ #ฟิลเลอร์ #โบท้อกซ์ มาฟังอาจารย์จูนกันค่ะ",
    url: "https://www.youtube.com/embed/fW8ftIhSi7o"
  },
  { 
    text: "มะเร็งเต้านม มะเร็งรังไข่ ทั้งคีโม ทั้งฉายแสง ทั้งยา แต่กลับรุกรานมากขึ้น แล้วทำอย่างไรให้ตัวเองหาย?",
    url: "https://www.youtube.com/embed/wkvMkZFtOOg"
  },
  {
    text: "มะเร็ง 3 ชนิดในเวลา 5 ปี ลำไส้,ตับ,ท้อง เธอหยุดใช้เคมีหันมาหา Nrf2 Nrf1 ผ่านไป 8 เดือนเธอเป็นอย่างไร?",
    url: "https://www.youtube.com/embed/0jPDvKaR_Fo"
  },
  {
    text: "ข้อเข่าเสื่อม , ตาแห้ง, ริดสีดวงทวาร, มะเร็งลำไส้ใหญ่",
    url: "https://www.youtube.com/embed/qHK9h6ZjJvU"
  },
  {
    text: "มะเร็งตับ, หัวใจเต้นผิดจังหวะ, ต้อกระจก หายไปเพราะอะไร?",
    url: "https://www.youtube.com/embed/gPpWTNG23Yg"
  },
  {
    text: "มะเร็งที่ตับ หัวใจเต้นผิดจังหวะ ต้อกระจก คืนสู่ปกติได้อย่างไร? ใครมีปัญหานี้มาฟังกันค่ะ",
    url: "https://www.youtube.com/embed/x0E5qvnoQfc"
  },
  {
    text: "มะเร็งสายพันธุ์ GIS ที่ทางเดินอาหาร, มะเร็งตับ, มีก้อนเนื้อที่ท้องขนาด 2 กก., ตัดกระเพาะ",
    url: "https://www.youtube.com/embed/BmpX75EcjrE"
  },
  {
    text: "มะเร็งต่อมลูกหมาก หายได้อย่างไร โดย น.ท.อรรถพันธ์ ญาณกรธนาทรัพย์",
    url: "https://www.youtube.com/embed/HrvjArYvEP0"
  },
  {
    text: "มะเร็งปากมดลูก ระยะที่สาม เข้าระยะสี่ เธอทำอย่างไร จึงคืนสู่ปกติ",
    url: "https://www.youtube.com/embed/5OFZ422EUH0"
  },
  {
    text: "คุณ สุปราณี สมดุลยาวาทย์ แชร์ประสบการณ์ใช้ Protandim ที่เธอได้รับผลดีมากกว่ายี่สิบรายการ",
    url: "https://www.youtube.com/embed/p1KVgSlQhsc"
  },
  {
    text: "ไมเกรน, อ้วน, มะเร็ง, ปลอกประสาทอักเสบ",
    url: "https://www.youtube.com/embed/Fg-d6MSs24A"
  },
  {
    text: "ไต ฟอกไต เปลี่ยนไต มะเร็งตับ ทนทรมานมานาน ได้อย่างไร และ หลังจากใช้ Protandim ชีวิตเปลี่ยนอย่างไร",
    url: "https://www.youtube.com/embed/HwGg3jQFlE0"
  },
  {
    text: "โรคกล้ามเนื้อหัวใจอ่อนแรงเฉียบพลัน ที่เกิดขึ้นกับคุณแอ้ม จันทิรา เลือกการดูแลตัวเองด้วย Protandim",
    url: "https://www.youtube.com/embed/D2MtMEXOgp4"
  },
  {
    text: "โรคเบาหวาน คุณชูพัฒน์ สิริแสงพัฒน์ ป่วยกับโรคเบาหวานมานานถึง 14 ปี แต่แล้วก็หายขาด 100% จากโรคนี้",
    url: "https://www.youtube.com/embed/C-En2zpcCbY"
  },
  {
    text: "Highlight คุณชูพัฒน์ สิริแสงพัฒน์ เคยเป็นเบาหวาน นานถึง14 ปี EP.1",
    url: "https://www.youtube.com/embed/3I719dSK0Cg"
  },
  {
    text: "Highlight คุณชูพัฒน์ สิริแสงพัฒน์ เคยเป็นเบาหวาน นานถึง14 ปี EP.2",
    url: "https://www.youtube.com/embed/gD2y2WjojTo"
  },
  {
    text: "ภูมิแพ้ หลอดลมตีบ เบาหวาน เส้นเลือดสมองตีบ หัวใจโต หัวเข่าเสื่อมเส้นยึด",
    url: "https://www.youtube.com/embed/8_PTLQbx7aw"
  },
  {
    text: "หัวใจ ความดัน เบาหวาน",
    url: "https://www.youtube.com/embed/QQnsRGIfTgI"
  },
  {
    text: "ความดัน เบาหวาน กับ อดีตนักวิชาการขนส่งชำนาญการ กลุ่มกิจการระหว่างประเทศ กรมเจ้าท่า",
    url: "https://www.youtube.com/embed/Arzzl8IyKCg"
  },
  {
    text: "Covid-19 , งูสวัด ความดัน เบาหวาน หัวใจ ถูกปราบด้วยการใช้ Nrf2, Nrf1",
    url: "https://www.youtube.com/embed/XhCM8Um4lGQ"
  },
  {
    text: "โรคหัวใจล้มเหลว หัวใจโต เลือดคั่งในหัวใจ น้ำท่วมปอด ความดัน เบาหวาน หัวเข่าเสื่อม นิ้วล้อค ไม่มีแรง",
    url: "https://www.youtube.com/embed/lKk_4lqwWy4"
  },
  {
    text: "ปวดกระเบนเหน็บ กระดูกทับเส้นประสาท บ้านหมุน ไมเกรน ความดันโลหิตสูง คอเลสเตอรอล เข่าเสื่อม",
    url: "https://www.youtube.com/embed/Mp2ifuQbtRY"
  },
  {
    text: "โรคหลับใน ริดสีดวงทวาร ภูมิแพ้ ความดันต่ำ",
    url: "https://www.youtube.com/embed/Or6NicR1J9Y"
  },
  {
    text: "Covid-19 ,หอบ, กรดไหลย้อน, ภูมิแพ้, น้ำในหู, ความดันต่ำ,ไขมันในเลือดสูง,ไขมันพอกตับ,เก้าต์, ซึมเศร้า",
    url: "https://www.youtube.com/embed/Vm7_UYred7o"
  },
  {
    text: "ความดัน ไขมัน และอีกหลายปัญหาที่ควรรับฟังวีดีโอนี้",
    url: "https://www.youtube.com/embed/Q119GYe5C8w"
  },
  {
    text: "เพราะอยากสวย และ นอนไม่หลับ จึง Activate ด้วย Protandim",
    url: "https://www.youtube.com/embed/aYzXltvJGPs"
  },
  {
    text: "ปวดเมื่อย ทั่วร่างกาย คุณแม่เป็นอัมพฤกษ์ คุณพ่อเป็นเก๊าท์",
    url: "https://www.youtube.com/embed/pjNrHSJH-Sc"
  },
  {
    text: "โรคไทรอยด์ เป็นพิษ, ไฮปอร์ไทรอยด์",
    url: "https://www.youtube.com/embed/hIpzhShAPq4"
  },
  {
    text: "เพราะเคยเป็นผู้สื่อข่าวมานานกว่า 20 ปี บุกพิสูจน์และหาข้อมูลก่อน Activate ร่างกายตนเองเพื่อย้อนวัย",
    url: "https://www.youtube.com/embed/4ky-unop5xw"
  },
  {
    text: "โรคหัวใจล้มเหลว หัวใจโต เลือดคั่งในหัวใจ น้ำท่วมปอด",
    url: "https://www.youtube.com/embed/E7hGacjBA68"
  },
  {
    text: "โรคหลอดเลือดหัวใจอุดตัน, ก้อนเนื้องอกในมดลูก",
    url: "https://www.youtube.com/embed/cQfKTKr-3zU"
  },
  {
    text: "โรคกล้ามเนื้อหัวใจอ่อนแรงเฉียบพลัน ที่เกิดขึ้นกับคุณแอ้ม จันทิรา เลือกการดูแลตัวเองด้วย Protandim",
    url: "https://www.youtube.com/embed/D2MtMEXOgp4"
  },
  {
    text: "ป่วยทั้งครอบครัว มดลูกโต ลิ้นหัวใจปิดไม่สนิท ตะคริว เส้นเลือดขอด อ้วน ตาต้อกระจก เก๊าท์ กรดไหลย้อน",
    url: "https://www.youtube.com/embed/R-wWj04KjYs"
  },
  {
    text: "คุณสวัสดิ์ ผู้ป่วยเส้นเลือดในสมองแตก",
    url: "https://www.youtube.com/embed/XyFVQfFsHts"
  },
  {
    text: "เส้นเลือดใหญ่แตกในสมองที่คุณหมอไม่รักษาแต่ร่างกายตัวเองกลับเป็นหมอรักษาให้ตัวเองจนกลับลุกมาเดินได้",
    url: "https://www.youtube.com/embed/gxg535j4YfM"
  },
  {
    text: "ภูมิแพ้ หลอดลมตีบ เบาหวาน เส้นเลือดสมองตีบ หัวใจโต หัวเข่าเสื่อมเส้นยึด",
    url: "https://www.youtube.com/embed/8_PTLQbx7aw"
  },
  {
    text: "ไทรอยด์ เส้นเลือดตีบ โรคตับ อดนอน อ่อนเพลีย",
    url: "https://www.youtube.com/embed/oTLtGagE5ag"
  },
  {
    text: "โรคไตเรื้อรัง หอบหืด ท้องผูก อายุเธอเพียง 35 แต่ต้องฟอกไตมานานกว่า 2 ปี มาฟังเธอเล่ากันค่ะ",
    url: "https://www.youtube.com/embed/l-2CDzFolUo"
  },
  {
    text: "ตับ ไต Covid เม็ดเลือด คุณวศิน อารียเดช เลือก Activate(เปิดทางให้) ยีน รักษาร่างกายเองอย่างธรรมชาติ",
    url: "https://www.youtube.com/embed/y2KRaahpg8g"
  },
  {
    text: "ไต ฟอกไต เปลี่ยนไต มะเร็งตับ ทนทรมานมานาน ได้อย่างไร และ หลังจากใช้ Protandim ชีวิตเปลี่ยนอย่างไร",
    url: "https://www.youtube.com/embed/HwGg3jQFlE0"
  },
  {
    text: "Driving Syndrome ไต กรดไหลย้อน เอ็นร้อยหวาย ไมเกรน ลมดักในหัวใจ ลดความอ้วนไม่ลง",
    url: "https://www.youtube.com/embed/aSlcW2xzjDc"
  },
  {
    text: "อัมพฤกษ์ อัมพาต(สัญญาณ)คุณกุลดิช ลิดดิโลว์ เล่าการดูแลตัวเองด้วยวิธี Activate Cells (ไม่เลือกผ่าตัด)",
    url: "https://www.youtube.com/embed/fNlouAS1IH0"
  },
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
    {/* Update Experience */}
    <Row xs={1} md={4}>
    {experienceLinksUpdate.map((link,i) => (
      <Col>{/* 1 */}
        <div className="ratio ratio-16x9">
          <iframe
            src={link.url}
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>{link.text}</h6>
      </Col>
    ))}
    </Row>
    <hr />
    
    {/* Existing Experience */}
    <Row xs={1} md={4}>
    {experienceLinks.map((link,i) => (
      <Col>{/* 1 */}
        <div className="ratio ratio-16x9">
          <iframe
            src={link.url}
            title="Embed vdo"
            allowFullScreen
          />
        </div>
        <h6>{link.text}</h6>
      </Col>
    ))}
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
