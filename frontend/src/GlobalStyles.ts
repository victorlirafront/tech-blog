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
      profileBorder: string;
      profileBoxShadow: string;
      headerBackground: string;
      headerColor: string
   }
}

export const GlobalStyled = createGlobalStyle<IProps>`
    body{
        background-color: ${props => props.theme.body};
    }

    .header {
        background-color: ${props => props.theme.headerBackground};

        .container {
            margin: 0 auto;
            max-width: 1200px;

            nav {
                background-color: ${props => props.theme.headerBackground};
                color: ${props => props.theme.headerColor};

                .menu-wrapper {
                    background-color: ${props => props.theme.headerBackground};
                }
            }
        }

        color: ${props => props.theme.fontColor};
        a {
            color: ${props => props.theme.headerColor};
        }

        .category-options {
            background-color: ${props => props.theme.headerBackground};
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

    .profile {
        background-color: ${props => props.theme.cardBody};
        color: ${props => props.theme.cardColor};
        border: ${props => props.theme.profileBorder};
        box-shadow: ${props => props.theme.profileBoxShadow};

        .profile-h1 {
            color: ${props => props.theme.cardColor};
        }

        .profession {
            color: ${props => props.theme.cardColor};
        }

        .about-wrapper {
            .text-1 {
                color: ${props => props.theme.profileSecudaryColor};
            }
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