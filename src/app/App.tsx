import React, { Suspense, useState } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { AppRouter } from 'app/providers/routes';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import 'shared/config/i18n/i18n';

export default function App() {
    return (
        <div
            className={classNames('app', {}, [])}
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
