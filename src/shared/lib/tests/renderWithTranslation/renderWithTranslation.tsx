import { ReactNode } from 'react';
import i18n from 'shared/config/i18n/i18nForTest';
import { I18nextProvider } from 'react-i18next';

export function renderWithTranslation(component: ReactNode) {
    return (
        <I18nextProvider i18n={i18n}>
            {component}
        </I18nextProvider>
    );
}
