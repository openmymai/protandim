import React, { useState, useRef, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
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



const Research = () => {
  const data = useStaticQuery(graphql`
    query ResearchQuery {
      allResearchJson {
        nodes {
            src
            desc
          }
        }
      }
  `);
  
  const allResearch = data.allResearchJson.nodes
  
  const [ list, setList ] = useState([...allResearch.slice(0, 12)]);

  const [ loadMore, setLoadMore ] = useState(false);

  const [ hasMore, setHasMore ] = useState(allResearch.length > 12)

  const loadRef = useRef();

  const handleObserver = (entities) => {
    const target = entities[0]
    if (target.isIntersecting) {
      setLoadMore(true)
    }
  }

  useEffect(() => {
    var options = {
      root: null,
      rootmargin: "20px",
      threshold: 1.0,
    }
    const observer = new IntersectionObserver(handleObserver, options)
    if (loadRef.current) {
      observer.observe(loadRef.current)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < allResearch.length
      const nextResults = isMore
        ? allResearch.slice(currentLength, currentLength + 12)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const isMore = list.length < allResearch.length
    setHasMore(isMore)
  }, [list]) // eslint-disable-line react-hooks/exhaustive-deps

  return(
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
      {list.map((research, i) => (
        <Col key={research.src}>
          <div className="ratio ratio-16x9">
            <iframe
              src={research.src}
              title="Embed vdo"
              allowFullScreen
            />
          </div>
          <h6>{research.desc}</h6>
        </Col>
      ))}
      <div ref={loadRef}>
        {hasMore ? <p>Loading...</p> : <h3>Completed</h3>}
      </div>
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
};

export default Research;
