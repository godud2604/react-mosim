import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
      return (
            <header className={styles.header}>
                  <div className={styles.logo}>
                        <Link to="/">                        
                              <img src="/images/logo.svg" alt="logo"/>
                        </Link>
                  </div>
                  <nav>
                        <Link to="/profile" className={styles.link}>상품안내</Link>
                        <Link to="/alliance" className={styles.link}>제휴사</Link>
                        <Link to="/branch" className={styles.link}>지사안내</Link>
                        <Link to="/client" className={styles.link}>고객센터</Link>
                        <Link to="/login" className={styles.link}>로그인</Link>
                  </nav>
            </header>
      );
};

export default Nav;