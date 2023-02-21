import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('with only first param', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('with clear param', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
