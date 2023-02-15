import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import css from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}
const NotFoundPage:FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div
            className={classNames(css.NotFoundPage, {}, [
                className,
            ])}
        >
            {t('PageNotFound')}
        </div>
    );
};
export default NotFoundPage;
