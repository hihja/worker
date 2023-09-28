'use client'
import {FC, useState} from "react";
import styles from "@/assets/styles/registration.module.scss"
import Input from "@/components/ui/Input/Input";
import Select from "@/components/ui/Select/Select";
import Textarea from "@/components/ui/Textarea/Textarea";
import Button from "@/components/ui/Button/Button";

const Registration: FC = () => {
    const [regType, setRegType] = useState(1);
    const [selectedMethod, setSelectedMethod] = useState(1);

    const handleClick = (id) => {
        setSelectedMethod(id);
    }

    return (
        <div className={styles.registration}>
            <div className={styles.registration__content}>
                <div className={styles.registration__title}>
                    <div className={styles.title}>
                        Регистрация
                    </div>
                    <div className={styles.registration__method}>
                        <div
                            className={`${styles.method} ${
                                selectedMethod === 1 ? styles.selected : ""
                            }`}
                            onClick={() => handleClick(1)}
                        >
                            ИП
                        </div>
                        <div
                            className={`${styles.method} ${
                                selectedMethod === 2 ? styles.selected : ""
                            }`}
                            onClick={() => handleClick(2)}
                        >
                            Организация
                        </div>
                        <div
                            className={`${styles.method} ${
                                selectedMethod === 3 ? styles.selected : ""
                            }`}
                            onClick={() => handleClick(3)}
                        >
                            Физическое лицо
                        </div>
                    </div>
                </div>
                <div className={styles.registration__form}>
                    {
                        selectedMethod === 1 && (
                            <form className={styles.form}>
                                <Input placeholder="" label="Наименование"/>
                                <Input placeholder="" label="Юридический адрес"/>
                                <Input placeholder="" label="Фактический адрес"/>
                                <div className={styles.group}>
                                    <Input placeholder="" label="ИНН"/>
                                    <Input placeholder="" label="ОГРНИП"/>
                                </div>
                                <div className={styles.group}>
                                    <Input placeholder="" label="Номер телефона"/>
                                    <Input placeholder="" label="E-mail"/>
                                </div>

                                <div className={styles.buttons}>
                                    <Button type="primary" text="Регистрация"/>
                                    <Button type="secondary" text="Отмена"/>
                                </div>
                            </form>
                        )
                    }

                    {
                        selectedMethod === 2 && (
                            <form className={styles.form}>
                                <Input placeholder="" label="Наименование"/>
                                <Input placeholder="" label="Юридический адрес"/>
                                <Input placeholder="" label="Фактический адрес"/>
                                <div className={styles.group}>
                                    <Input placeholder="" label="ИНН"/>
                                    <Input placeholder="" label="КПП"/>
                                    <Input placeholder="" label="ОГРН"/>
                                </div>
                                <div className={styles.group}>
                                    <Input placeholder="" label="Номер телефона"/>
                                    <Input placeholder="" label="E-mail"/>
                                </div>

                                <div className={styles.buttons}>
                                    <Button type="primary" text="Регистрация"/>
                                    <Button type="secondary" text="Отмена"/>
                                </div>
                            </form>
                        )
                    }

                    {
                        selectedMethod === 3 && (
                            <form className={styles.form}>
                                <Input placeholder="" label="ФИО"/>
                                <div className={styles.group}>
                                    <Input placeholder="" label="Серия и номер паспорта"/>
                                    <Input placeholder="" label="Кем выдан"/>
                                </div>
                                <Input placeholder="" label="Адрес по прописке"/>

                                <div className={styles.group}>
                                    <Input placeholder="" label="Номер телефона"/>
                                    <Input placeholder="" label="E-mail"/>
                                </div>

                                <div className={styles.buttons}>
                                    <Button type="primary" text="Регистрация"/>
                                    <Button type="secondary" text="Отмена"/>
                                </div>
                            </form>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Registration