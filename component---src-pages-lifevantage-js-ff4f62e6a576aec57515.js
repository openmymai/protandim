"use strict";(self.webpackChunkprotandim=self.webpackChunkprotandim||[]).push([[27],{5188:function(e,t,a){a.d(t,{Z:function(){return g}});var c=a(181);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var c,n,r=[],i=!0,l=!1;try{for(a=a.call(e);!(i=(c=a.next()).done)&&(r.push(c.value),!t||r.length!==t);i=!0);}catch(s){l=!0,n=s}finally{try{i||null==a.return||a.return()}finally{if(l)throw n}}return r}}(e,t)||(0,c.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r=a(4942),i=a(4925),l=a(5900),s=a.n(l),f=a(7294),o=a(9541),b=a(5893),d=["as","bsPrefix","className"],p=["className"];function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u=f.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,c=e.className,n=(0,i.Z)(e,d);a=(0,o.vE)(a,"col");var r=(0,o.pi)(),l=[],f=[];return r.forEach((function(e){var t,c,r,i=n[e];delete n[e],"object"==typeof i&&null!=i?(t=i.span,c=i.offset,r=i.order):t=i;var s="xs"!==e?"-".concat(e):"";t&&l.push(!0===t?"".concat(a).concat(s):"".concat(a).concat(s,"-").concat(t)),null!=r&&f.push("order".concat(s,"-").concat(r)),null!=c&&f.push("offset".concat(s,"-").concat(c))})),[w(w({},n),{},{className:s().apply(void 0,[c].concat(l,f))}),{as:t,bsPrefix:a,spans:l}]}(e),c=n(a,2),r=c[0],l=r.className,f=(0,i.Z)(r,p),m=c[1],u=m.as,g=void 0===u?"div":u,v=m.bsPrefix,h=m.spans;return(0,b.jsx)(g,w(w({},f),{},{ref:t,className:s()(l,!h.length&&v)}))}));u.displayName="Col";var g=u},9643:function(e,t,a){var c=a(4942),n=a(4925),r=a(5900),i=a.n(r),l=a(7294),s=a(5697),f=a.n(s),o=a(9541),b=a(5893),d=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"];function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){(0,c.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}f().string,f().bool,f().bool,f().bool,f().bool;var w=l.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,r=e.fluid,l=e.rounded,s=e.roundedCircle,f=e.thumbnail,p=(0,n.Z)(e,d);return a=(0,o.vE)(a,"img"),(0,b.jsx)("img",m(m({ref:t},p),{},{className:i()(c,r&&"".concat(a,"-fluid"),l&&"rounded",s&&"rounded-circle",f&&"".concat(a,"-thumbnail"))}))}));w.displayName="Image",w.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.Z=w},994:function(e,t,a){var c=a(4942),n=a(4925),r=a(5900),i=a.n(r),l=a(7294),s=a(9541),f=a(5893),o=["bsPrefix","className","as"];function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){(0,c.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p=l.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,r=e.as,l=void 0===r?"div":r,b=(0,n.Z)(e,o),p=(0,s.vE)(a,"row"),m=(0,s.pi)(),w="".concat(p,"-cols"),u=[];return m.forEach((function(e){var t,a=b[e];delete b[e],t=null!=a&&"object"==typeof a?a.cols:a;var c="xs"!==e?"-".concat(e):"";null!=t&&u.push("".concat(w).concat(c,"-").concat(t))})),(0,f.jsx)(l,d(d({ref:t},b),{},{className:i().apply(void 0,[c,p].concat(u))}))}));p.displayName="Row",t.Z=p},1522:function(e,t,a){a.r(t);var c=a(7294),n=a(7059),r=a(994),i=a(5188),l=a(9643),s=a(2888),f=a(262),o=a(848),b=a(9870);t.default=function(){return c.createElement(s.Z,null,c.createElement(f.Z,{title:"LifeVantage"}),c.createElement("p",null,c.createElement("h4",{style:{display:"inline-block"}},"ไลฟ์เวนเทจ")," เป็นบริษัทฯ ที่จดทะเบียนและจำหน่ายผลิตภัณฑ์เสริมอาหาร เริ่มต้นตั้งแต่ปี 2003 ที่มลรัฐยูท่าห์ ประเทศสหรัฐอเมริกา ต่อมาได้เปลี่ยนรูปแบบการดำเนินธุรกิจจากการค้าปลีกมาสู่การตลาดเครือข่าย ในปี 2009 ซึ่งเป็นวิธีที่เหมาะสำหรับการจัดจำหน่าย และแบ่งปันเรื่องราวของดีๆของบริษัทสู่ผู้คนได้ทั่วโลกและขยายการตลาดได้อย่างรวดเร็ว ด้วยเทคโนโลยี Nrf2 ที่อยู่ในผลิตภัณฑ์เสริมอาหาร และผลิตภัณฑ์ชุดดูแลบำรุงผิวหน้า (skincare) และต่อมาเมื่อปี 2012 บริษัทได้จดทะเบียนในตลาดหลักทรัพย์ Nasdaq (LFVN) เพื่อการขยายตลาดไปทั่วโลกและสร้างความเชื่อมั่นให้กับนักธุรกิจอิสระ และผู้บริโภค"),c.createElement("hr",null),c.createElement("center",null,c.createElement(n.S,{src:"../images/lifevantagetimeline.png",loading:"eager",width:850,formats:["auto","webp","avif"],alt:"",style:{marginBottom:"var(--space-3)"},__imageData:a(3444)})),c.createElement(r.Z,null,c.createElement(i.Z,{md:{span:8,offset:2}},c.createElement("hr",null),c.createElement("h1",{className:o.xf,style:{fontSize:"100px",color:"blue",filter:"drop-shadow(2px 2px #333)"}},c.createElement("b",null,"ข่าวไลฟ์เวนเทจ")),c.createElement("hr",null),c.createElement(n.S,{src:"../images/mlmnews01.png",loading:"eager",width:1e3,formats:["auto","webp","avif"],alt:"",style:{marginBottom:"var(--space-3)"},__imageData:a(7801)}),c.createElement("p",null,"ไลฟ์เวนเทจ ยักษ์ใหญ่ธุรกิจขายตรงสัญชาติอเมริกา ที่จดทะเบียนและจำหน่ายผลิตภัณฑ์เสริมอาหาร เริ่มต้นตั้งแต่ปี 2003 ที่มลรัฐยูท่าห์ ประเทศสหรัฐอเมริกา ด้วยเทคโนโลยี Nrf2 ที่อยู่ในผลิตภัณฑ์เสริมอาหาร และผลิตภัณฑ์ชุดดูแลบำรุงผิวหน้า (skincare) และต่อมาเมื่อปี 2012 บริษัทได้จดทะเบียนในตลาดหลักทรัพย์ Nasdaq (LFVN) เพื่อการขยายตลาดไปทั่วโลกและสร้างความเชื่อมั่นให้กับนักธุรกิจอิสระ และผู้บริโภค"),c.createElement("p",null,"วิภารัตน์ สอนบุญมา กรรมการผู้จัดการ  บริษัท ไลฟ์เวนเทจ (ประเทศไทย) จำกัด กล่าวกับ MLMNEWS ONLINE หลังจากเปิดตัวอย่างเป็นทางการเมื่อ 24 มิถุนายน 2560 หลังจากทำพรีล้อนซ์มาก่อนหน้า 2 ปี เพื่อทดลองระบบและเตรียวความพร้อม ปัจจุบันไลฟ์เวนเทจในประเทศไทย ก็เปิดมาแล้ว 5 ปี ตลอดเวลาก็เดินหน้ารุกตลาดอย่างต่อเนื่องโดยการใช้เครื่องมือดิจิตอลมาร์เก็ตติ้ง สื่อโซเซียทุกช่องทาง เพื่อให้ผู้บริโภคและผู้สนใจในธุรกิจได้รู้จักธุรกิจไลฟ์เวนเทจ โดยเฉพาะช่วงโควิค-19 ที่ระบาดหนักไทย ไลฟ์เวนเทจกับเติบโตสวนกระแส เพราะเราได้ทำตลาดทางโซเซียลอย่างมากไม่ว่าการประชุมกับผู้นำทั่วประเทศด้วยโปรแกรมซูม การอบรมสัมมนาต่างก็ผ่านโปรแกรมซูม แม้ว่าสำนักงานใหญ่กรุงเทพฯจะได้รับผลทบบางในเรื่องการลดเวลาทำงานของเจ้าหน้าที่พนักงาน แต่ไม่ส่งผลกับยอดขายที่กับเติบโตสวนกระแสขึ้นทุกเดือน คาดว่าปลายปี 63 นี้จะสามารถปิดยอดได้มากกว่า 500 ล้านบาท เพราะเราได้จัดกิจกรรมกระตุ้นปลายปีไม่ว่า การจ่ายโบนัสเงินสดให้ผู้นำที่สามารถขึ้นตำแหน่งตามที่บริษัทกำหนด รวมถึงจัดโปรโมชั่นทริปท่องเที่ยว เราได้จัดโปรให้ตอบสนองนโยบายภาครัฐต้องการให้ไทยเที่ยวไทย"),c.createElement("p",null,"วิภารัตน์ กล่าวเสริมว่า ไลฟ์เวนเทจ ยังคงมุ่งเน้นจุดแข็งทั้ง 3 ด้านที่ไม่เหมือนคู่แข่งรายอื่น ประกอบด้วย ",c.createElement("br",null)),"1. ผลิตภัณฑ์มีความโดดเด่นโปรแทนดิม เอ็นอาร์เอฟทู เป็นสินค้านวัตกรรมที่มีผลวิจัยทางวิทยาศาสตร์รองรับ ",c.createElement("br",null),"2. บริษัทแม่พร้อมให้การสนับสนุนด้านการเงินให้กับธุรกิจที่บริษัทเข้าไปขยายตลาด รวมถึงสนับสนุนในด้านเทคโนโลยีต่างๆ ",c.createElement("br",null),"3. แผนการจ่ายผลตอบแทนให้กับสมาชิกสูงสุดเมื่อเทียบกับคู่แข่งทั่วโลก ซึ่งการจ่ายผลตอบแทนเฉลี่ยของบริษัททั่วไปที่ให้กับสมาชิกนั้นปกติจะเฉลี่ยอยู่ที่ 33-34% ขณะที่บริษัทจ่ายผลตอบแทนสูงสุดถึง 48% ",c.createElement("br",null),c.createElement("p",null,"และนอกเหนือจากจุดแข็ง 3 ด้านแล้ว บริษัทยังเน้นการตอบแทนคืนสังคมด้วยการช่วยเหลือคนจนในประเทศ รวมถึงผู้ประสบภัยต่างๆ ตามนโยบายบริษัทฯ ที่กำหนดไว้"),c.createElement("hr",null))),c.createElement("h4",{className:o.xf,style:{color:"red"}},"“ไลฟ์เวนเทจ” ได้ฤกษ์เปิดตัวรุกตลาดอย่างเป็นทางการเดือนมิ.ย."),c.createElement(r.Z,null,c.createElement(i.Z,{md:{span:8,offset:2}},c.createElement(n.S,{src:"../images/lfvnnews.jpg",loading:"eager",width:1e3,formats:["auto","webp","avif"],alt:"",style:{marginBottom:"var(--space-3)"},__imageData:a(4547)}),c.createElement("br",null),c.createElement("br",null),c.createElement("h6",{style:{color:"blue"}},"หลังซุ่มเข้ามาทำตลาดในไทยเมื่อ 2ปีเพื่อเตรียมความพร้อม-ระบบ ดันไทยขึ้นเกตเวย์ เปิดประตูเข้าบุกตลาดในเอเชียตะวันออกเฉียงใต้"),c.createElement("p",null,c.createElement("h5",{style:{display:"inline-block"}},"รร.มิราเคิล แกรนด์ หลักสี่")," / “ไลฟ์เวนเทจ” บริษัทขายตรงที่ได้จดทะเบียนในตลาดหลักทรัพย์ Nasdaq (LFVN) เตรียมเปิดตัวรุกอย่างเป็นทางการ ในวันที่ 24 มิถุนายน หลังจากทำพรีล้อนซ์มาก่อนหน้า 2 ปีเพื่อทดลองระบบและเตรียมความพร้อม เผยดันไทยเป็นเกตเวย์ขยายตลาดเอเชียตะวันออกเฉียงใต้ พร้อมเล็งเปิดตลาดใหม่ที่สิงค์โปร์ มาเลเซีย อินโดนีเซียและอินเดีย ระบุตลาดไทยมีศักยภาพสูงและมีโอกาสที่เติบโตอีกมาก จากปัจจัยหลักคนไทยอยู่ในธุรกิจเครือข่ายกว่า 1 ล้านคนและมีความรู้ในตลาดขายตรงเป็นอย่างดี วาดเป้าอนาคตขึ้นแท่นผู้นำบริษัทขายตรง"),c.createElement("p",null,"มร.ดาร์เร็น เจนเซ่น ประธานและประธานเจ้าหน้าที่บริหาร บริษัท ไลฟ์เวนเทจ คอร์ปอร์เรชั่น เปิดเผยว่า หลังจากที่บริษัทได้เข้ามาเปิดตลาดในประเทศไทยมาเป็นระยะเวลา 2 ปี นโยบายหลักนอกเหนือจากการสร้างการเติบโตให้กับธุรกิจในประเทศไทยแล้ว บริษัทยังมีแผนการใช้ประเทศไทยเป็นประตูหรือเกตเวย์ในการขยายตลาดไปยังประเทศอื่นๆ ในอาเซียน และภูมิภาคเอเชียตะวันออกเฉียงใต้ โดยประเทศที่ให้ความสนใจนั้นประกอบด้วยสิงคโปร์ มาเลเซีย อินโดนีเซียและอินเดีย"),c.createElement("p",null,"ทั้งนี้การที่เลือกประเทศไทยเป็นเกตเวย์นั้น เนื่องจากเห็นความพร้อมและศักยภาพของประเทศไทย เพราะปัจจุบันมีคนไทยกว่า 1 ล้านคนที่อยู่ในธุรกิจเครือข่าย หรือคิดเป็น 16% ของจำนวนประชากรทั้งหมด อีกทั้งคนไทยมีความรู้ทางด้านธุรกิจขายตรงและพร้อมที่จะเป็นเจ้าของธุรกิจ ซึ่งทำให้เห็นโอกาสในการเติบโตของธุรกิจขายตรงได้อีกมาก สำหรับบริษัทไลฟ์เวนเทจนั้น ได้เริ่มรุกเข้าธุรกิจเครือข่ายในช่วง 7 ปีทีผ่านมา โดยปัจจุบัน ",c.createElement("b",null,"(มีนาคม 2560)")," ได้เข้าทำตลาดใน 9 ประเทศ ประกอบด้วย สหรัฐอเมริกา ออสเตรเลีย แคนาดา ฮ่องกง ญี่ปุ่น แม็กซิโก ประเทศไทย สหราชอาณาจักร และเนเธอร์แลนด์โดยมีผลประกอบการรวมอยู่ที่ 207 ล้านเหรียญดอลลาร์สหรัฐ มีจำนวนนักธุรกิจประมาณ 63,000 คน และมีฐานสมาชิกผู้บริโภค 110,000 คน โดยเป้าหมายสูงสุดของบริษัทนั้น ต้องการเป็นบริษัทผู้นำธุรกิจขายตรงทั่วโลก"),c.createElement("p",null,"ทั้งนี้การที่บริษัทมีความมั่นใจว่าจะสามารถขึ้นเป็นบริษัทผู้นำธุรกิจขายตรงทั่วโลกในอนาคตนั้น เนื่องจากบริษัทมีจุดแข็งใน 3 ด้านที่ไม่เหมือนคู่แข่งรายอื่น ประกอบด้วย",c.createElement("br",null)),"1. ผลิตภัณฑ์มีความโดดเด่น เป็นสินค้านวัตกรรมที่มีผลวิจัยทางวิทยาศาสตร์รองรับ",c.createElement("br",null),"2. บริษัทแม่พร้อมให้การสนับสนุนด้านการเงินให้กับธุรกิจที่บริษัทเข้าไปขยายตลาด รวมถึงสนับสนุนในด้านเทคโนโลยีต่างๆ",c.createElement("br",null),"3. แผนการจ่ายผลตอบแทนให้กับสมาชิกสูงสุดเมื่อเทียบกับคู่แข่งทั่วโลก",c.createElement("br",null),"ซึ่งการจ่ายผลตอบแทนเฉลี่ยของบริษัททั่วไปที่ให้กับสมาชิกนั้นปกติจะเฉลี่ยอยู่ที่ 33-34% ขณะที่บริษัทจ่ายผลตอบแทนสูงสุดถึง 48% และนอกเหนือจากจุดแข็ง 3 ด้านแล้ว บริษัทยังเน้นการตอบแทนสังคมด้วยการช่วยเหลือคนจนในประเทศต่างๆ รวมถึงผู้ประสบภัยด้วย",c.createElement("p",null,"ด้านมร. คอร์ทแลนด์ เพียร์สัน รองประธานอาวุโส ระหว่างประเทศ บริษัท ไลฟ์เวนเทจ คอร์ปอร์เรชั่น กล่าวว่า บริษัทได้ทำการพรีลอนซ์ไลฟ์เวนเทจ ในประเทศไทยเมื่อวันที่ 26 มีนาคม 2560 และจะเปิดตัวอย่างเป็นทางการในเดือนมิถุนายน 2560 รวมถึงจะเริ่มรุกตลาดอย่างจริงจัง หลังจากในช่วง 2 ปีที่ผ่านมาได้มีการเตรียมความพร้อมในด้านระบบต่างๆ รวมถึงจะมีการเปิดตัวสินค้าที่เป็นหัวหอกหลักในการทำตลาดในกลุ่มผลิตภัณฑ์เสริมอาหาร โปรแทนดิม เอ็นอาร์เอฟทู ที่ได้เริ่มจำหน่ายในเดือน มีนาคม 2560 เป็นต้นไป นอกจากนี้ บริษัทฯยังมีโปรโมชั่นเพิ่ม โบนัสค่าแนะนำอีก 15% ให้แก่ผู้นำชุดธุรกิจแพลทตินั่ม และ บริษัทฯมีคุณสมบัติ นักธุรกิจระดับ Founder เพื่อมอบสิทธิพิเศษให้กับนักธุรกิจอิสระประเทศไทยที่ได้ร่วมสร้างธุรกิจร่วมกับ LifeVantage ประเทศไทย ที่จะเริ่มตั้งแต่เดือนมีนาคม 2560 โดยมีคุณสมบัติ Premier Pro5 ขึ้นไป และจะเชิดชูกียรติในเดือน มิถุนายน 2560 และคุณสมบัตินี้ จะสิ้นสุดในเดือนธันวาคม 2560 โดยนักธุรกิจอิสระที่มีคุณสมบัติ Founderจะมีสิทธิ์ได้รับโบนัสมากขึ้น และยังมีสิทธิ์ที่จะมีคุณบัติ เป็น Elite founder Bonus ที่จะได้รับรางวัล MyLifeVenture โดยมีคุณสมบัติ เป็น Elite Pro 7 และรักษาคุณสมบัติ เพื่อรับโบนัส จำนวน 875,000 บาท และพิศษสุด สำหรับนักธุรกิจอิสระในประเทศไทย ที่ได้รับโบนัสนี้ คนแรกของประเทศไทย จะได้รับเงินโบนัสสูงถึง 1,000,000 บาท"),c.createElement("p",null,"ด้านนางวิภารัตน์ สอนบุญมา กรรมการผู้จัดการ บริษัท ไลฟ์เวนเทจ (ประเทศไทย) จำกัด กล่าวว่า เพื่อเป็นการสร้างแบรนด์ไลฟ์เวนเทจให้เป็นที่รู้จักในวงกว้าง บริษัทมีแผนการโฆษณาประชาสัมพันธ์และการใช้ดิจิตอลมาร์เก็ตติ้งเข้ามารุกตลาดมากขึ้น โดยคาดว่าหลังจากการเปิดตัวผลิตภัณฑ์หลัก อย่างโปรแทนดิม เอ็นอาร์เอฟทูคาดว่าจะสร้างสีสันให้กับตลาดและสมาชิก รวมถึงบริษัทได้มีการจัดโปรโมชั่นเพื่อกระตุ้นสมาชิกอย่างต่อเนื่อง โดยที่ผ่านมาบริษัทได้จัดงานประชุมพิเศษเพื่อเปิดตัวผลิตภัณฑ์ในวันที่ 26 มีนาคม 2560 ณ โรงแรมมิราเคิล แกรนด์ คอนเวนชั่น หลักสี่ กรุงเทพ ในงานประชุมพิเศษจะมีกิจกรรมพิเศษ และ ทริปท่องเที่ยว และจะมีงานเปิดตัวอย่างเป็นทางการ ในวันที่ 24 มิถุนายน 2560 ในงานเปิดตัวนั้น จะมีพิธีมอบเข็มประกาศเกียรติคุณและมอบรางวัลต่างๆให้แก่นักธุรกิจอิสระ และผู้พิชิตคุณสมบัติเพื่อเข้าร่วมการสัมมนา Elite Academy เมืองโอซาก้า ประเทศญี่ปุ่น ในเดือนกันยายน 2560"),c.createElement("hr",null),c.createElement("center",null,c.createElement(n.S,{src:"../images/lifevantageworldwide.jpg",width:800,formats:["auto","webp","avif"],alt:"",style:{marginBottom:"var(--space-3)"},__imageData:a(8438)})),c.createElement("hr",null),c.createElement("h4",null,"สอบถามผ่านไลน์...คลิก"),c.createElement("a",{href:"https://lin.ee/PdT5d43",target:"_blank",rel:"noopener noreferrer"},c.createElement(n.S,{src:"../images/linemai.png",width:300,quality:100,formats:["auto","webp","avif"],alt:"",style:{marginBottom:"var(--space-3)"},__imageData:a(668)})),c.createElement("h3",null,"โทร: (065) 993 2500"))),c.createElement("center",null,c.createElement("a",{href:"https://lin.ee/PdT5d43",target:"_blank",rel:"noopener noreferrer"},c.createElement(l.Z,{src:b.Z,alt:"",fluid:!0,width:500}))))}},9870:function(e,t,a){t.Z=a.p+"static/lineorder-3d4c4ca8a242185750fa34d16339bbf5.gif"},4547:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/502317011c03d11206cc50bf5499ba85/0d1b2/lfvnnews.jpg","srcSet":"/static/502317011c03d11206cc50bf5499ba85/8265c/lfvnnews.jpg 200w,\\n/static/502317011c03d11206cc50bf5499ba85/188d7/lfvnnews.jpg 400w,\\n/static/502317011c03d11206cc50bf5499ba85/0d1b2/lfvnnews.jpg 800w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/502317011c03d11206cc50bf5499ba85/a65dc/lfvnnews.avif 200w,\\n/static/502317011c03d11206cc50bf5499ba85/604ee/lfvnnews.avif 400w,\\n/static/502317011c03d11206cc50bf5499ba85/98e9f/lfvnnews.avif 800w","type":"image/avif","sizes":"(min-width: 800px) 800px, 100vw"},{"srcSet":"/static/502317011c03d11206cc50bf5499ba85/f3023/lfvnnews.webp 200w,\\n/static/502317011c03d11206cc50bf5499ba85/94ba7/lfvnnews.webp 400w,\\n/static/502317011c03d11206cc50bf5499ba85/889e3/lfvnnews.webp 800w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":1000,"height":718.75}')},8438:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/a212bf01fcdb1e97c8be4f189f98fc87/e2537/lifevantageworldwide.jpg","srcSet":"/static/a212bf01fcdb1e97c8be4f189f98fc87/38177/lifevantageworldwide.jpg 200w,\\n/static/a212bf01fcdb1e97c8be4f189f98fc87/18869/lifevantageworldwide.jpg 400w,\\n/static/a212bf01fcdb1e97c8be4f189f98fc87/e2537/lifevantageworldwide.jpg 800w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/a212bf01fcdb1e97c8be4f189f98fc87/596bc/lifevantageworldwide.avif 200w,\\n/static/a212bf01fcdb1e97c8be4f189f98fc87/59228/lifevantageworldwide.avif 400w,\\n/static/a212bf01fcdb1e97c8be4f189f98fc87/4e3e3/lifevantageworldwide.avif 800w","type":"image/avif","sizes":"(min-width: 800px) 800px, 100vw"},{"srcSet":"/static/a212bf01fcdb1e97c8be4f189f98fc87/f9911/lifevantageworldwide.webp 200w,\\n/static/a212bf01fcdb1e97c8be4f189f98fc87/3d164/lifevantageworldwide.webp 400w,\\n/static/a212bf01fcdb1e97c8be4f189f98fc87/3d761/lifevantageworldwide.webp 800w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":1200}')},3444:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/9fdd4684481380258ca8a131249d410b/650ce/lifevantagetimeline.png","srcSet":"/static/9fdd4684481380258ca8a131249d410b/f5201/lifevantagetimeline.png 213w,\\n/static/9fdd4684481380258ca8a131249d410b/833c1/lifevantagetimeline.png 425w,\\n/static/9fdd4684481380258ca8a131249d410b/650ce/lifevantagetimeline.png 850w","sizes":"(min-width: 850px) 850px, 100vw"},"sources":[{"srcSet":"/static/9fdd4684481380258ca8a131249d410b/d13ec/lifevantagetimeline.avif 213w,\\n/static/9fdd4684481380258ca8a131249d410b/cb1e5/lifevantagetimeline.avif 425w,\\n/static/9fdd4684481380258ca8a131249d410b/89f06/lifevantagetimeline.avif 850w","type":"image/avif","sizes":"(min-width: 850px) 850px, 100vw"},{"srcSet":"/static/9fdd4684481380258ca8a131249d410b/94db2/lifevantagetimeline.webp 213w,\\n/static/9fdd4684481380258ca8a131249d410b/f7782/lifevantagetimeline.webp 425w,\\n/static/9fdd4684481380258ca8a131249d410b/53b77/lifevantagetimeline.webp 850w","type":"image/webp","sizes":"(min-width: 850px) 850px, 100vw"}]},"width":850,"height":657}')},668:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/9473adb887cc04c13552e1b663124849/d2951/linemai.png","srcSet":"/static/9473adb887cc04c13552e1b663124849/fe9d4/linemai.png 75w,\\n/static/9473adb887cc04c13552e1b663124849/30ed7/linemai.png 150w,\\n/static/9473adb887cc04c13552e1b663124849/d2951/linemai.png 300w,\\n/static/9473adb887cc04c13552e1b663124849/e7875/linemai.png 600w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/static/9473adb887cc04c13552e1b663124849/ddd15/linemai.avif 75w,\\n/static/9473adb887cc04c13552e1b663124849/3a6c6/linemai.avif 150w,\\n/static/9473adb887cc04c13552e1b663124849/aff70/linemai.avif 300w,\\n/static/9473adb887cc04c13552e1b663124849/6d5fa/linemai.avif 600w","type":"image/avif","sizes":"(min-width: 300px) 300px, 100vw"},{"srcSet":"/static/9473adb887cc04c13552e1b663124849/94689/linemai.webp 75w,\\n/static/9473adb887cc04c13552e1b663124849/de675/linemai.webp 150w,\\n/static/9473adb887cc04c13552e1b663124849/19315/linemai.webp 300w,\\n/static/9473adb887cc04c13552e1b663124849/d0543/linemai.webp 600w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":131}')},7801:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/c0ee65a6e7e735ace8ae433ca87b912f/846d8/mlmnews01.png","srcSet":"/static/c0ee65a6e7e735ace8ae433ca87b912f/03fcf/mlmnews01.png 250w,\\n/static/c0ee65a6e7e735ace8ae433ca87b912f/60c1e/mlmnews01.png 500w,\\n/static/c0ee65a6e7e735ace8ae433ca87b912f/846d8/mlmnews01.png 1000w","sizes":"(min-width: 1000px) 1000px, 100vw"},"sources":[{"srcSet":"/static/c0ee65a6e7e735ace8ae433ca87b912f/8afeb/mlmnews01.avif 250w,\\n/static/c0ee65a6e7e735ace8ae433ca87b912f/c011d/mlmnews01.avif 500w,\\n/static/c0ee65a6e7e735ace8ae433ca87b912f/d2965/mlmnews01.avif 1000w","type":"image/avif","sizes":"(min-width: 1000px) 1000px, 100vw"},{"srcSet":"/static/c0ee65a6e7e735ace8ae433ca87b912f/8451e/mlmnews01.webp 250w,\\n/static/c0ee65a6e7e735ace8ae433ca87b912f/73572/mlmnews01.webp 500w,\\n/static/c0ee65a6e7e735ace8ae433ca87b912f/8cae7/mlmnews01.webp 1000w","type":"image/webp","sizes":"(min-width: 1000px) 1000px, 100vw"}]},"width":1000,"height":640}')}}]);
//# sourceMappingURL=component---src-pages-lifevantage-js-ff4f62e6a576aec57515.js.map