import { createGlobalStyle } from "styled-components";

interface IProps {
    theme: {
        body: string;
        fontColor: string;
    }
}

export const GlobalStyled = createGlobalStyle<IProps>`
    body{
        background-color: ${props => props.theme.body};
    }

    .header {
        color: ${props => props.theme.fontColor};
        a {
            color: ${props => props.theme.fontColor};
        }
    }

    .container {
        background-color: ${props => props.theme.body};
    }

    .main-page {
        background-color: ${props => props.theme.body};
    }
`