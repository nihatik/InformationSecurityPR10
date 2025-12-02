"use client"

import CustomModal from "../../common/modal"
import RegistrationForm from "@/app/forms/registration.form";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegistrationModal = ({ isOpen, onClose }: IProps) => {
    return (
        <CustomModal isOpen={isOpen} onClose={onClose} title="Регистрация">
            <RegistrationForm onClose={onClose} />
        </CustomModal>
    );
};

export default RegistrationModal;