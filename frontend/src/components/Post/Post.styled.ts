"use client"
import styled from 'styled-components';

const StyledPost = styled.div`
    color: #b4b4b4;
    background: #181818;
    width: calc(33.33333% - 40px);
    margin: 0 auto;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: 10px;
    border: 1px solid #202020;
    transition: 0.3s;
    overflow: hidden;
    margin: 0 20px 40px 20px;
    border-color: #0497EF;
    box-shadow: 0px 0px 10px 0px #0497EF;

    .post-image {
        width: 100%;
        height: 200px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }

    .post-body {
        padding: 0 20px;
        height: 290px;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: space-around;
        transition: 0.4s;
        padding-bottom: 20px;
        padding-top: 20px;

        .category-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 8px;

            .post-date {
                text-align: start;
                width: 100%;
                font-size: 12px;
                margin-bottom: 10px;
                margin-top: 10px;
            }

            .post-category {
                font-size: 12px;
                color: #9ec0fa;
                transition: 0.2s;
                /* &:hover {
                    cursor: pointer;
                    color: #d3d4ff;
                } */
            }
        }

        .post-title {
            text-align: start;
            line-height: 26px;
            margin-bottom: 20px;
            font-size: 22px;
            /* height: 42px; */
            vertical-align: middle;
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }

        .post-content {
            text-align: start;
        }

        .post-author {
            text-align: start;
            margin-top: 10px;
            font-size: 12px;
            font-weight: 300;
            padding-left: 11px;
        }
    }

    .read-more-wrapper {
        margin-top: 10px;
        display: flex;
        align-items: center;
        p {
            margin-right: 10px;
            color: #9ec0fa;
            transition: 0.2s;
            /* &:hover {
                color: #1fd760;
            } */
        }

        img {
            width: 26px;
            padding-top: 9px;
        }
    }
`;

export default StyledPost;