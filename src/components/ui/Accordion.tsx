'use client'
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from '@/assets/styles/ui/accordion.module.scss';
import {IoIosArrowDown} from "react-icons/io";

interface AccordionItemProps {
    title: string;
    content: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const arrowStyle = {
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
        fill: isOpen ? '#069488' : '#000'
    };

    const contentStyle = {
        maxHeight: isOpen ? '300px' : '0',
        opacity: isOpen ? 1 : 0,
        transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out',
    };

    const buttonStyle = {
        background: isOpen ? '#eaeefb' : '#fff',
        color: isOpen ? '#00B2A4' : '#212529',
        transition: 'all 0.3s ease-in-out',
    }

    return (
        <div className={styles.accordionItem}>
                <button className={styles.accordionButton} onClick={toggleAccordion} style={buttonStyle}>
                    <span>{title}</span>
                    <IoIosArrowDown size={15} style={arrowStyle}/>
                </button>
                <div className={styles.accordionContent} style={contentStyle}>
                    <span>{content}</span>
                </div>
        </div>
    );
};

export default AccordionItem;
