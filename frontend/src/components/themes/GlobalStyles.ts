import { createGlobalStyle } from 'styled-components';

interface IProps {
  theme: {
    fontColor: string;
    aboutBackground: string;
    footerBackground: string;
    countryBoxShadow: string;

    techSlider: {
      techSliderText: string;
      techSliderDots: string;
      techSliderDotActive: string;
    };

    card: {
      cardBody: string;
      cardBorder: string;
      cardColor: string;
      cardBoxShadow: string;
      cardBorderRadius: string;
      cardSecudaryColor: string;
    };

    header: {
      headerBackground: string;
      headerColor: string;
      headerDropdownMenu: string;
    };

    profile: {
      profileCardImage: string;
      profileSecudaryColor: string;
      profileBorderCardImage: string;
      profileBoxShadowCardImage: string;
      profileDownloadResumeButton: string;
      profileDownloadBackground: string;
      profileDownloadResumeBoxShadow: string;
      profileDownloadColor: string;
      profileBorder: string;
      profileBoxShadow: string;
    };

    bodyTheme: {
      body: string;
      bodyPostColor: string;
      bodyPostWriterBorderColor: string;
      bodyPostMainWriterBorderColor: string;
      bodyPostImageBackground: string;
    };
  };
}

export const GlobalStyled = createGlobalStyle<IProps>`
    body{
        background-color: ${props => props.theme.bodyTheme.body};
    }

    .header {
        background-color: ${props => props.theme.header.headerBackground};

        .container {
            margin: 0 auto;
            max-width: 1200px;

            nav {
                background-color: ${props => props.theme.header.headerBackground};
                color: ${props => props.theme.header.headerColor};

                .menu-wrapper {
                    background-color: ${props => props.theme.header.headerBackground};
                }
            }
        }

        color: ${props => props.theme.fontColor};
        a {
            color: ${props => props.theme.header.headerColor};
        }

        .category-options {
            background-color: ${props => props.theme.header.headerDropdownMenu};
        }
    }

    .container {
        background-color: ${props => props.theme.bodyTheme.body};
        .post-body{
            background-color: ${props => props.theme.card.cardBody};
            color: ${props => props.theme.card.cardColor};

            .post-category {
                color: ${props => props.theme.card.cardSecudaryColor};
            }

            .read-more-wrapper {
                p{
                    color: ${props => props.theme.card.cardSecudaryColor};
                }
            }
        }

        .motion-box {
            border: ${props => props.theme.card.cardBorder};
            border-radius:${props => props.theme.card.cardBorderRadius};
            box-shadow: ${props => props.theme.card.cardBoxShadow};
        }
    }


    .profile {
        background-color: ${props => props.theme.card.cardBody};
        color: ${props => props.theme.card.cardColor};
        border: ${props => props.theme.profile.profileBorder};
        box-shadow: ${props => props.theme.profile.profileBoxShadow};
        border-radius: 7px;

            .profile-h1 {
                color: ${props => props.theme.card.cardColor};
            }

            .profession {
                color: ${props => props.theme.card.cardColor};
            }

            .description {
                color: ${props => props.theme.card.cardColor};
            }

            .tip {
                color: ${props => props.theme.card.cardColor};
                .span-click {
                    color: ${props => props.theme.profile.profileSecudaryColor};
                }
            }

            .about-wrapper {
                .text-1 {
                    color: ${props => props.theme.profile.profileSecudaryColor};
                }
            }

            .card-image {
                /* border: ${props => props.theme.profile.profileBorderCardImage};
                box-shadow: ${props => props.theme.profile.profileBoxShadowCardImage}; */
            }

            .button-wrapper {
                .usa-box  {
                    box-shadow: ${props => props.theme.countryBoxShadow};
                }

                .br-box  {
                    box-shadow: ${props => props.theme.countryBoxShadow};
                }

                .download-wrapper {
                    border: ${props => props.theme.profile.profileDownloadResumeButton};
                    background: ${props => props.theme.profile.profileDownloadBackground};
                    box-shadow: ${props => props.theme.profile.profileDownloadResumeBoxShadow};

                    .download-btn {
                        color: ${props => props.theme.profile.profileDownloadColor};
                    }
                }
            }
        //slider
        .about-wrapper {

            .text {
                color: ${props => props.theme.techSlider.techSliderText};
            }

            .slick-dots {
                li {
                    button {
                        &::after {
                            color: ${props => props.theme.techSlider.techSliderDots};
                        }
                    }
                    &.slick-active {
                        &::after {
                            /* color: #0beeb2; */
                            color:${props => props.theme.techSlider.techSliderDotActive};
                        }
            }
                }
            }
        }
    }

    .body-post {
        color: ${props => props.theme.card.cardColor};

        .title {
            color: ${props => props.theme.bodyTheme.bodyPostColor};
        }

        .date {
            color: ${props => props.theme.card.cardSecudaryColor};
        }

        img {
            background: ${props => props.theme.bodyTheme.bodyPostImageBackground};
        }
    }

    h1.title {
        color: ${props => props.theme.card.cardColor};
    }

    .writter {
        border-color: ${props => props.theme.bodyTheme.bodyPostWriterBorderColor};
        .author {
            border:1px solid ${props => props.theme.bodyTheme.bodyPostMainWriterBorderColor};
        }

        .name-container {
            color: ${props => props.theme.card.cardColor};
        }
    }

    .last-posts {
            .motion-box {
                background-color: ${props => props.theme.card.cardBody};
                color: ${props => props.theme.card.cardColor};
                box-shadow: ${props => props.theme.card.cardBoxShadow};

                .post-category {
                    color: ${props => props.theme.card.cardSecudaryColor};
                }

                .read-more-wrapper {
                    color: ${props => props.theme.card.cardSecudaryColor};
                }
            }
    }

    .main-page {
        background-color: ${props => props.theme.bodyTheme.body};
    }

    .area {
        background: linear-gradient(${props => props.theme.aboutBackground});
    }

    .pagination {
        p{
            color: ${props => props.theme.fontColor};
        }
    }

    footer {
        background:  ${props => props.theme.aboutBackground};
    }
`;
