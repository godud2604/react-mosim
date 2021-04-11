import React from 'react';
import styles from './SubHeader.module.css';

const SubHeader = ({ subImg, title, sec }) => {
      return (
            <header className={styles.subHeader} style={{backgroundImage:'url(' + subImg + ')'}}>
                  <div className={styles.table}>
                        <div className={styles.subTxtBox}>
                              <p className={styles.subTitle}>{title}</p>
                              <p className={styles.subSec}>{sec}</p>
                        </div>
                  </div>
            </header>
      );   
};

export default SubHeader;