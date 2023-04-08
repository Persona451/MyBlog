import React from 'react';
import styles from './subscribe.module.css'

const Subscribe = () => {
    return (
        <div className={styles.subscribe_info}>
            <p className={styles.subscribe_text}>
                Would you like to recieve emails of my posts every friday, if yes then consider subscribing
            </p>
            <div className={styles.info}>
            <p className={styles.subscribe_email}>
                name@domain.com
            </p>
            <p className={styles.subscribe}>
                Subscribe
            </p>
            </div>
        </div>
    );
};

export default Subscribe;