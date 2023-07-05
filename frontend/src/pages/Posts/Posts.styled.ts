import styled from 'styled-components';

export const StyledPosts = styled.div`
    color: #ccc;

    .background-image {
        height: 500px;
        width: 100%;
        background-size: cover;
        background-position: center;
        object-fit: contain;
        background-repeat: no-repeat;

    }

    .body-post {
        max-width: 830px;
        margin: 0 auto;
        padding: 20px 30px;

        h1, h2, h3, h4, h5, h6 {
            margin-bottom: 30px;
            /* margin-top: 30px; */
        }

        p {
            line-height: 30px;
            margin-bottom: 30px;
            img {
                max-width: 100%;
            }
        }

        img {
            max-width: 100%;
        }

        code {
            background: #141920;
            color: #9ec0fa;
            padding: 20px;
            margin: 20px 0;
            display: flex;
            align-items: center;
            line-height: 28px;
            align-items: center;
            justify-content: flex-start;
            overflow: auto;
        }

        a {
            color: #b6b7f6;
            text-decoration: none;
        }

        ul, ol {
            letter-spacing: .3px;
            line-height: 1.6;
            font-size: 1.25rem;
            padding-left: 40px;
            margin-bottom: 30px;

            li {
                margin-bottom: 20px;
            }
        }

    }
`;
