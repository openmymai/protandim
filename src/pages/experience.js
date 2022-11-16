import React, { useState, useEffect, useRef} from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Row, Col, Image } from "react-bootstrap";

import Layout from "../components/layout";
import Seo from "../components/seo";

import lineOrder from "../images/lineorder.gif";
import loadingImage from "../images/loadinggif.gif";

const Experience = () => {
  const data = useStaticQuery(graphql`
  query ExperienceQuery {
    allExperienceJson {
      nodes {
          src
          desc
        }
      }
    }
  `);

  const allExperience = data.allExperienceJson.nodes

  const [ list, setList ] = useState([...allExperience.slice(0, 12)]);
  const [ loadMore, setLoadMore ] = useState(false);
  const [ hasMore, setHasMore ] = useState(allExperience.length > 12)
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
    const isMore = currentLength < allExperience.length
    const nextResults = isMore
      ? allExperience.slice(currentLength, currentLength + 12)
      : []
    setList([...list, ...nextResults])
    setLoadMore(false)
  }
  }, [loadMore, hasMore]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const isMore = list.length < allExperience.length
    setHasMore(isMore)
  }, [list]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
  <Layout>
    <Seo title="Experience" />
  
    {/* Experience */}
    <Row xs={1} md={4}>       
      {list.map((experience) => (
        <Col key={experience.src}>
          <div className="ratio ratio-16x9">
            <iframe
              src={experience.src}
              title="Embed vdo"
              allowFullScreen
            />
          </div>
          <h6>{experience.desc}</h6>
        </Col>
      ))}
    <div ref={loadRef}>
      {hasMore ? <Image
            src={loadingImage}
            alt=""
            fluid
            width={500}
          /> : <p></p>}
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
  );
};

export default Experience;
