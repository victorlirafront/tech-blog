import styled from 'styled-components';

const StyledPosts = styled.div`
    color: #ccc;
    margin-bottom: 100px;

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
        padding-top: 60px;
        
        .title {
            letter-spacing: .7px;
            font-size: 2.625rem;
            margin-bottom: 20px;
            text-align: center;
        }

        .date {
            text-align: center;
            font-weight: bolder;
            color: #9ec0fa;
        }

        h1, h2, h3, h4, h5, h6 {
            margin-bottom: 30px;
            /* margin-top: 30px; */
        }

        p {
            line-height: 30px;
            margin-bottom: 30px;
            img {
                max-width: 100%;
                border-radius: 5px;
            }
        }

        img {
            max-width: 100%;
        }

        code {
            background: #23312e;
            color: #30c85e;
            padding: 20px;
            margin: 20px 0;
            display: flex;
            align-items: center;
            line-height: 28px;
            align-items: center;
            justify-content: flex-start;
            overflow: auto;
            border-left: 4px solid #31c85e;
            font-family: neo-sans, sans-serif;
            border-bottom-right-radius: 0.5rem;
            border-top-right-radius: 0.5rem;
            font-size: 14px;
            line-height: 24px;
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

    .writter {
        display: flex;
        justify-content: center;
        padding: 60px 40px;
        border-color: #141920;
        border-style: solid;
        border-width: 1px 0;
        margin: 0 auto;
        

        .author {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: cover;
            margin-right: 30px;
            background-image: url(https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/profile_-roAsJAbQ.png?updatedAt=1688612357551);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center ;
            border: 1px solid #41516e;
        }

        .name-container {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center ;
            .text-1 {
                color: #9ec0fa;
                font-size: 18px;
                margin-bottom: 7px;
            }
        }
    }
`;

export default StyledPosts