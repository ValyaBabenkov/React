import { createContext } from 'react'

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}

export interface ThemeContentProps {
	theme?: Theme
	setTheme?: (theme: Theme) => void
}
export const ThemeContent = createContext<ThemeContentProps>({})
// const toggleTheme = () => {
// 	setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
// }
export const LOCAL_STORAGE_THEME_KEY = 'theme'
