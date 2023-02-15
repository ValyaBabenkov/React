import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';

export default function AppRouter() {
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Suspense fallback={<div>...Loading</div>}>
            <div className="page-wrapped">
                <Routes>
                    {Object.values(routeConfig).map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </div>
        </Suspense>
    );
}
