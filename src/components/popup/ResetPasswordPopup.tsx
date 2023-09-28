'use client'
import {FC} from "react";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import styles from "@/assets/styles/resetpopup.module.scss"
import {useModal} from "@/components/providers/ModalContext";
import AuthPopup from "@/components/popup/AuthPopup";

const ResetPasswordPopup: FC = () => {

    const { showModal } = useModal();

    const openModal = () => {
        showModal(<AuthPopup/>, "Авторизация");
    };

    return (
        <div className={styles.reset}>
            <p className={styles.desc}>Пожалуйста, введите свой адрес электронной почты. Вы получите ссылку для создания нового пароля по электронной почте.</p>
            <form>
                <Input placeholder="E-mail"/>
                <Button type="primary" text="Восстановить"/>
                <div className={styles.auth} onClick={openModal}>Вспоминили пароль? <span>Войти</span></div>
            </form>
        </div>

    )
}

export default ResetPasswordPopup
