'use client'
import {CSSProperties, FC, useState} from "react";

import logo from '../assets/images/logo.svg'
import Image from "next/image";
import Link from "next/link";

import styles from '../assets/styles/header.module.scss'
import AuthPopup from "@/components/popup/AuthPopup";
import {useModal} from "@/components/providers/ModalContext";


const Header: FC = () => {
    const { showModal } = useModal();
    const [isOpen, setOpen] = useState(false);

    const openModal = () => {
        showModal(<AuthPopup/>, "Авторизация");
    };

    const burgerFirstLine: CSSProperties = {
        transform: isOpen ? "rotate(-45deg)" : "none",
        transition: "transform 0.3s",
    };

    const burgerLastLine: CSSProperties = {
        transform: isOpen ? "rotate(45deg) translate(-7px, -7px)" : "none",
        width: isOpen ? "25px" : "15px",
        transition: "transform 0.3s, width 0.3s",
    };

    return (
            <header className={styles.header}>
                <div className={styles.header__container}>
                    <Link className={styles.logo} href={'/'}>
                        <Image src={logo} height="42" alt=""/>
                    </Link>

                    <div className={styles.group}>
                        <div className={styles.menu}>
                            <nav className={styles.navigation}>
                                <ul className={styles.navigation__menu}>
                                    <li><Link href={'/job-posting'} className={styles.item}>Разместить вакансию</Link></li>
                                    <li><Link href={'/about-us'} className={styles.item}>О сервисе</Link></li>
                                    <li><Link href={'/'} className={styles.item}>Тарифы</Link></li>
                                </ul>
                            </nav>

                            <ul className={styles.auth}>
                                <li className={styles.auth__item}>
                                    <button className={styles.auth__item} onClick={openModal} style={{marginTop: "-2px"}}>Войти</button>
                                </li>

                                <li className={styles.auth__item}>
                                    <Link href={'/registration'} className={styles.auth__item}>Регистрация</Link>
                                </li>
                            </ul>
                        </div>
                        <button className={styles.burger} onClick={() => setOpen(!isOpen)}>
                            <span style={burgerFirstLine}></span>
                            <span style={burgerLastLine}></span>
                        </button>
                    </div>
                </div>
                {
                    isOpen && (
                        <div className={styles.burger__menu}>
                            <ul className={styles.navigation__burger}>
                                <li><Link href={'/job-posting'} className={styles.burger__item} onClick={() => setOpen(!isOpen)}>Разместить вакансию</Link></li>
                                <li><Link href={'/about-us'} className={styles.burger__item} onClick={() => setOpen(!isOpen)}>О сервисе</Link></li>
                                <li><Link href={'/'} className={styles.burger__item} onClick={() => setOpen(!isOpen)}>Тарифы</Link></li>
                            </ul>
                        </div>
                    )
                }
            </header>
    )
}

export default Header