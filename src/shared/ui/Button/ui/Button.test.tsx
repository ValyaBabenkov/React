import { Button, ThemeButton } from 'shared/ui/Button/ui/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('with only first param', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('with clear param', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
