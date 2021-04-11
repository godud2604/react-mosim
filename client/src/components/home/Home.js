import React, { useEffect, useRef } from 'react';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import bg from './bg01.jpg';

// css & icon
import styles from './Home.module.css';
import { AiFillCaretRight } from "react-icons/ai";

// gsap
import {TimelineLite, TweenMax, Power3, Power2, gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

const slideImages = [
      'images/bg01.jpg',
      'images/bg02.jpg',
      'images/bg03.jpg'
    ];

const Home = () => {
      // ✅ gsap 변수 선언
      let app = useRef(null);
      // main
      let mainVisual01 = useRef(null);
      let mainVisual02 = useRef(null);
      // special
      let special01 = useRef(null);
      let specialImg01 = useRef(null);
      let specialImg02 = useRef(null);
      let specialImg03 = useRef(null);
      let specialImg04 = useRef(null);
      let specialImg05 = useRef(null);
      // hana
      let hana01 = useRef(null);
      let hana02 = useRef(null);
      let hana03 = useRef(null);
      let hana04 = useRef(null);
      let hana05 = useRef(null);
      let hana06 = useRef(null);
      let hana07 = useRef(null);
      // let hana08 = useRef(null);
      //eco
      let eco01 = useRef(null);
      let eco03 = useRef(null);      

      // ✅ TimelineLite
      let tl = new TimelineLite();

      useEffect(() => {

            // defalut
            tl.to(app, 0, {css: {visibility:"visible"}})              

            // ✅ Animation
            tl.to( mainVisual01, .8, { opacity:1, y:-20 ,ease:Power3.easeOut});
            tl.to( mainVisual02, .8, { opacity:1, y:-20, ease:Power3.easeOut });
            gsap.from(special01, {
                        x: -60,
                        duration: 1,
                        opacity:0,
                        ease: "easeOut",
                        delay: 1,
                  scrollTrigger: {
                        trigger: special01,
                        start:'top center',

                  },
            })
            gsap.from(specialImg01, {
                  y: 80,
                  duration: 1,
                  opacity:0,
                  ease: "easeOut",
                  delay: 1,
            scrollTrigger: {
                  trigger: specialImg01,
                  start:'top center',
                  },
            })
            gsap.from(specialImg02, {
                  y: 100,
                  duration: 1,
                  opacity:0,
                  ease: "easeOut",
                  delay: 1,
            scrollTrigger: {
                  trigger: specialImg01,
                  start:'top center',
                  },
            })
            gsap.from(specialImg03, {
                  y: 120,
                  duration: 1,
                  opacity:0,
                  ease: "easeOut",
                  delay: 1,
            scrollTrigger: {
                  trigger: specialImg01,
                  start:'top center',
                  },
            })
            gsap.from(specialImg04, {
                  y: 140,
                  duration: 1,
                  opacity:0,
                  ease: "easeOut",
                  delay: 1,
            scrollTrigger: {
                  trigger: specialImg01,
                  start:'top center',
                  },
            })
            gsap.from(specialImg05, {
                  y: 160,
                  duration: 1,
                  opacity:0,
                  ease: "easeOut",
                  delay: 1,
            scrollTrigger: {
                  trigger: specialImg01,
                  start:'top center',
                  },
            })
            gsap.from(hana01, {
                  x:-80,
                  // duration: 1,
                  opacity:0,
                  ease: "easeOut",
            scrollTrigger: {
                  trigger: hana01,
                  start:'top center',
                  },
            })
            gsap.from(hana02, {
                  y:20,
                  duration: 1,
                  opacity:0,
                  ease: "easeInOut",
            scrollTrigger: {
                  trigger: hana01,
                  start:'top center',
                  },
            })
            gsap.from(hana03, {
                  y:30,
                  duration: 1,
                  opacity:0,
                  ease: "easeInOut",
            scrollTrigger: {
                  trigger: hana01,
                  start:'top center',
                  },
            })
            gsap.from(hana04, {
                  y:40,
                  duration: 1,
                  opacity:0,
                  ease: "easeInOut",
            scrollTrigger: {
                  trigger: hana01,
                  start:'top center',
                  },
            })
            gsap.from(hana05, {
                  y:50,
                  duration: 1,
                  opacity:0,
                  ease: "easeInOut",
            scrollTrigger: {
                  trigger: hana01,
                  start:'top center',
                  },
            })
            gsap.from(hana06, {
                  y:60,
                  duration: 1,
                  opacity:0,
                  ease: "easeInOut",
            scrollTrigger: {
                  trigger: hana01,
                  start:'top center',
                  },
            })
            gsap.from(hana07, {
                  y:70,
                  duration: 1,
                  opacity:0,
                  ease: "easeInOut",
            scrollTrigger: {
                  trigger: hana01,
                  start:'top center',
                  },
            })
            gsap.from(eco01, {
                  y:20,
                  duration: 1,
                  opacity:0,
                  ease: "easeInOut",
            scrollTrigger: {
                  trigger: eco01,
                  start:'top center',
                  },
            })
            gsap.from(eco03, {
                  y:40,
                  duration: 1,
                  opacity:0,
                  ease: "easeInOut",
                  // delay:.2,
            scrollTrigger: {
                  trigger: eco01,
                  start:'top center',
                  },
            })
      });

      return (    
            <div className={styles.app} ref={el => {app = el}}>
                  <Nav className={styles.nav}/>
                  {/* Nav end */}


                  <section className={styles.mainVisual} style={{backgroundImage:'url(' + bg + ')'}}>
                        <div className={styles.inner}>
                              <div 
                                    className={styles.txtBox}>
                                    <h1 ref={el => {mainVisual01 = el}}>주식회사 모심</h1>
                                    <p 
                                    className={styles.sub}
                                    ref={el => {mainVisual02 = el}}>자식 된 마음으로 소중한 가족들의 <br/> 평생을 정성을 다해 모셔드립니다.</p>
                              </div>
                        </div>
                  </section>
                  {/* mainVisual end */}

                  <section className={styles.special}>
                        <div className={styles.inner}>
                              <div className={styles.specialTxt} ref={el => {special01 = el}}>
                                    <h1 
                                          className={styles.title}
                                    >
                                          모심만의 특별한 서비스
                                    </h1>
                                    <h3 
                                          className={styles.sub}
                                    >
                                          모심의 가족이 되어주세요 ! <br/>
                                          오직, 모심에서만 제공해 드리는 <br/>
                                          우리 가족을 위한 특별한 혜택들을 지금 바로 누려보세요.
                                    </h3>
                                    <Link to="/profile"><Button/></Link>
                              </div>
                              <div className={styles.imgBox}>
                                    <div className={styles.box} ref={el => {specialImg01 = el}}>
                                          <div className={styles.boxCover}>
                                                <div className={styles.img}>
                                                      <img src="/images/main01.jpg" alt="위패 서비스"/>
                                                </div>
                                                <div className={styles.subBox}>
                                                      <p className={styles.top}>
                                                            위패 서비스
                                                      </p>
                                                      <p className={styles.bottom}>
                                                            하루하루가 더 특별해지도록 <br/> 축원을 해드리는 서비스를 <br/> 제공해드립니다 (12회/1년)
                                                      </p>
                                                </div>
                                          </div>
                                                
                                    </div>
                                    <div className={styles.box} ref={el => {specialImg02 = el}}>
                                          <div className={styles.boxCover}>
                                                <div className={styles.img}>
                                                      <img src="/images/main02.jpg" alt="평생 모심 서비스"/>
                                                </div>
                                                <div className={styles.subBox}>
                                                      <p className={styles.top}>
                                                      평생 모심 서비스
                                                      </p>
                                                      <p className={styles.bottom}>
                                                            사랑하는 내 가족을 <br/> 누구보다도 정성껏<br/> 평생 모셔드립니다.
                                                      </p>
                                                </div>
                                          </div>
                                          
                                    </div>
                                    <div className={styles.box} ref={el => {specialImg03 = el}}>
                                          <div className={styles.boxCover}>
                                                 <div className={styles.img}>
                                                            <img src="/images/main03.jpg" alt="영상 스트리밍"/>
                                                      </div>
                                                      <div className={styles.subBox}>
                                                            <p className={styles.top}>
                                                            영상 스트리밍
                                                            </p>
                                                            <p className={styles.bottom}>
                                                                  보고싶었던 가족을 <br/> 부담없이 마음으로<br/>  만나보실 수 있습니다.
                                                            </p>
                                                </div>
                                          </div>
                                         
                                    </div>
                                    <div className={styles.box} ref={el => {specialImg04 = el}}>
                                          <div className={styles.boxCover}>
                                                <div className={styles.img}>
                                                            <img src="/images/main04.jpg" alt="하늘에 쓰는 편지"/>
                                                      </div>
                                                      <div className={styles.subBox}>
                                                            <p className={styles.top}>
                                                                  하늘에 쓰는 편지
                                                            </p>
                                                            <p className={styles.bottom}>
                                                            그리운 가족에게 미처 전하지 <br/> 못했던 말들을 정성스레 <br/> 전해드립니다. (서비스 준비중)
                                                            </p>
                                                </div>
                                          </div>
                                         
                                    </div>
                                    <div className={styles.box} ref={el => {specialImg05 = el}}>
                                          <div className={styles.boxCover}>
                                                <div className={styles.img}>
                                                            <img src="/images/main05.jpg" alt="친환경 봉안(평생납골) 서비스"/>
                                                      </div>
                                                      <div className={styles.subBox}>
                                                      <p className={styles.top}>
                                                            친환경 봉안 (평생납골) <br/> 서비스
                                                      </p>
                                                      <p className={styles.bottom}>
                                                            사랑하는 가족 곁에서 <br/>
                                                            평생 함께할 수 있습니다.
                                                      </p>
                                                </div>
                              
                                          </div>
                                    </div>

                              </div>
                        </div>
                  </section>
                  {/* special end */}

                  <section className={styles.hanaCard}>
                        
                        <div className={styles.inner}>
                              <div className={styles.specialBg} ref={el => {hana01 = el}}>
                                    <img src="/images/bg10.jpg" alt="스페셜 서비스"/>
                              </div>
                              <div className={styles.hanaRight}>
                                    <div className={styles.hanaTxt}>
                                          <ul className={styles.depth}>
                                                <li className={styles.title} ref={el => {hana02 = el}}>모심 하나 멤버스 1Q(원큐) 카드 Daily</li>
                                                <li className={styles.depth01} ref={el => {hana03 = el}}><AiFillCaretRight style={{fontSize: '0.9rem', marginRight: '0.6em'}}/>모심 서비스 최대 24개월 무이자 할부</li>
                                                <li className={styles.depth01} ref={el => {hana04 = el}}><AiFillCaretRight style={{fontSize: '0.9rem', marginRight: '0.6em'}} />국내 모든 가맹점 0.5% 적립</li>
                                                <li className={styles.depth01} ref={el => {hana05 = el}}><AiFillCaretRight style={{fontSize: '0.9rem', marginRight: '0.6em'}} />온라인쇼핑 10만원당 5천머니 적립</li>
                                                <li className={styles.depth01} ref={el => {hana06 = el}}><AiFillCaretRight style={{fontSize: '0.9rem', marginRight: '0.6em'}} />통신/대중교통 10만원당 5천머니 적립</li>
                                                <li className={styles.depth01} ref={el => {hana07 = el}}>
                                                      <AiFillCaretRight style={{fontSize: '0.9rem', marginRight: '0.6em'}} />
                                                      아파트관리비 5천머니 적립
                                                      <a href="https://m.hanacard.co.kr/MPACMM101M.web?CD_PD_SEQ=12974"><Button/></a>
                                                </li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                  </section>
                  {/* hanaCard end */}

                  <section className={styles.eco}> 
                        <div className={styles.inner}>
                              <div className={styles.ecoLeft}>
                                    <div className={styles.ecoTxt} ref={el => {eco01 = el}}>
                                          <p className={styles.ecoTitle}>
                                                모심 파트너사
                                          </p>
                                          <p className={styles.ecoSub}>
                                                모심은 다양한 파트너사와 제휴를 통해서 <br/>
                                                고객님께 다양하고 특별한 서비스를 제공해 드립니다.
                                          </p>
                                    </div>
                                    <div className={styles.ecoImg} ref={el => {eco03 = el}}>
                                          <ul>
                                                <li><img src="/images/ptn01.svg" alt="하나금융그룹"/></li>
                                                <li><img src="/images/ptn02.svg" alt="하나카드"/></li>
                                                <li><img src="/images/ptn03.svg" alt="드림프리덤"/></li>
                                                <li><img src="/images/ptn04.svg" alt="주식회사파드마"/></li>
                                                <li><img src="/images/ptn05.svg" alt="이니시스"/></li>
                                                <li><img src="/images/ptn06.svg" alt="KB국민카드"/></li>
                                                <li><img src="/images/ptn07.svg" alt="현대카드"/></li>
                                                <li><img src="/images/ptn08.svg" alt="비씨카드"/></li>
                                                <li><img src="/images/ptn09.svg" alt="신한카드"/></li>
                                                <li><img src="/images/ptn10.svg" alt="롯데카드"/></li>
                                                <li><img src="/images/ptn11.svg" alt="삼성카드"/></li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                  </section>
                  {/* eco end */}

                 <Footer/>
            </div>
      );
};

export default Home;