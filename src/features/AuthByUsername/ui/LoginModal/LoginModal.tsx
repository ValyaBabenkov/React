import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { Modal } from 'shared/ui/Modal';
import LoginForm from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: ()=>void

}
const LoginModal:FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        className={classNames('', {}, [
            className,
        ])}
        lazy
    >
        <LoginForm />
    </Modal>
);
export default LoginModal;
