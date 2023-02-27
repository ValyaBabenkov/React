import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { Modal } from 'shared/ui/Modal';
import { Loader } from 'shared/ui/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: ()=>void

}
export const LoginModal:FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        className={classNames('', {}, [
            className,
        ])}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync />
        </Suspense>
    </Modal>
);
