import React from "react";
import styles from "./singlepostpage.module.css"
import postImg from "./postimg.png"

const SinglePostPage = () => {
    return (
        <article className={styles.post}>
            <h1 className={styles.title}>My title</h1>
            <img src={postImg} alt="" className={styles.img} />
            <p className={styles.descr}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
                nesciunt eaque ullam illo voluptates ratione voluptate! Cupiditate
                exercitationem harum quibusdam possimus odio id perferendis laborum
                nulla voluptatem, tempore repellat ea placeat. Excepturi rerum nam ab
                vel quidem omnis sapiente soluta animi enim accusantium saepe quasi
                voluptatum labore facilis inventore fuga laboriosam incidunt, blanditiis
                expedita itaque molestiae id, ea tempore? Nobis architecto eius nam
                maiores voluptates minima non laborum veritatis dolores!
            </p>
            <p className={styles.date}>Published 11 April 2021</p>
        </article>
    );
};

export default SinglePostPage;
