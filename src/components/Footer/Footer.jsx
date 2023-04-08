import React from 'react';
import styles from './footer.module.css'
import logo1Img from './logo1.png'
import logo2Img from './logo2.png'
import logo3Img from './logo3.png'
import logo4Img from './logo4.png'
import logo5Img from './logo5.png'
import logo6Img from './logo6.png'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <h1 className={styles.footer_text}>
                Get in touch with me on other platforms
            </h1>
            <footer className={styles.logo}>
                <img src={logo1Img} alt="" />
                <img src={logo2Img} alt=""/>
                <img src={logo3Img} alt=""/>
                <img src={logo4Img} alt=""/>
                <img src={logo5Img} alt=""/>
                <img src={logo6Img} alt=""/>
            </footer>
        </div>
    );
};

export default Footer;