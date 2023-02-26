import {
    ChangeEvent,
    FC, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/className';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string
    onChange?: (value:string) => void
    autofocus?: boolean
}
const Input:FC<InputProps> = memo((props: InputProps) => {
    const {
        className, value, onChange, type = 'text', autofocus, ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [_, setIsFocused] = useState(false);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);
    return (
        <div
            className={classNames('', {}, [
                className,
            ])}
        >
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                onFocus={onFocus}
                {...otherProps}
            />
        </div>
    );
});

export default Input;
