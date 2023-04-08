import React from 'react';
import styles from './about.module.css'

const About = () => {
    return (
        <div className={styles.info}>
            <p className={styles.about}>
                Here I write stuff related to computer, anime, movies and what’s happening in my life?
            </p>
            <a href="" className={styles.more}>More about me</a>
        </div>
    );
};

export default About;