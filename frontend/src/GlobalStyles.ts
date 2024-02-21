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
        headerColor: string;
        headerDropdownMenu: string
        profileCardImage: string;
        profileSecudaryColor: string;
        profileBorderCardImage: string;
        profileBoxShadowCardImage: string;
        profileDownloadResumeButton: string;
        profileDownloadBackground: string;
        profileDownloadResumeBoxShadow: string;
        profileDownloadColor: string;
        techSliderText: string;
        techSliderDots: string;
        techSliderDotActive: string
        countryBoxShadow: string;
        bodyPostColor: string;
        bodyPostWriterBorderColor: string;
        bodyPostMainWriterBorderColor: string;
        bodyPostImageBackground: string;
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
            background-color: ${props => props.theme.headerDropdownMenu};
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
        border-radius: 7px;

            .profile-h1 {
                color: ${props => props.theme.cardColor};
            }

            .profession {
                color: ${props => props.theme.cardColor};
            }

            .description {
                color: ${props => props.theme.cardColor};
            }

            .about-wrapper {
                .text-1 {
                    color: ${props => props.theme.profileSecudaryColor};
                }
            }

            .card-image {
                border: ${props => props.theme.profileBorderCardImage};
                box-shadow: ${props => props.theme.profileBoxShadowCardImage};
            }

            .button-wrapper {
                .usa-box  {
                    box-shadow: ${props => props.theme.countryBoxShadow};
                }

                .br-box  {
                    box-shadow: ${props => props.theme.countryBoxShadow};
                }

                .download-wrapper {
                    border: ${props => props.theme.profileDownloadResumeButton};
                    background: ${props => props.theme.profileDownloadBackground};
                    box-shadow: ${props => props.theme.profileDownloadResumeBoxShadow};

                    .download-btn {
                        color: ${props => props.theme.profileDownloadColor};
                    }
                }
            }
        //slider
        .about-wrapper {

            .text {
                color: ${props => props.theme.techSliderText};
            }

            .slick-dots {
                li {
                    button {
                        &::after {
                            color: ${props => props.theme.techSliderDots};
                        }
                    }
                    &.slick-active {
                        &::after {
                            /* color: #0beeb2; */
                            color:${props => props.theme.techSliderDotActive};
                        }
            }
                }
            }
        }
    }

    .body-post {
        color: ${props => props.theme.cardColor};

        .title {
            color: ${props => props.theme.bodyPostColor};
        }

        .date {
            color: ${props => props.theme.cardSecudaryColor};
        }

        img {
            background: ${props => props.theme.bodyPostImageBackground};
        }
    }

    h1.title {
        color: ${props => props.theme.cardColor};
    }

    .writter {
        border-color: ${props => props.theme.bodyPostWriterBorderColor};
        .author {
            border:1px solid ${props => props.theme.bodyPostMainWriterBorderColor};
        }

        .name-container {
            color: ${props => props.theme.cardColor};
        }
    }

    .last-posts {
            .motion-box {
                background-color: ${props => props.theme.cardBody};
                color: ${props => props.theme.cardColor};
                box-shadow: ${props => props.theme.cardBoxShadow};

                .post-category {
                    color: ${props => props.theme.cardSecudaryColor};
                }

                .read-more-wrapper {
                    color: ${props => props.theme.cardSecudaryColor};
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