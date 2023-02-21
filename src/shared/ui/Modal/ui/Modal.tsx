import React, {
    FC, ReactNode, useState, useRef, useEffect, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: ()=>void
}

const ANIMATION_DELAY = 400;
const Modal:FC<ModalProps> = ({
    className, children,
    isOpen, onClose,
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        [cls.theme]: true,
    };
    return (
        <Portal>
            <div
                className={classNames(cls.Modal, mods, [
                    className,
                ])}
            >
                <div onClick={closeHandler} className={cls.overlay}>
                    <div className={cls.content} onClick={onContentClick}>
                        { children }
                    </div>
                </div>
            </div>
        </Portal>
    );
};
export default Modal;
