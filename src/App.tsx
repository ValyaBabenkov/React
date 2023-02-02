import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { AboutPageLazy } from './page/AboutPage'
import { MainPageLazy } from './page/MainPage'
import { useTheme } from './theme/useTheme'

export default function App() {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>{'toggle'}</button>
			<Link to={'/'}>{'Главная'}</Link>
			<Link to={'/about'}>{'О проекте'}</Link>
			<Suspense fallback={<div>Загрузка...</div>}>
				<Routes>
					<Route path={'/'} element={<MainPageLazy />} />
					<Route path={'/about'} element={<AboutPageLazy />} />
				</Routes>
			</Suspense>
		</div>
	)
}
