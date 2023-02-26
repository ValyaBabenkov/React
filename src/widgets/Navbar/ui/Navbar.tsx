import { classNames } from 'shared/lib/classNames/className';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string
}

function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onClose = useCallback(() => {
        setIsAuthModal((prev) => false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal((prev) => true);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t('Sing_in')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <LoginModal isOpen={isAuthModal} onClose={onClose} />
        </div>
    );
}

export default Navbar;
