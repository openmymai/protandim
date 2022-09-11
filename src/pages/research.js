import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Row, Col, Image } from "react-bootstrap";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";

import lineOrder from "../images/lineorder.gif";

const mainPageLinks = [
  { text: "หน้าแรก", url: "/" },
  { text: "ไลฟ์เวนเทจ", url: "/lifevantage" },
  { text: "งานวิจัย", url: "/research" },
  { text: "ประสบการณ์", url: "/experience" },
];

const researchLinks = [
  {
    src:"https://www.youtube.com/embed/sBx1xYu7dVo",
    desc:"ตำนานการค้นพบ SOD และโปรแทนดิม"
    },
    {
    src:"https://www.youtube.com/embed/Rr3Fr1Twq-Y",
    desc:"ค่า p ตัวชี้วัดของงานวิจัยมีความสำคัญอย่างไร"
    },
    {
    src:"https://www.youtube.com/embed/b1Xvnc2XdyU",
    desc:"งานวิจัย การตีพิมพ์และ PubMed"
    },
    {
    src:"https://www.youtube.com/embed/v8Fdu2ujy7w",
    desc:"งานวิจัยลำดับที่ 1 ของโปรแทนดิม"
    },
    {
    src:"https://www.youtube.com/embed/3yZnmq46W18",
    desc: "งานวิจัย 10 งานวิจัย ของโปรแทนดิม"
    },
    {
    src:"https://www.youtube.com/embed/8BH__btEGJE",
    desc: "งานวิจัยลำดับที่ 11 - 20 ของโปรแทนดิม"
    },
    {
    src:"https://www.youtube.com/embed/K2Gh0GfWttY",
    desc:"งานวิจัยลำดับที่ 21-28 ของโปรแทนดิม"
    },
    {
    src:"https://www.youtube.com/embed/3m9c8I8U2H8",
    desc:"งานวิจัยของโปรแทนดิมที่เกี่ยวข้องกับการทำบายพาสหัวใจ Part 1"
    },
    {
    src:"https://www.youtube.com/embed/6lAqy58DXAQ",
    desc:"งานวิจัยของโปรแทนดิม โรคมะเร็งและโรคหัวใจ"
    },
    {
    src:"https://www.youtube.com/embed/CAvXGsLXTqA",
    desc:"งานวิจัยของโปรแทนดิมแสดงถึงการแนวทางที่ได้ผลของการใช้เพื่อป้องกันมะเร็ง"
    },
    {
    src:"https://www.youtube.com/embed/sozDKur19Hc",
    desc:"งานวิจัย และวิทยาศาสตร์ที่อยู่เบื้องหลังของผลิตภัณฑ์โปรแทนดิม"
    },
    {
    src:"https://www.youtube.com/embed/qVTmHCXBBwU",
    desc:"ไลฟ์เวนเทจกับงานวิจัยที่แตกต่าง"
    },
];

const Research = () => (
  <Layout>
    <div className={styles.textCenter}>
      <Seo title="Research" />
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

    <p>วันนี้ ไลฟ์เวนเทจเป็นบริษัท นูเเทร็กซูติคอล ที่กำลังขยายตัวบนพื้นฐานทางวิทยาศาสตร์ เรามีความมุ่งมั่นที่จะช่วยให้ผู้คนมีสุขภาพที่ดี 
    ผ่านการรวมกันของผลิตภัณฑ์ที่ผ่านการตรวจสอบทางวิทยาศาสตร์และช่วยผู้คนให้ได้รับโอกาสทางธุรกิจ 
    เราช่วยให้ผู้คนมีชีวิตที่ดีกว่าสร้างและอยู่กับมกดกของเขาและใช้ชีวิตอย่างมีเป้าหมายโดยช่วยให้ผู้อื่นมีสุขภาพกายและการเงินที่สมบูรณ์</p>

    <p>โปรแทนดิม ทำหน้าที่เหมือนกับไลฟ์เวนเทจ ทั้งสองสิ่งนี้ช่วยให้ผู้คนให้มีชีวิตที่ดีขึ้น โปรแทนดิม และ Nrf2 ซินเนอร์ไจเซอร์ 
    ทำงานเพื่อช่วยให้ร่างกายของท่านทำงานตามหน้าที่ที่มีอยู่แล้ว ที่ไลฟ์เวนเทจ เรากำลังทำงานเพื่อช่วยให้ท่านมีชีวิตที่ดีขึ้นเพื่อเพิ่มศักยภาพของท่านโดยใช้คุณลักษณะ 
    ความสามารถและลักษณะ ทางพันธุกรรมที่เป็นเอกลักษณ์เพื่อทำให้ท่านเป็นอย่างที่ท่านเป็นในลึกๆข้างใน</p>
    
    <hr />

    <h1 className={styles.textCenter} style={{ color: "blue" }}>
      <a href="https://pubmed.gov/?term=protandim" target="_blank" rel="noopener noreferrer">
      <b>งานวิจัยโปรแทนดิมอ้างอิงจาก PubMed</b>
        <center>
          <StaticImage
            src="../images/PubMedLogo.png"
            loading="eager"
            width={400}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </center>
      </a>
    </h1>
    {/* Research */}
    <Row xs={1} md={4}>       
      {researchLinks.map((link, i) => (
        <Col key={link.src}>
          <div>
            <iframe
              src={link.src}
              title="Embed vdo"
              allowFullScreen
            />
          </div>
          <h6>{link.desc}</h6>
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
);

export default Research;
