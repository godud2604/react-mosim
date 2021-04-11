import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
      return (
            <footer className={styles.footer}>
                        <div className={styles.inner}>
                              <div className={styles.footerLeft}>
                                    <img src="/images/logo.svg" alt="모심로고"/>
                              </div>      
                              <div className={styles.footerRight}>
                                    <div className={styles.txt}>
                                          <p>이용약관</p>
                                          <p className={styles.privacy}>개인정보취급방침</p>
                                          <p className={styles.people}><a href="https://pf.kakao.com/_BxaVHK/chat">고객센터</a></p>
                                    </div>
                                    <div className={styles.information}>
                                          <ul>
                                                <li>주식회사 모심</li>
                                                <li>대표자 : 양선진</li>
                                                <li>사업자번호 : 298-87-01892</li>
                                                <li>통신판매업신고번호 : 제2021-용인기흥-0240호</li>
                                                <li>대표번호 : 1599-9668</li>
                                                <li>팩스번호 : 02-599-9668</li>
                                                <li>경기도 용인시 기흥구 용구대로2145번길 1(신갈동)</li>
                                                <li className={styles.copy}>Copyright (주)모심. All rights reserved.</li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                  </footer>
      );
};

export default Footer;