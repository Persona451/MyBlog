import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import styles from "../RegisterPage/registerpage.module.css";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { authServiceLogin } from '../../services/auth';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/userSlice';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const dispatch = useDispatch() //useDispatch() позволяет вызвать action
    const navigate = useNavigate()

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .required("Обязательное поле")
            .email("Введите корректный email"),
        password: yup.string().required("Обязательное поле"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const { data } = await login(values);
                dispatch(loginSuccess(data))
                console.log(data);
                setUsername(data.username)
                navigate("/profile")
                toast("Вы успешно авторизовались");
            } catch (err) {
                console.log(err);
                toast(err.response.data);
            }
        },
    });
    const { login } = authServiceLogin();

    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>Логин {username}</h1>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <TextField
                    error={formik.errors.email}
                    helperText={formik.errors.email ? formik.errors.email : ""}
                    onBlur={formik.handleBlur}
                    label="Ваш Email"
                    variant="filled"
                    type="email"
                    name="email"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <TextField
                    label="Ваш пароль"
                    variant="filled"
                    type="password"
                    name="password"
                    error={formik.errors.password}
                    helperText={formik.errors.password ? formik.errors.password : ""}
                    onBlur={formik.handleBlur}
                    fullWidth
                    style={{ marginBottom: "40px" }}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    style={{ backgroundColor: "#BF94E8", fontSize: "24px" }}
                >
                    Логин
                </Button>
            </form>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </section>
    );
};

export default LoginPage;