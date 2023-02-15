import { lazy } from 'react';

export const MainPageLazy = lazy(
    () => new Promise((resolve) => setTimeout(
        () =>
        // @ts-ignore
            resolve(import('./MainPage')),
        1500,
    )),
);
