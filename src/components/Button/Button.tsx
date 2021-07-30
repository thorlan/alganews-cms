import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import * as B from './Button.styles';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant: 'danger' | 'text' | 'primary' | 'removerImagem'
    label: string
}

export default function Button({ variant, label,ref, ...props }: ButtonProps) {
    return (
        <B.Wrapper
            variant={variant}
            {...props}
        >
            {label} {props.children && <span>{props.children}</span>}
        </B.Wrapper>
    )

}