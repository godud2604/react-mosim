import React from 'react';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import SubHeader from '../subHeader/SubHeader';

import styles from './Profile.module.css'

import sub01 from './sub01.jpg';
import flower01 from './flower01.jpg';
import flower02 from './flower02.jpg';

const Profile = () => {
      return (
            <div>
                  <Nav/>
                  <SubHeader 
                        subImg={sub01}
                        title='상품 안내'
                        sec='소중한 가족들의 평생을 책임집니다.'
                  />
                  <div className={styles.product}>

                        <div className={styles.familyBox}>
                              <p className={styles.sub}>
                                    가족처럼 모셔드립니다.
                              </p>
                              <p className={styles.title}>
                                    친환경 제례 문화 서비스
                              </p>
                        </div>
                        <div className={styles.mosim}>
                              <p className={styles.mosimTxt}>
                                    '주식회사 모심'은, 기존 장래 서비스에 정성을 더하여 <br/> 가족분들의 마음의 짐을 조금이라도 덜어드리고자 <br/><strong>평생 모심 서비스</strong>와 <strong>친환경 봉안 서비스</strong>로 좀 더 편안히 모시려 합니다.
                              </p>
                        </div>

                        {/*  */}
                        <div className={styles.flowerBox}>
                              <div className={styles.flowerLeft}>
                                    <div className={styles.table}>
                                          <div className={styles.img} style={{backgroundImage:'url(' + flower01 + ')'}}>
                                                <p className={styles.title}>평생 모심 서비스 1호</p>
                                                <ul className={styles.txt}>
                                                      <li className={styles.money}>19,800원</li>
                                                      <li>평생 모심 서비스</li>
                                                      <li>위패 서비스</li>
                                                      <li>하늘에 쓰는 편지</li>
                                                      <li>영상 스트리밍</li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className={styles.des}>
                                          <p>시대와 함께 바뀌어가는 제례 문화에 대한 인식을 <br/> 수렴하고 더 나은 방법으로 고인에 대한 예를 <br/> 평생 모심 서비스로 다하려 합니다.</p>
                                    </div>
                              </div>
                              <div className={styles.flowerRight}>
                                    <div className={styles.table}>
                                          <div className={styles.img} style={{backgroundImage:'url(' + flower02 + ')'}}>
                                                <p className={styles.title}>평생 모심 서비스 2호</p>
                                                <ul className={styles.txt}>
                                                      <li className={styles.money}>55,900원</li>
                                                      <li>평생 모심 서비스</li>
                                                      <li>위패 서비스</li>
                                                      <li>하늘에 쓰는 편지</li>
                                                      <li>영상 스트리밍</li>
                                                      <li>친환경 봉안(평생납골)</li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className={styles.des}>
                                          <p>기존 납골 방식에서 발생되는 결로, 변질, 악취,  <br/>장기 보관에 대한 문제점을 개선하여 사랑하는 <br/> 고인을 종교, 장소에 얽매이기 않고 안전하고 <br/> 아름답게 지킬 수 있는 방법입니다.</p>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/*  */}
                  <div className={styles.mainService}>
                        <div className={styles.mainCover}>
                              <ul>
                                    <li>
                                          <div className={styles.photo}>
                                                <img src="/images/bg10.jpg" alt="위패서비스"/>
                                          </div>
                                          <div className={styles.txtBox}>
                                                <p className={styles.title}>위패 서비스</p>
                                                {/* line 컴포넌트 만들기 */}
                                                <p className={styles.sub}>고인의 성함이 담긴 위패를 <br/> 제작하여 안치해 드립니다.</p>
                                          </div>
                                    </li>
                                    <li>
                                          <div className={styles.txtBox}>
                                                <p className={styles.title}>평생 모심 서비스</p>
                                                {/* line 컴포넌트 만들기 */}
                                                <p className={styles.sub}>고인의 매년기일마다 <br/> 정성껏 모셔드립니다.</p>
                                          </div>
                                          <div className={styles.photo}>
                                                <img src="/images/bg10.jpg" alt="평생 모심 서비스"/>
                                          </div>
                                    </li>
                                    <li>
                                          <div className={styles.photo}>
                                                <img src="/images/bg10.jpg" alt="하늘에 쓰는 편지"/>
                                          </div>
                                          <div className={styles.txtBox}>
                                                <p className={styles.title}>하늘에 쓰는 편지</p>
                                                {/* line 컴포넌트 만들기 */}
                                                <p className={styles.sub}>홈페이지를 통해 편지를 작성하시면, <br/> 정성스레 하늘로 전달해 드립니다. <br/>(서비스 준비중)</p>
                                          </div>
                                    </li>
                                    <li>
                                          <div className={styles.txtBox}>
                                                <p className={styles.title}>영상 스트리밍</p>
                                                {/* line 컴포넌트 만들기 */}
                                                <p className={styles.sub}>고인의 기일에 온 가족들과 함께 <br/> 부담 없이 마음으로 함께 하실 수 있습니다.</p>
                                          </div>
                                          <div className={styles.photo}>
                                                <img src="/images/bg10.jpg" alt="영상 스트리밍"/>
                                          </div>
                                    </li>
                                    <li>
                                          <div className={styles.photo}>
                                                <img src="/images/bg10.jpg" alt="친환경 봉안 서비스"/>
                                          </div>
                                          <div className={styles.txtBox}>
                                                <p className={styles.title}>친환경 봉안 서비스</p>
                                                {/* line 컴포넌트 만들기 */}
                                                <p className={styles.sub}>사랑하는 고인의 유골을 기존의 <br/> 납골 방식에서 정성을 더하여 <br/> 친환경적으로 봉안해 드립니다.</p>
                                          </div>
                                    </li>
                              </ul>
                        </div>
                        
                  </div>
                  <Footer/>
            </div>
      );
};

export default Profile;