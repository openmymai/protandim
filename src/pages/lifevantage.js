import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Row, Col, Image } from "react-bootstrap";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";

import lineOrder from "../images/lineorder.gif";

const Lifevantage = () => {
  return (
  <Layout>
    <Seo title="LifeVantage" />
        
    <p><h4 style={{display: "inline-block"}}>ไลฟ์เวนเทจ</h4> เป็นบริษัทฯ ที่จดทะเบียนและจำหน่ายผลิตภัณฑ์เสริมอาหาร 
    เริ่มต้นตั้งแต่ปี 2003 ที่มลรัฐยูท่าห์ ประเทศสหรัฐอเมริกา ต่อมาได้เปลี่ยนรูปแบบการดำเนินธุรกิจจากการค้าปลีกมาสู่การตลาดเครือข่าย
    ในปี 2009 ซึ่งเป็นวิธีที่เหมาะสำหรับการจัดจำหน่าย และแบ่งปันเรื่องราวของดีๆของบริษัทสู่ผู้คนได้ทั่วโลกและขยายการตลาดได้อย่างรวดเร็ว 
    ด้วยเทคโนโลยี Nrf2 ที่อยู่ในผลิตภัณฑ์เสริมอาหาร และผลิตภัณฑ์ชุดดูแลบำรุงผิวหน้า (skincare) และต่อมาเมื่อปี 2012 
    บริษัทได้จดทะเบียนในตลาดหลักทรัพย์ Nasdaq (LFVN) เพื่อการขยายตลาดไปทั่วโลกและสร้างความเชื่อมั่นให้กับนักธุรกิจอิสระ และผู้บริโภค</p>
    <hr />
    <center>
      <StaticImage
        src="../images/lifevantagetimeline.png"
        loading="eager"
        width={850}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    </center>
    
    
    <Row>
      <Col md={{ span: 8, offset: 2}}>
      <hr />
      <h1 className={styles.textCenter} style={{fontSize: "100px", color: "blue", filter: "drop-shadow(2px 2px #333)"}}><b>ข่าวไลฟ์เวนเทจ</b></h1>
      <hr />
      <StaticImage
          src="../images/mlmnews01.png"
          loading="eager"
          width={1000}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />

        <p>ไลฟ์เวนเทจ ยักษ์ใหญ่ธุรกิจขายตรงสัญชาติอเมริกา ที่จดทะเบียนและจำหน่ายผลิตภัณฑ์เสริมอาหาร 
        เริ่มต้นตั้งแต่ปี 2003 ที่มลรัฐยูท่าห์ ประเทศสหรัฐอเมริกา ด้วยเทคโนโลยี Nrf2 ที่อยู่ในผลิตภัณฑ์เสริมอาหาร 
        และผลิตภัณฑ์ชุดดูแลบำรุงผิวหน้า (skincare) และต่อมาเมื่อปี 2012 บริษัทได้จดทะเบียนในตลาดหลักทรัพย์ Nasdaq (LFVN) 
        เพื่อการขยายตลาดไปทั่วโลกและสร้างความเชื่อมั่นให้กับนักธุรกิจอิสระ และผู้บริโภค</p>

        <p>วิภารัตน์ สอนบุญมา กรรมการผู้จัดการ  บริษัท ไลฟ์เวนเทจ (ประเทศไทย) จำกัด 
        กล่าวกับ MLMNEWS ONLINE หลังจากเปิดตัวอย่างเป็นทางการเมื่อ 24 มิถุนายน 2560 หลังจากทำพรีล้อนซ์มาก่อนหน้า 2 ปี
        เพื่อทดลองระบบและเตรียวความพร้อม ปัจจุบันไลฟ์เวนเทจในประเทศไทย ก็เปิดมาแล้ว 5 ปี 
        ตลอดเวลาก็เดินหน้ารุกตลาดอย่างต่อเนื่องโดยการใช้เครื่องมือดิจิตอลมาร์เก็ตติ้ง สื่อโซเซียทุกช่องทาง 
        เพื่อให้ผู้บริโภคและผู้สนใจในธุรกิจได้รู้จักธุรกิจไลฟ์เวนเทจ โดยเฉพาะช่วงโควิค-19 ที่ระบาดหนักไทย ไลฟ์เวนเทจกับเติบโตสวนกระแส 
        เพราะเราได้ทำตลาดทางโซเซียลอย่างมากไม่ว่าการประชุมกับผู้นำทั่วประเทศด้วยโปรแกรมซูม การอบรมสัมมนาต่างก็ผ่านโปรแกรมซูม 
        แม้ว่าสำนักงานใหญ่กรุงเทพฯจะได้รับผลทบบางในเรื่องการลดเวลาทำงานของเจ้าหน้าที่พนักงาน 
        แต่ไม่ส่งผลกับยอดขายที่กับเติบโตสวนกระแสขึ้นทุกเดือน คาดว่าปลายปี 63 นี้จะสามารถปิดยอดได้มากกว่า 500 ล้านบาท 
        เพราะเราได้จัดกิจกรรมกระตุ้นปลายปีไม่ว่า การจ่ายโบนัสเงินสดให้ผู้นำที่สามารถขึ้นตำแหน่งตามที่บริษัทกำหนด 
        รวมถึงจัดโปรโมชั่นทริปท่องเที่ยว เราได้จัดโปรให้ตอบสนองนโยบายภาครัฐต้องการให้ไทยเที่ยวไทย</p>

        <p>วิภารัตน์ กล่าวเสริมว่า ไลฟ์เวนเทจ ยังคงมุ่งเน้นจุดแข็งทั้ง 3 ด้านที่ไม่เหมือนคู่แข่งรายอื่น ประกอบด้วย <br /></p>
        1. ผลิตภัณฑ์มีความโดดเด่นโปรแทนดิม เอ็นอาร์เอฟทู เป็นสินค้านวัตกรรมที่มีผลวิจัยทางวิทยาศาสตร์รองรับ <br />
        2. บริษัทแม่พร้อมให้การสนับสนุนด้านการเงินให้กับธุรกิจที่บริษัทเข้าไปขยายตลาด รวมถึงสนับสนุนในด้านเทคโนโลยีต่างๆ <br />
        3. แผนการจ่ายผลตอบแทนให้กับสมาชิกสูงสุดเมื่อเทียบกับคู่แข่งทั่วโลก ซึ่งการจ่ายผลตอบแทนเฉลี่ยของบริษัททั่วไปที่ให้กับสมาชิกนั้นปกติจะเฉลี่ยอยู่ที่ 33-34% 
        ขณะที่บริษัทจ่ายผลตอบแทนสูงสุดถึง 48% <br />
        <p>และนอกเหนือจากจุดแข็ง 3 ด้านแล้ว บริษัทยังเน้นการตอบแทนคืนสังคมด้วยการช่วยเหลือคนจนในประเทศ รวมถึงผู้ประสบภัยต่างๆ ตามนโยบายบริษัทฯ ที่กำหนดไว้</p>
        <hr />
      </Col>
    </Row>
    
    
    <h4 className={styles.textCenter} style={{color: "red"}}>“ไลฟ์เวนเทจ” ได้ฤกษ์เปิดตัวรุกตลาดอย่างเป็นทางการเดือนมิ.ย.</h4>
    <Row>
      <Col md={{ span: 8, offset: 2}}>
        <StaticImage
          src="../images/lfvnnews.jpg"
          loading="eager"
          width={1000}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <br /><br />
        <h6 style={{color: "blue"}}>หลังซุ่มเข้ามาทำตลาดในไทยเมื่อ 2ปีเพื่อเตรียมความพร้อม-ระบบ
        ดันไทยขึ้นเกตเวย์ เปิดประตูเข้าบุกตลาดในเอเชียตะวันออกเฉียงใต้</h6>
        
        <p><h5 style={{display: "inline-block"}}>รร.มิราเคิล แกรนด์ หลักสี่</h5> / “ไลฟ์เวนเทจ” บริษัทขายตรงที่ได้จดทะเบียนในตลาดหลักทรัพย์ Nasdaq (LFVN) 
        เตรียมเปิดตัวรุกอย่างเป็นทางการ ในวันที่ 24 มิถุนายน หลังจากทำพรีล้อนซ์มาก่อนหน้า 2 ปีเพื่อทดลองระบบและเตรียมความพร้อม 
        เผยดันไทยเป็นเกตเวย์ขยายตลาดเอเชียตะวันออกเฉียงใต้ พร้อมเล็งเปิดตลาดใหม่ที่สิงค์โปร์ มาเลเซีย อินโดนีเซียและอินเดีย ระบุตลาดไทยมีศักยภาพสูงและมีโอกาสที่เติบโตอีกมาก 
        จากปัจจัยหลักคนไทยอยู่ในธุรกิจเครือข่ายกว่า 1 ล้านคนและมีความรู้ในตลาดขายตรงเป็นอย่างดี วาดเป้าอนาคตขึ้นแท่นผู้นำบริษัทขายตรง</p>

        <p>มร.ดาร์เร็น เจนเซ่น ประธานและประธานเจ้าหน้าที่บริหาร บริษัท ไลฟ์เวนเทจ คอร์ปอร์เรชั่น เปิดเผยว่า หลังจากที่บริษัทได้เข้ามาเปิดตลาดในประเทศไทยมาเป็นระยะเวลา 2 ปี 
        นโยบายหลักนอกเหนือจากการสร้างการเติบโตให้กับธุรกิจในประเทศไทยแล้ว บริษัทยังมีแผนการใช้ประเทศไทยเป็นประตูหรือเกตเวย์ในการขยายตลาดไปยังประเทศอื่นๆ 
        ในอาเซียน และภูมิภาคเอเชียตะวันออกเฉียงใต้ โดยประเทศที่ให้ความสนใจนั้นประกอบด้วยสิงคโปร์ มาเลเซีย อินโดนีเซียและอินเดีย</p>

        <p>ทั้งนี้การที่เลือกประเทศไทยเป็นเกตเวย์นั้น เนื่องจากเห็นความพร้อมและศักยภาพของประเทศไทย เพราะปัจจุบันมีคนไทยกว่า 1 ล้านคนที่อยู่ในธุรกิจเครือข่าย 
        หรือคิดเป็น 16% ของจำนวนประชากรทั้งหมด อีกทั้งคนไทยมีความรู้ทางด้านธุรกิจขายตรงและพร้อมที่จะเป็นเจ้าของธุรกิจ ซึ่งทำให้เห็นโอกาสในการเติบโตของธุรกิจขายตรงได้อีกมาก
        สำหรับบริษัทไลฟ์เวนเทจนั้น ได้เริ่มรุกเข้าธุรกิจเครือข่ายในช่วง 7 ปีทีผ่านมา โดยปัจจุบัน <b>(มีนาคม 2560)</b> ได้เข้าทำตลาดใน 9 ประเทศ 
        ประกอบด้วย สหรัฐอเมริกา ออสเตรเลีย แคนาดา ฮ่องกง ญี่ปุ่น แม็กซิโก ประเทศไทย สหราชอาณาจักร และเนเธอร์แลนด์โดยมีผลประกอบการรวมอยู่ที่ 207 ล้านเหรียญดอลลาร์สหรัฐ 
        มีจำนวนนักธุรกิจประมาณ 63,000 คน และมีฐานสมาชิกผู้บริโภค 110,000 คน โดยเป้าหมายสูงสุดของบริษัทนั้น ต้องการเป็นบริษัทผู้นำธุรกิจขายตรงทั่วโลก</p>

        <p>ทั้งนี้การที่บริษัทมีความมั่นใจว่าจะสามารถขึ้นเป็นบริษัทผู้นำธุรกิจขายตรงทั่วโลกในอนาคตนั้น เนื่องจากบริษัทมีจุดแข็งใน 3 ด้านที่ไม่เหมือนคู่แข่งรายอื่น ประกอบด้วย<br /></p>
        1. ผลิตภัณฑ์มีความโดดเด่น เป็นสินค้านวัตกรรมที่มีผลวิจัยทางวิทยาศาสตร์รองรับ<br />
        2. บริษัทแม่พร้อมให้การสนับสนุนด้านการเงินให้กับธุรกิจที่บริษัทเข้าไปขยายตลาด รวมถึงสนับสนุนในด้านเทคโนโลยีต่างๆ<br/>
        3. แผนการจ่ายผลตอบแทนให้กับสมาชิกสูงสุดเมื่อเทียบกับคู่แข่งทั่วโลก<br />
        ซึ่งการจ่ายผลตอบแทนเฉลี่ยของบริษัททั่วไปที่ให้กับสมาชิกนั้นปกติจะเฉลี่ยอยู่ที่ 33-34% ขณะที่บริษัทจ่ายผลตอบแทนสูงสุดถึง 48% และนอกเหนือจากจุดแข็ง 3 ด้านแล้ว 
        บริษัทยังเน้นการตอบแทนสังคมด้วยการช่วยเหลือคนจนในประเทศต่างๆ รวมถึงผู้ประสบภัยด้วย

        <p>ด้านมร. คอร์ทแลนด์ เพียร์สัน รองประธานอาวุโส ระหว่างประเทศ บริษัท ไลฟ์เวนเทจ คอร์ปอร์เรชั่น กล่าวว่า บริษัทได้ทำการพรีลอนซ์ไลฟ์เวนเทจ ในประเทศไทยเมื่อวันที่ 26 มีนาคม 2560 
        และจะเปิดตัวอย่างเป็นทางการในเดือนมิถุนายน 2560 รวมถึงจะเริ่มรุกตลาดอย่างจริงจัง หลังจากในช่วง 2 ปีที่ผ่านมาได้มีการเตรียมความพร้อมในด้านระบบต่างๆ 
        รวมถึงจะมีการเปิดตัวสินค้าที่เป็นหัวหอกหลักในการทำตลาดในกลุ่มผลิตภัณฑ์เสริมอาหาร โปรแทนดิม เอ็นอาร์เอฟทู ที่ได้เริ่มจำหน่ายในเดือน มีนาคม 2560 เป็นต้นไป
        นอกจากนี้ บริษัทฯยังมีโปรโมชั่นเพิ่ม โบนัสค่าแนะนำอีก 15% ให้แก่ผู้นำชุดธุรกิจแพลทตินั่ม และ บริษัทฯมีคุณสมบัติ นักธุรกิจระดับ Founder 
        เพื่อมอบสิทธิพิเศษให้กับนักธุรกิจอิสระประเทศไทยที่ได้ร่วมสร้างธุรกิจร่วมกับ LifeVantage ประเทศไทย ที่จะเริ่มตั้งแต่เดือนมีนาคม 2560 โดยมีคุณสมบัติ Premier Pro5 ขึ้นไป
        และจะเชิดชูกียรติในเดือน มิถุนายน 2560 และคุณสมบัตินี้ จะสิ้นสุดในเดือนธันวาคม 2560 โดยนักธุรกิจอิสระที่มีคุณสมบัติ Founderจะมีสิทธิ์ได้รับโบนัสมากขึ้น 
        และยังมีสิทธิ์ที่จะมีคุณบัติ เป็น Elite founder Bonus ที่จะได้รับรางวัล MyLifeVenture โดยมีคุณสมบัติ เป็น Elite Pro 7 และรักษาคุณสมบัติ เพื่อรับโบนัส จำนวน 875,000 บาท 
        และพิศษสุด สำหรับนักธุรกิจอิสระในประเทศไทย ที่ได้รับโบนัสนี้ คนแรกของประเทศไทย จะได้รับเงินโบนัสสูงถึง 1,000,000 บาท</p>

        <p>ด้านนางวิภารัตน์ สอนบุญมา กรรมการผู้จัดการ บริษัท ไลฟ์เวนเทจ (ประเทศไทย) จำกัด กล่าวว่า เพื่อเป็นการสร้างแบรนด์ไลฟ์เวนเทจให้เป็นที่รู้จักในวงกว้าง 
        บริษัทมีแผนการโฆษณาประชาสัมพันธ์และการใช้ดิจิตอลมาร์เก็ตติ้งเข้ามารุกตลาดมากขึ้น โดยคาดว่าหลังจากการเปิดตัวผลิตภัณฑ์หลัก
        อย่างโปรแทนดิม เอ็นอาร์เอฟทูคาดว่าจะสร้างสีสันให้กับตลาดและสมาชิก รวมถึงบริษัทได้มีการจัดโปรโมชั่นเพื่อกระตุ้นสมาชิกอย่างต่อเนื่อง 
        โดยที่ผ่านมาบริษัทได้จัดงานประชุมพิเศษเพื่อเปิดตัวผลิตภัณฑ์ในวันที่ 26 มีนาคม 2560 ณ โรงแรมมิราเคิล แกรนด์ คอนเวนชั่น หลักสี่ กรุงเทพ 
        ในงานประชุมพิเศษจะมีกิจกรรมพิเศษ และ ทริปท่องเที่ยว และจะมีงานเปิดตัวอย่างเป็นทางการ ในวันที่ 24 มิถุนายน 2560 ในงานเปิดตัวนั้น 
        จะมีพิธีมอบเข็มประกาศเกียรติคุณและมอบรางวัลต่างๆให้แก่นักธุรกิจอิสระ และผู้พิชิตคุณสมบัติเพื่อเข้าร่วมการสัมมนา Elite Academy 
        เมืองโอซาก้า ประเทศญี่ปุ่น ในเดือนกันยายน 2560</p>

        <hr />
        <center>
          <StaticImage
            src="../images/lifevantageworldwide.jpg"
            width={800}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </center>
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
      </Col>
    </Row>

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
}

export default Lifevantage;
