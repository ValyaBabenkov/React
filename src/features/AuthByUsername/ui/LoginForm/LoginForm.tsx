import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Text, TextTheme } from 'shared/ui/Text/ui/Text';
import { Input } from 'shared/ui/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginsActions, loginsReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginsReducer,
};
const LoginForm = memo(({ className } : LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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
        <DynamicModuleLoader
            reducers={initialReducers}
        >
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
        </DynamicModuleLoader>
    );
});
export default LoginForm;
