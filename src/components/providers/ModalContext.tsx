'use client'
import { createContext, useContext, ReactNode, useState } from "react";
import Modal from "@/components/ui/Popup/PopupModal";


type ModalContextType = {
    showModal: (content: ReactNode, title?: string) => void;
    hideModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);
    const [modalTitle, setModalTitle] = useState<string | undefined>(undefined);

    const showModal = (content: ReactNode, title?: string) => {
        setModalContent(content);
        setModalTitle(title);
    };

    const hideModal = () => {
        setModalContent(null);
        setModalTitle(undefined);
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
