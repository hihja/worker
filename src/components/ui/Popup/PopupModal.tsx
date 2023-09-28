import {useEffect, useState} from "react";
import styles from "@/assets/styles/ui/popup.module.scss";

type ModalProps = {
    isOpen: boolean;
    title?: string;
    onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

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

export default Modal;
