import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import styles from './Button.module.css';

const Button = () => {
    return (
        <div className={styles.wrapper}>
            <button className={styles.button}>view more<AiOutlineRight style={{fontSize: '0.7rem', marginLeft: '2em'}}/></button>
        </div>
    );
};

export default Button;