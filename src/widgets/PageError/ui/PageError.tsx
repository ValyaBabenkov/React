import { classNames } from 'shared/lib/classNames/className';
import { Button } from 'shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}
const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();
    // eslint-disable-next-line no-restricted-globals
    const onRefresh = () => location.reload();
    return (
        <div
            className={classNames(cls.PageError, {}, [
                className,
            ])}
        >
            <p>{t('RefreshPageTitle')}</p>
            <Button onClick={onRefresh}>{t('Refresh_page')}</Button>
        </div>
    );
};
export default PageError;
