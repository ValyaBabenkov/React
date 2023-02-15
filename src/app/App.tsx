import 'app/styles/index.scss';
import { classNames } from 'shared/lib/classNames/className';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/routes';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import 'shared/config/i18n/i18n';
import { Suspense } from 'react';

export default function App() {
    const { theme } = useTheme();

    return (
        <div
            className={classNames('app', {}, [theme])}
        >
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
