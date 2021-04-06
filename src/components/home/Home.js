import React, { useEffect, useRef } from 'react';
import Nav from '../nav/Nav';
import styles from './Home.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AiFillCaretRight } from "react-icons/ai";
import bg from './bg01.jpg';


gsap.registerPlugin(ScrollTrigger);


const Home = () => {
      const imgRef = useRef(null);

      useEffect( () => {
            gsap.from(imgRef.current, {
                  y:20,
                  autoAlpha: 0,
                  ease:'none',
                  delay:0.5
            })
      },[]);

      return (
            <div>
                  <Nav className={styles.nav}/>
                  {/* Nav end */}

                  <section className={styles.mainVisual} style={{backgroundImage:'url(' + bg + ')'}}>
                        <div className={styles.inner}>
                        {/* <div className={styles.homeBg}>
                              <img src="/images/bg01.jpg" alt="main_image"/>  
                        </div> */}
                        <div className={styles.txtBox}>
                              <h1>주식회사 모심</h1>
                              <p className={styles.sub}>자식 된 마음으로 소중한 가족들의 <br/> 평생을 정성을 다해 모셔드립니다.</p>
                        </div>
                        </div>
                  </section>
                  {/* mainVisual end */}

                  <section className={styles.special}>
                        <div className={styles.inner}>
                              <div className={styles.specialTxt}>
                                    <h1 className={styles.title}>
                                          모심만의 특별한 서비스
                                    </h1>
                                    <h3 className={styles.sub}>
                                          모심의 가족이 되어주세요 ! <br/>
                                          오직, 모심에서만 제공해 드리는 <br/>
                                          우리 가족을 위한 특별한 혜택들을 지금 바로 누려보세요.
                                    </h3>
                              </div>
                              <div className={styles.imgBox}>
                                    <div className={styles.box}>
                                                <div className={styles.img}>
                                                      <img src="/images/main01.jpg" alt="영상 스트리밍"/>
                                                </div>
                                                {/* <div className={styles.subBox}>
                                                      <p className={styles.top}>
                                                            영상 스트리밍
                                                      </p>
                                                      <p className={styles.bottom}>
                                                            보고싶었던 가족을 부담없이 <br/> 마음으로 만나보실 수 있습니다.
                                                      </p>
                                                </div> */}
                                    </div>
                                    <div className={styles.box}>
                                          <div className={styles.img}>
                                                <img src="/images/main02.jpg" alt="영상 스트리밍"/>
                                          </div>
                                          {/* <div className={styles.subBox}>
                                                <p className={styles.top}>
                                                      영상 스트리밍
                                                </p>
                                                <p className={styles.bottom}>
                                                      보고싶었던 가족을 부담없이 <br/> 마음으로 만나보실 수 있습니다.
                                                </p>
                                          </div> */}
                                    </div>
                                    <div className={styles.box}>
                                          <div className={styles.img}>
                                                <img src="/images/main03.jpg" alt="영상 스트리밍"/>
                                          </div>
                                          {/* <div className={styles.subBox}>
                                                <p className={styles.top}>
                                                      영상 스트리밍
                                                </p>
                                                <p className={styles.bottom}>
                                                      보고싶었던 가족을 부담없이 <br/> 마음으로 만나보실 수 있습니다.
                                                </p>
                                          </div> */}
                                    </div>
                                    <div className={styles.box}>
                                          <div className={styles.img}>
                                                <img src="/images/main04.jpg" alt="하늘에 쓰는 편지"/>
                                          </div>
                                          {/* <div className={styles.subBox}>
                                                <p className={styles.top}>
                                                      하늘에 쓰는 편지
                                                </p>
                                                <p className={styles.bottom}>
                                                      그리운 가족에게 미처 전하지 <br/> 못했던 말들을 정성스레 <br/> 전해드립니다. (서비스 준비중)
                                                </p>
                                          </div> */}
                                    </div>
                                    <div className={styles.box}>
                                          <div className={styles.img}>
                                                <img src="/images/main05.jpg" alt="위패 서비스"/>
                                          </div>
                                          {/* <div className={styles.subBox}>
                                                <p className={styles.top}>
                                                      위패 서비스
                                                </p>
                                                <p className={styles.bottom}>
                                                      하루하루가 더 특별해지도록 <br/> 축원을 해드리는 서비스를 <br/> 제공해드립니다. (12회/1년)
                                                </p>
                                          </div> */}
                                    </div>

                              </div>
                        </div>
                  </section>
                  {/* special end */}

                  <section className={styles.hanaCard}>
                        
                        <div className={styles.inner}>
                              <div className={styles.specialBg}>
                                    <img src="/images/bg10.jpg" alt="스페셜 서비스"/>
                              </div>
                              <div className={styles.hanaRight}>
                                    {/* <div className={styles.hanaImg}>
                                          <img src="/images/bg09.jpg" alt="하나 카드"/>
                                    </div> */}
                                    <div className={styles.hanaTxt}>
                                          <ul className={styles.depth}>
                                                <li className={styles.title}>모심 하나 멤버스 1Q(원큐) 카드 Daily</li>
                                                <li className={styles.depth01}><AiFillCaretRight style={{fontSize: '0.9rem', marginRight: '0.6em'}}/>모심 서비스 최대 24개월 무이자 할부</li>
                                                <li className={styles.depth01}><AiFillCaretRight style={{fontSize: '0.9rem', marginRight: '0.6em'}} />국내 모든 가맹점 0.5% 적립</li>
                                                <li className={styles.depth01}><AiFillCaretRight style={{fontSize: '0.9rem', marginRight: '0.6em'}} />온라인쇼핑 10만원당 5천머니 적립</li>
                                                <li className={styles.depth01}><AiFillCaretRight style={{fontSize: '0.9rem', marginRight: '0.6em'}} />통신/대중교통 10만원당 5천머니 적립</li>
                                                <li className={styles.depth01}><AiFillCaretRight style={{fontSize: '0.9rem', marginRight: '0.6em'}} />아파트관리비 5천머니 적립</li>
                                          </ul>
                                          <button>하나카드 신청하기</button>
                                    </div>
                              </div>
                        </div>
                  </section>
                  {/* hanaCard end */}

                  <section className={styles.instagram}> 
                        
                  </section>
            </div>
      );
};

export default Home;