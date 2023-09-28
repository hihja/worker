'use client'
import { createContext, useContext, ReactNode, useState } from "react";
import Modal from "@/components/ui/Popup/PopupModal";

type ModalContextType = {
    showModal: (content: React.ReactNode, авторизация: string) => void;
    hideModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

// В ModalProvider.tsx
type ModalContextType = {
    showModal: (content: ReactNode, title?: string) => void; // Добавьте title в параметры
    hideModal: () => void;
};

export const ModalProvider: React.FC = ({ children }) => {
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);
    const [modalTitle, setModalTitle] = useState<string | null>(null); // Добавьте состояние для title

    const showModal = (content: ReactNode, title?: string) => {
        setModalContent(content);
        setModalTitle(title); // Установите переданный title
    };

    const hideModal = () => {
        setModalContent(null);
        setModalTitle(null); // Сбросьте title при скрытии модального окна
    };

    return (
        <ModalContext.Provider value={{ showModal, hideModal }}>
            {children}
            {modalContent && <Modal isOpen={true} onClose={hideModal} title={modalTitle}>{modalContent}</Modal>}
        </ModalContext.Provider>
    );
};
export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};
