import styled from "styled-components";
import { transparentize } from 'polished';

const COLORS = {
    red: '#F84735',
    primary: '#0099FF',
    foreground: '#274060',
}

const THEME = {
    danger: {
        bg: '#F84735',
        color: '#FFFF',
        onHover: `
            box-shadow: 0 3px 6px rgba(0,0,.2);
        `,
        disabled: {
            color: COLORS.red,
            bg: transparentize(0.75, COLORS.red)
        },
    },

    removerImagem: {
        bg: '#FFFFFF',
        color: '#274060',
        fontSize: '18px',
        lineHeight: '21,6px',
        padding: '16px',
        onHover: `
            box-shadow: 0 3px 6px rgba(0,0,.2);
        `,
        disabled: {
            color: '#FFFF',
            bg: transparentize(0.44, COLORS.primary)
        },
    },


    primary: {
        bg: '#0099FF',
        color: '#FFFF',
        onHover: `
            box-shadow: 0 3px 6px rgba(0,0,.2);
        `,
        disabled: {
            color: '#FFFF',
            bg: transparentize(0.44, COLORS.primary)
        },
    },

    text: {
        bg: 'transparent',
        color: '#274060',
        onHover: `
            border-color: #274060;
        `,
        disabled: {
            color: COLORS.foreground,
            bg: transparentize(0.44, '#508ac9')
        },
    }
}

export const Wrapper = styled.button<{
    variant: 'danger' | 'primary' | 'text' | 'removerImagem'
}>`
    
    border: 1px solid ${p=> THEME[p.variant].bg};
    color:${p => THEME[p.variant].color};
    background-color:${p => THEME[p.variant].bg};

    font-size:${p => p.variant === "removerImagem" ? THEME[p.variant].fontSize : null};
    line-height: ${p => p.variant === "removerImagem" ? THEME[p.variant].lineHeight : null};
    padding: ${p => p.variant === "removerImagem" ? THEME[p.variant].padding : '6px 8px 4px'};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: ${p => p.variant === "removerImagem" ? '"Lato", sans-serif' : null} ;
    font-weight: ${p => p.variant === "removerImagem" ? '600' : null} ;

    span{
        padding-left: 12px;
        margin-top: -1px;
    }

    &:hover,
    &:focus {
        ${p=> THEME[p.variant].onHover};
    }

    &:disabled {
        background-color: ${p => THEME[p.variant].disabled.bg};
        color: ${p => THEME[p.variant].disabled.color};
        pointer-events: none;
        border-color: transparent;
        opacity: 0.5;
    }
`;