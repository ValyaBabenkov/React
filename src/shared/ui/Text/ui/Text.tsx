import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import cls from './Text.module.scss';

export enum TextTheme {
	PRIMARY = 'primary',
    ERROR = 'error',

}
interface TextProps {
    title?: string;
    text?: string;
	className?: string
	theme?: TextTheme
}

export const Text: FC<TextProps> = (props) => {
    const {
        className,
        theme = TextTheme.PRIMARY,
        title,
        text,
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
    };
    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <span className={cls.title}>{title}</span>}
            {text && <span className={cls.text}>{text}</span>}
        </div>
    );
};
