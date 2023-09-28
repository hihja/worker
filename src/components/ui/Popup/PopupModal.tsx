import {useEffect, useState} from "react";
import styles from "@/assets/styles/ui/popup.module.scss";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode; // Убедитесь, что это свойство присутствует
};


const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) {
            setIsAnimating(false);
        }
    }, [isOpen]);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

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

export default Modal;
