import React from 'react';
import styles from './header.module.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';

const Header = () => {
    const activeClass = ({isActive}) => {
        return isActive ? `${styles.active} ${styles.link}` : styles.link
    }
    const username = useSelector(state => state.user.currentUser?.username)

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
      };
    return (
        <header>
            <nav className={styles.nav}>
                <NavLink to="/" className={activeClass}>Home</NavLink>
                <NavLink to="/posts" className={activeClass}>Blog</NavLink>
                <NavLink to="/about" className={activeClass}>About me</NavLink>
                <NavLink to="/register" className={activeClass}>Register</NavLink>
                <NavLink to="/login" className={activeClass}>Login</NavLink>
                <NavLink to="/profile" className={activeClass}>Profile</NavLink>
            </nav>
            <p className={styles.username}>{username}</p>
            <button className={styles.button} onClick={handleLogout}>
                Выйти
            </button>
        </header>
    );
};

export default Header;