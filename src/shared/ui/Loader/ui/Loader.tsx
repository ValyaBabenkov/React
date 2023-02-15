import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}
const Loader:FC<LoaderProps> = ({ className }, children) => {
    const { t } = useTranslation();
    return (
        <div
            className={classNames('page__loader', {}, [
                className,
            ])}
        >
            <div className="lds-ellipsis">
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
};
export default Loader;
