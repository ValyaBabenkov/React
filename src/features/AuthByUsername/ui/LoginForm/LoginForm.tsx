import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Text, TextTheme } from 'shared/ui/Text/ui/Text';
import { Input } from 'shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginByUsername } from '../../model/services/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginsActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}
const LoginForm = memo(({ className } : LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginsActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginsActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div
            className={classNames(cls.LoginForm, {}, [
                className,
            ])}
        >
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                autofocus
                placeholder={t('Login')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                placeholder={t('Password')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                disabled={isLoading}
                onClick={onLoginClick}
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
            >
                {t('Sing_in')}
            </Button>
        </div>
    );
});
export default LoginForm;
