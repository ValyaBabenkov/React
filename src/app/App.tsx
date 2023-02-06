import { Link } from 'react-router-dom'
import 'app/styles/index.scss'
import { classNames } from 'shared/lib/classNames/className'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/routes'

export default function App() {
	const { theme, toggleTheme } = useTheme()

	return (
		<div
			className={classNames('app', { hovered: false, selected: true }, [theme])}
		>
			<button onClick={toggleTheme}>{'toggle'}</button>
			<Link to={'/'}>{'Главная'}</Link>
			<Link to={'/about'}>{'О проекте'}</Link>
			<AppRouter />
		</div>
	)
}
