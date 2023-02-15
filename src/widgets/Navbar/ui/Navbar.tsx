import { classNames } from 'shared/lib/classNames/className';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import css from './Navbar.module.scss';

interface NavbarProps {
	className?: string
}

function Navbar({ className }: NavbarProps) {
    return (
        <div className={classNames(css.navbar, {}, [className])}>
            <div className={css.links}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">
                    Главная
                </AppLink>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <AppLink theme={AppLinkTheme.PRIMARY} to="/about">
                    О компании
                </AppLink>
            </div>
        </div>
    );
}

export default Navbar;
