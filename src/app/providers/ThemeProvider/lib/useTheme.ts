import { useContext } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContent,
} from '../ui/ThemeContext';

interface useThemeResult {
	theme: Theme
	toggleTheme: () => void
}

export const useTheme = (): useThemeResult => {
    const { theme, setTheme } = useContext(ThemeContent);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { theme, toggleTheme };
};
