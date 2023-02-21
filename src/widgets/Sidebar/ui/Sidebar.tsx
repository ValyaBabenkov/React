import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { Button } from 'shared/ui/Button/ui/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { AppRoutes, RoutePath } from 'shared/config/routerConfig/routerConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button data-testid="sidebar-toggle" onClick={onToggle}>{t('title')}</Button>
            <div className={cls.items}>
                <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t(AppRoutes.MAIN)}</span>
                </AppLink>

                <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t(AppRoutes.ABOUT)}</span>
                </AppLink>

            </div>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
