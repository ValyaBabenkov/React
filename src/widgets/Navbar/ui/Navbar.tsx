import { classNames } from 'shared/lib/classNames/className';
import css from './Navbar.module.scss';

interface NavbarProps {
	className?: string
}

function Navbar({ className }: NavbarProps) {
    return (
        <div className={classNames(css.navbar, {}, [className])} />
    );
}

export default Navbar;
