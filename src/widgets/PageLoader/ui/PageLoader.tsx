import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import { Loader } from 'shared/ui/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}
const PageLoader:FC<PageLoaderProps> = ({ className }, children) => {
    const { t } = useTranslation();
    return (
        <div
            className={classNames(cls.PageLoader, {}, [
                className,
            ])}
        >
            <Loader />
        </div>
    );
};
export default PageLoader;
