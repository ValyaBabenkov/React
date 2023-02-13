import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/className'
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
	className?: string
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation()
	const currentLanguage = i18n.language

	const toggleLanguage = () => {
		i18n.changeLanguage(currentLanguage === 'ru' ? 'en' : 'ru')
	}

	return (
		<Button
			theme={ThemeButton.CLEAR}
			onClick={toggleLanguage}
			className={classNames(cls.LangSwitcher, {}, [className])}
		>
			{t('Language')}
		</Button>
	)
}
