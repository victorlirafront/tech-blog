"use client"
import styled from 'styled-components';

const StyledCreatePost = styled.div`
    padding: 5px 60px;
    background: #121212;
    max-width: 1920px;
    margin: 0 auto;
    color: #333;

    #form {
        padding: 40px;
        width: 100%;
        border: 1px solid #000;
        background: #333;
        color: #fff;
        .form-control {
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            width: 100%;

            &.username {
                max-width: 500px;
            }

            &.title {
                max-width: 500px;
            }

            &.category {
                max-width: 500px;
            }

            &.meta-description {
                max-width: 500px;
            }

            &.meta-title {
                max-width: 500px;
            }

            &.post-image {
                max-width: 500px;
            }

            input {
                padding: 10px 20px;
                border-radius: 4px;
                border: 1px solid #333;
                margin-top: 3px;
                background-color: #ccc;
            }

            textarea {
                padding: 10px 20px;
                border-radius: 4px;
                border: 1px solid #333;
                min-height: 400px;
                min-width: 500px;
                width: 500px;
                max-width: 100%;
                margin-top: 3px;
                background-color: #ccc;
            }
        }

        .submit {
            width: 100%;
            font-size: 16px;
            padding: 10px 20px;
            margin-top: 20px;
            cursor: pointer;
            max-width: 500px;
        }
    }
`;


export default StyledCreatePost