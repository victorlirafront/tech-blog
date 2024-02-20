import { createGlobalStyle } from "styled-components";

interface IProps {
  theme: {
    body: string;
    fontColor: string;
    cardBody: string;
    cardBorder: string;
    cardColor: string;
    cardBoxShadow: string;
    cardBorderRadius: string;
    cardSecudaryColor: string;
    aboutBackground: string;
    footerBackground: string;
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

        .category-options {
          background: ${props => props.theme.body}
        }
    }

    .container {
        background-color: ${props => props.theme.body};
        .post-body{
            background-color: ${props => props.theme.cardBody};
            color: ${props => props.theme.cardColor};

            .post-category {
                color: ${props => props.theme.cardSecudaryColor};
            }

            .read-more-wrapper {
                p{
                    color: ${props => props.theme.cardSecudaryColor};
                }
            }
        }

        .motion-box {
            border: ${props => props.theme.cardBorder};
            border-radius:${props => props.theme.cardBorderRadius};
            box-shadow: ${props => props.theme.cardBoxShadow};
        }
    }

    .main-page {
        background-color: ${props => props.theme.body};
    }

    .area {
        background-color:  ${props => props.theme.aboutBackground};
    }

    .pagination {
        p{
            color: ${props => props.theme.fontColor};
        }
    }

    footer {
        background:  ${props => props.theme.aboutBackground};
    }
`