import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import { Button } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}
const LoginForm:FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div
            className={classNames(cls.LoginForm, {}, [
                className,
            ])}
        >
            <Input autofocus placeholder={t('Login')} />
            <Input placeholder={t('Password')} />
            <Button className={cls.loginBtn}>{t('Sing_in')}</Button>
        </div>
    );
};
export default LoginForm;
