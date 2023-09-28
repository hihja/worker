import {FC, useEffect, useState} from "react";
import styles from "@/assets/styles/ui/popup.module.scss";

interface IPopupProps {
    isOpen: boolean;
    onClose: () => void;
    title: string
}

const Popup: FC<IPopupProps> = ({ isOpen, onClose, title, children }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
        }
    }, [isOpen]);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            setIsAnimating(false);
            onClose();
        }
    };

    return (
        <div className={`${styles.popup__overlay} ${isAnimating ? styles.active__overlay : ""}`} onClick={handleOverlayClick}>
            <div className={`${styles.popup} ${isAnimating ? styles.active : ""}`}>
                <div className={styles.popup__container}>
                    <p className={styles.popup__title}>
                        {title}
                    </p>
                    <div className={styles.popup__content}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
