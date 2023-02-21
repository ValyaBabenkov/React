import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/className';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

interface LangSwitcherProps {
	className?: string;
    short?: boolean
}
export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const toggleLanguage = () => {
        i18n.changeLanguage(currentLanguage === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleLanguage}
            className={classNames('', {}, [className])}
        >
            {t(short ? 'Short_Language' : 'Language')}
        </Button>
    );
};
