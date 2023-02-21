import { classNames } from 'shared/lib/classNames/className';
import { Modal } from 'shared/ui/Modal';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string
}

function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={() => setIsAuthModal(true)}
            >
                {t('Sing_in')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                asdasdasdasdasdasd
            </Modal>
        </div>
    );
}

export default Navbar;
