import React, { useState, useEffect } from "react";
import Post from "../../components/Post/Post";
import styles from "./postspage.module.css";
import postServices from "../../services/posts";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postServices.get().then((res) => setPosts(res.data));
    }, []);

    return (
        <section className={styles.posts}>
            {posts.map((post) => {
                const dateString = post.createdAt;
                const date = new Date(dateString);
                const options = { day: 'numeric', month: 'short', year: 'numeric' };
                const formatDate = date.toLocaleDateString('en-US', options);
                return (
                    <Post
                        key={post._id}
                        img={post.img}
                        date={formatDate}
                        title={post.title}
                        descr={post.descr}
                    />
                );
            })}
        </section>
    );
};

export default PostsPage;