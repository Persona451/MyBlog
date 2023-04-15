import React from 'react';
import { Link } from 'react-router-dom';
import styles from './post.module.css'

const Post = ({img, title, descr, date, id}) => {
    return (
        <artice className={styles.post}>
            <img src={img} alt='' className={styles.img} />
            <div className={styles.info}>
                <p className={styles.date}>{date}</p>
                <h5 className={styles.title}>
                    <Link to={`/post/${id}`} className={styles.link}> {title} </Link>
                    </h5>
                <p className={styles.descr}>{descr}</p>
            </div>
        </artice>
    );
};

export default Post;