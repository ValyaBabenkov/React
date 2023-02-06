import { classNames } from 'shared/lib/classNames/className'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import css from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

function Navbar({ className }: NavbarProps) {
	return (
		<div className={classNames(css.navbar, {}, [className])}>
			<div className={css.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
					{'Главная'}
				</AppLink>
				<AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>
					{'О компании'}
				</AppLink>
			</div>
		</div>
	)
}

export default Navbar
