'use client'
import {FC, useState} from "react";
import Input from "@/components/ui/Input/Input";
import styles from "@/assets/styles/ui/form.module.scss";
import Button from "@/components/ui/Button/Button";
import {useModal} from "@/components/providers/ModalContext";
import ResetPasswordPopup from "@/components/popup/ResetPasswordPopup";
import Link from "next/link";

const AuthPopup: FC = () => {

    const { showModal } = useModal();

    const openModal = () => {
        showModal(<ResetPasswordPopup/>, "Восстановление пароля");
    };

    return (
                <form className={styles.form__container}>
                    <div className={styles.auth__input}>
                        <Input placeholder="Логин"/>
                        <Input placeholder="Пароль"/>
                    </div>
                    <div className={styles.auth__remember}>
                        <p>Запомнить меня</p>
                        <p onClick={openModal} className={styles.auth__reset}>Забыли пароль?</p>
                    </div>
                    <div className={styles.auth__button}>
                        <Button type="primary" text="Войти"/>
                    </div>
                    <div className={styles.auth__register}>
                        <p>Нет аккаунта?</p>
                        <p className={styles.register}>Зарегистрироваться</p>
                    </div>
                </form>
    );
};

export default AuthPopup;
