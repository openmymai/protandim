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
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/dkQ0LmlaIUs?autoplay=1"
          title="Embed vdo"
          allow="autoplay"
          allowFullScreen
        />
      </div>
    <hr />
    <h3>อย่ารอจนสายเกินไป</h3>
    <p>ในอดีตนับร้อยๆปี มีความเชื่อกันว่าที่คนเราป่วยและตายนั้น มีสาเหตุมาจากเชื้อโรค แต่จากผลงานวิจัยตั้งแต่ปี พ.ศ. 2503 
    ได้โต้แย้งความเชื่อเก่าๆที่ว่าคนเราป่วยและตายเพราะเชื้อโรค <b>มาเป็นว่าเพราะ<u>ความเสื่อม</u>ในระดับเซลล์ของมนุษย์เอง</b> 
    เมื่อนักวิทยาศาสตร์ค้นพบสาเหตุที่แท้จริงนี้แล้ว ก็ทำการค้นคว้าวิจัยต่อถึงวิธีการหยุดภาวะความเสื่อมของเซลล์ 
    ไม่ให้เพิ่มมากขึ้นจนเป็นสาเหตุทำให้เกิดโรค</p>

    <p>ทั้งหมดที่กล่าวมานี้ มีผลงานวิจัยรองรับมากมาย และผ่านการตรวจสอบจากรัฐบาลอเมริกัน (มีสิทธิบัตรคุ้มครอง) 
      และการที่ได้เข้าตลาดหลักทรัพย์ Nasdaq นั้น ถือว่าเป็นการรับรอง (การันตี) ทั้งตัวสินค้าและการดำเนินงานของบริษัทฯเป็นอย่างดี</p>

    <p>จากการทดลองหาค่า P-value ของ โปรแทนดิม Nrf2 ผลที่ได้เท่ากับ 0.0001 ซึ่งหมายถึง ในจำนวนผู้ใช้โปรแทนดิม (Nrf2) 10,000 คน
    สามารถลดระดับภาวะความเสื่อมของเซลล์ (oxidative strees) ได้เฉลี่ย 40% ในเวลา 30 วัน ถึง 9,999 คน (ไม่ได้ผลเพียงหนึ่งคน) 
    ข้อมูลทั้งหมดนี้เป็นข้อเท็จจริงที่มีหลักฐานยืนยันได้</p>

    <h3>นวัตกรรมย้อนวัยไบโอแฮคกิ้ง (Biohacking)</h3>
    <p>จะดีกว่าไหมถ้าเราสามารถดูแลสุขภาพได้ถึงระดับยีนส์ในเซลล์ <b>มีงานวิจัยรองรับทางการแพทย์และทางวิทยาศาสตร์รองรับ</b>
    จากการค้นคว้ากว่า 40 ปี โปรแทนดิมถูกคิดค้นและพัฒนาโดย ดร. โจ แมคคอร์ด นักวิทยาศาสตร์ผู้ค้นพบซุปเปอร์ออกไซด์ดิสมิวเทส (SOD)  
    ซึ่งเป็นเอ็นไซม์ที่คัดแยกอนุมูลอิสระออกจากร่างกายมนุษย์ ท่านเป็นผู้ได้รับรางวัลเหรียญทอง Elliott Cresson Medal 
    ซึ่งมอบให้ผู้ที่คิดค้นนวัตกรรมทางวิทยาศาสตร์และการค้นพบใหม่ๆ</p>

    <h3>โปรแทนดิมคืออะไร?</h3>
    <p>Protandim เกิดขึ้น จากคำถาม ว่า ” สุขภาพที่แย่ลง ในปัจจุบันของเรา เป็นสิ่งที่เราต้องยอมรับว่าเกิดจากความเสื่อมของร่างกาย ตาม กาลเวลา ใช่หรือไม่ ?”
    <br /><br />
    นักวิจัย ก็เลยค้นพบว่า จริงๆ แล้ว ไม่ได้เกิดจากความชรา <b>แต่เกิดจาก<u>ความเสื่อม</u>ที่มี อนุมูลอิสระเข้ามาทำร้ายเซลล์ โดยมาจากการหายใจ จำนวน 3 แสน ล้าน ล้าน ล้าน โมเลกุลต่อวัน </b>
    และยังมาจาก การกินอาหาร ดื่มน้ำ และอารมณ์ รวมถึงมลภาวะต่างๆ ซึ่งมีจำนวนมากจนร่างกายไม่สามารถรับไหว เรียกว่า ความเสื่อม (Oxidative Stress) เหมือน เหล็กที่มีสนิมเกาะ นานๆไป
    ก็ผุพัง เราจึงเกิดความแก่ เกิดความเสื่อม และก่อให้เกิดโรคต่าง ๆ เพราะเกราะป้องกันของเรา ไม่ทำงาน จนคนทั่วไปคิดว่ามาจากความชรา</p>
    
    <h4>เราจะจัดการกับความเสื่อม (Oxidative Stress) ให้ลดลงได้อย่างไร</h4>

    <p>นักวิจัยได้ค้นพบว่า เกิดจากการบกพร่องของ ยีน ซึ่ง ยีนกลุ่มนึง ในร่างกายของเรา สามารถปกป้องร่างกายจากการทำลายของอนุมูลอิสระได้ 1:1,000,000 หน่วยต่อวินาที
    <b>อนุมูลอิสระ 3 แสนล้านล้านล้านโมเลกุลต่อวัน</b> ซึ่งไม่สามารถ ขจัด ของเสียเหล่านี้ ออกได้ทัน ยีนกลุ่มนี้ ทำงานน้อยลง หรือบางคนไม่ทำงานเลย ตั้งแต่เราอายุได้ 20 ปี 
    บางคนแก่ก่อนวัย บางคนป่วยเป็นโรคเสื่อมต่างๆ</p>

    <h4>จะดีไหมถ้าเราสามารถกระตุ้น ให้ยีนกลุ่มนี้กลับมาทำงานอีกครั้ง เหมือนตอนที่เราเป็นเด็ก</h4>
    
    <p>นักวิทยาศาสตร์ ค้นพบว่า สามารถกระตุ้นให้ยีนกลุ่มนี้ กลับมาทำงานอีกครั้ง เหมือนแค่กดเปิดสวิตซ์ 
     <b>โปรแทนดิม เอ็นอาร์เอฟทู</b> จึงเป็นตัวกระตุ้นให้ยีนกลุ่มนี้กลับมาทำงานอีกครั้ง เหมือนตอนที่เราเป็นเด็ก เราไม่สบายเราก็หายเองได้ เราหกล้มเป็นแผล ไม่กี่วันแผลก็หายสนิท</p>

    <p>ส่วนอีกตัว จะเป็น โปรแทนดิม เอ็นอาร์เอฟวัน ตัวนี้จะเป็นการวิจัยต่อยอดจาก เอ็นอาร์เอฟทู เป็นตัวกระตุ้นไปที่ ไมโทรคอนเดรีย ซึ่งเปรียบเสมือนโรงงานผลิตพลังงานให้กับร่างกายของเรา 
    ไมโทคอนเดรีย คือแบคทีเรียชนิดนึงที่อาศัยอยู่ร่วมกับเซลล์ กินอาหารพร้อมเซลล์ แต่เนื่องจาก อนุมูลอิสระมีมากจน ไม่สามารถต้านทานได้ ไมโทคอนเดรีย จึงมีจำนวนน้อยลงเรื่อยๆ 
    ส่งผลให้เรี่ยวแรงหายไปเมื่ออายุมากขึ้นเรื่อยๆ และยังส่งผลให้เกอดโรคเสื่อมบางชนิดด้วยเช่น พาร์กินสันส์ 
    สามารถกินคู่กับ เอ็นอาร์เอฟทู ได้ ยังเพิ่มประสิทธิภาพในการ ฟื้นฟูเซลล์ของให้ กลับมาใช้งานได้อย่างรวดเร็ว</p>
    

    <h4>โปรแทนดิม Nrf1 และ Nrf2 คือนวัตกรรมย้อนวัยระดับโลก ช่วยลดความเสื่อมในระดับเซลล์เฉลี่ยถึง 40% ใน 30 วัน!</h4>
    <hr />
    <Row xs={1} md={2}>
      <Col>
        <StaticImage
          src="../images/protandimnrf1detail.jpg"
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
      </Col>
      <Col>
        
        <h5>อายุมากแล้ว แต่ก็ยังต้องการความแข็งแรง</h5>
        <h6>✅ ไมโทคอนเดรียเปรียบเสมือนแบตเตอรี่ของเซลล์ มีหน้าที่เปลี่ยนสารอาหารให้เป็นพลังงานที่ร่างกายสามารถนำไปใช้</h6>
        <h6>✅ กระบวนการเผาผลาญอาหารของไมโทคอนเดรียโดยการใช้ออกซิเจนมีผลข้างเคียงคือการสร้างอนุมูลอิสระมากถึง 300,000 ล้านล้านล้านโมเลกุลต่อวัน</h6>
        <h6>✅ หากอนุมูลอิสระไม่ถูกจัดการให้อยู่ในสภาวะสมดุลจะเกิดสภาวะความเครียดออกซิเดชั่นซึ่งมีผลต่อความเสียหายของเซลล์และไมโทคอนเดรีย</h6>
        <h6>✅ สุขภาพของไมโทคอนเดรียและการลดความเครียดออกซิเดชันจึงมีผลต่อการมีสุขภาพที่ดี</h6>
        <h6>✅ ไมโทคอนเดรียผลิตพลังงานให้เซลล์ เมื่อเรามีอายุมากขึ้นมันจะทำงานน้อยลง</h6>
        <h6>✅ การกระตุ้น NRF1 จะเพิ่มความแข็งแกร่งและเพิ่มจำนวนของไมโทคอนเดรียซึ่งหมายถึงการเพิ่มพลังงาน</h6>
        <h6>✅ ประโยชน์ของการกระตุ้น Nrf1:</h6>
        <h6>👉 Energy - พลังงานของร่างกายที่เพิ่มขึ้น</h6>
        <h6>👉 Health – สุขภาพของเซลล์ที่ดีขึ้น</h6>
        <h6>👉 Cellular - พลังงานของเซลล์ที่เพิ่มขึ้น</h6>
        <h6>👉 Quality - คุณภาพการนอนหลับที่ดีขึ้น</h6>
        <h6>👉 Repair – เซลล์ได้รับการซ่อมและฟื้นฟู</h6>
        <h6>.... และนี่เป็นเพียงจุดเริ่มต้นเท่านั้น</h6>
        <h6>❤️ การใช้ NRF1 ร่วมกับ Nrf2 เป็นกุญแจสำคัญในการย้อนวัยเซลล์ที่เป็นไปได้จริงๆ</h6>
      </Col>
    </Row>
    <Row xs={1} md={2}>
      <Col>
        <StaticImage
          src="../images/protandimnrf2detail.jpg"
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
      </Col>  
      <Col>
        <p><b>ดร. โจ แมคคอร์ด</b> นักวิทยาศาสตร์ผู้อยู่เบื้องหลัง Protandim Nrf2 เขาได้ทุ่มเทเวลาทั้งชีวิตของเขาให้กับการศึกษาวิจัยเกี่ยวกับ อนุมูลอิสระ 
        และความเสื่อมวัย หนึ่งในการค้นพบอันยิ่งใหญ่ของเขาคือ ซุปเปอร์ออกไซด์ดิสมิวเทส (SOD) ซึ่งเป็นที่ได้รับการอ้างถึงในอีกกว่า 50,000 งานวิจัยตามมา
        จากนักวิทยาศาสตร์คนอื่นๆ และจากการค้นพบในครั้งนี้เองเป็นสิ่งที่ทำให้เขาได้รับรางวัล เหรียญทอง อีเลียท เครสสัน จากสถาบัน เฟรคคลิน 
        ซึ่งจะมอบรางวัลนี้ให้แก่นักวิทยาศาสตร์และนักประดิษฐ์ที่มีผลงานโดดเด่นและเป็นที่ยอมรับในระดับโลก
        ส่งผลให้ ดร. โจ แมคคอร์ด นั้นขึ้นเป็นบุคคลสำคัญในระดับเดียวกับ ปิแอร์ และ แมรี่ คูรี่, อเล็กซานเดอร์ เกรแฮมเบล, สองพี่น้องตระกูล ไรท์
        และ เฮนรี่ฟอร์ด</p>
        <h6>ซุปเปอร์ออกไซด์ดิสมิวเทส (SOD) นั้นมีความสำคัญต่อคุณอย่างไร? </h6>
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
        ​มาดูแลสุขภาพตั้งแต่ตอนนี้ก่อนจะสายกันนะครับ
        ทำงานหนักแล้วก็ต้องดูแลตัวเองด้วย #Protandim #Nrf2 นะครับ
      </Col>    
    </Row>
    <br />
    <hr />
    <Row xs={1} md={2}>
      <Col>
        <StaticImage
          src="../images/protandimnrf1ingredient.jpg"
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <br />
        <hr />
        <StaticImage
          src="../images/protandimnrf2ingredient.jpg"
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
      </Col>
      <Col>
        <h4>👉 “ถ้าทานสมุนไพรที่เป็นส่วนผสมใน<b>โปรแทนดิม</b>อยู่แล้วจำเป็นต้องทาน<b>โปรแทนดิมหรือไม่?”</b></h4>
        <h4>👉 “ถ้าทานอาหารเสริมต้านอนุมูลอิสระอยู่แล้วจำเป็นต้องทานโปรแทนดิมหรือไม่?”</h4>
        <h2>❤️ คำตอบคือ...</h2>
        <h4>✅ คุณจะยังไม่ได้รับประโยชน์มากเทียบเท่ากับการใช้โปรแทนดิม Nrf2</h4>
        <h4>✅ โปรแทนดิมไม่ใช่สารต้านอนุมูลอิสระ</h4>
        <h4>✅ โปรแทนดิมไม่ใช่อาหารเสริม!</h4>
        <h5>👉 โปรแทนดิมเป็นการกระตุ้น Nrf2 ซึ่งเกิดจากการเสริมกำลังกันของส่วนผสมทางพฤกษเคมี 4 ชนิดที่ใช้มานานนับพันปีและเป็นตัวกระตุ้น Nrf2 ที่สามารถใช้ในการรักษาได้ดีที่สุดในท้องตลาด</h5>
        <h5>👉 บริษัทยารายใหญ่ ๆ ได้พยายามผลิตรูปแบบของตัวเองที่เป็นสารเคมีสังเคราะห์และได้ถูกนำมาทดลองเพื่อเปรียบเทียบกับโปรแทนดิม  Nrf2 ปรากฏว่าโปรแทนดิมให้ผลลัพธ์ที่ชนะแบบขาดลอย</h5>
        <h5>👉 เส้นทางของ Nrf2 ถูกเรียกว่าเป็นผู้พิทักษ์อายุขัยของเราอย่างมีเหตุมีผล</h5>
        <h5>👉 มันทำหน้าที่เหมือนสวิตช์หรี่ไฟสำหรับร่างกาย – เพิ่มระดับเอ็นไซม์ที่ดีและลดระดับเอ็นไซม์ที่ไม่ดี ไม่มีอะไรที่จะเหมือน Nrf2 ได้เลย</h5>
        <h5>👉 งานวิจัย 28 งานผ่านการตรวจสอบโดยผู้เชี่ยวชาญจากสถาบันขนาดใหญ่หลาย ๆ แห่ง ยืนยันว่าสามารถลดความเครียดออกซิเดชั่นได้ถึง 40% ใน 30 วันและเป็นอาหารเสริมตัวเดียวที่พิสูจน์ว่าช่วยเพิ่มอายุขัยของมนุษย์ได้</h5>
        <h5>👉 คุณสามารถเข้าไปค้นงานวิจัยได้ที่ PubMed – ด้วยคำค้นหา “Protandim” “oxidative stress” “glutathione” “superoxide dismutase” “catalase” ยิ่งคุณค้นงานวิจัยมากแค่ไหนคุณจะยิ่งเห็นว่ามันทำให้คุณทึ่งมากขึ้นเท่านั้น</h5>
        <h5>👉 นี่คือเหตุผลที่สถาบันขนาดใหญ่ เช่น มหาวิทยาลัยวอชิงตันสเตท มหาวิทยาลัยลุยเซียน่าสเตท มหาวิทยาลัยโคโรลาโด มหาวิทยาลัยเวอร์จิเนียคอมมอนเวลธ์ สถาบันสุขภาพแห่งชาติ สถาบันชราศาสตร์แห่งชาติ สมาคมโรคหัวใจแห่งอเมริกา เมโยคลีนิค และอื่น ๆ อีกมากมายได้สนับสนุนทุนการวิจัยของตัวเองเพื่อศึกษาเรื่องนี้</h5>
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
    <br />
    <hr />
    <Row xs={1} md={1}>
      <Col>
        <StaticImage
          src="../images/meatlfvnth.jpg"
          formats={["auto", "webp", "avif"]}
          alt=""
          layout="fullWidth"
          style={{ marginBottom: `var(--space-3)` }}
        />
        <br />
        <hr />
        <h3>✅ สินค้าดีตอบโจทย์ ดีใจที่เห็นทุกท่านสุขภาพดีครับ</h3>
        <h3>✅ ผมทานเองและให้ครอบครัวคนที่เรารักได้ทานด้วย</h3>
        <h3>✅ ทานแล้วเห็นผลชัดเจน</h3>
        <h3>✅ ส่งทั่วประเทศนะครับ</h3>
        <h3>✅ สนใจปรึกษาสอบถามได้นะครับ</h3>
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
)

export default IndexPage
