import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './registerpage.module.css'
import { authServices } from '../../services/auth';

const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const { registration } = authServices()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newUser = {
            "username": name,
            email,
            password
        }
        try {
            const { data } = await registration(newUser)
            console.log(data._doc)
        }
        catch (err) {
            console.log(err.response.data);
        }
    }
    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>
                Регистрация
            </h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <TextField
                    label="Ваш email"
                    variant="filled"
                    type="email"
                    fullWidth
                    required
                    style={{ marginBottom: "20px" }}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    label="Ваше имя"
                    variant="filled"
                    type="text"
                    fullWidth
                    required
                    style={{ marginBottom: "20px" }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <TextField
                    label="Ваш пароль"
                    variant="filled"
                    type="password"
                    fullWidth
                    required
                    style={{ marginBottom: "40px" }}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button
                    fullWidth
                    type='submit'
                    variant="contained"
                    style={{ backgroundColor: "#BF94E8", fontSize: "24px" }}
                >
                    Зарегистрироваться
                </Button>
            </form>
        </section>
    );
};

export default RegisterPage;
