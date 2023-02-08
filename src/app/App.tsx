import 'app/styles/index.scss'
import { classNames } from 'shared/lib/classNames/className'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/routes'
import { Navbar } from 'widgets/Navbar'

export default function App() {
	const { theme } = useTheme()

	return (
		<div
			className={classNames('app', { hovered: false, selected: true }, [theme])}
		>
			<Navbar />
			<AppRouter />
		</div>
	)
}
