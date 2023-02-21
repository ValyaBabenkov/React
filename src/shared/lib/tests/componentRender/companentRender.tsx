import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTest';
import { MemoryRouter } from 'react-router-dom';

export interface componentRouterOptionsProps {
    router?: string
}
export function componentRouter(component: ReactNode, options: componentRouterOptionsProps = {}) {
    const { router = '/' } = options;
    return render(
        <MemoryRouter initialEntries={[router]}>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}
