"use client"
import styled from 'styled-components';

const StyledHeader = styled.header`
    position: relative;
    padding: 20px 60px;
    background: #121212;
    max-width: 1000px;
    margin: 0 auto;
    z-index: 3;

        @media screen and (max-width: 700px) {
                position: fixed;
            }

    .container {
        margin: 0 auto;
        max-width: 1200px;

        nav {
            width: 100%;
            display: flex;

            .header-icon {
                    width: 40px;
                    margin-right: 15px;
                }

        .menu-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            list-style: none;
            color: white;
            width: 100%;

            @media screen and (max-width: 700px) {
                background: rgb(0,98,72);
                background: linear-gradient(3600deg, rgba(0,98,72,1) 0%, rgba(5,213,158,1) 100%);
                position: fixed;
                left: 0;
                top: 0;
                bottom: 0;
                height: 100vh;
                width: 100vw;
                flex-direction: column;
                justify-content: center;
            }

            .div-left {

                @media screen and (max-width: 700px) {
                    flex-direction: column;
                    min-width: 150px;
                    height: 150px;
                }

                .anchor {

                    &.active{
                        border-bottom: 3px solid #0beeb2;
                        padding-bottom: 6px;
                    }
                }

                cursor: pointer;
                
                a {
                    color: #fff;
                    text-decoration: none;
                    color: #fff;

                    &:hover {
                        color: #c5c5c5;
                    }

                    @media screen and (max-width: 700px) {
                        &:hover {
                        color: #fff;
                    }
                    }
                }

                display: flex;
                min-width: 250px;
                justify-content: space-between;
            }

            .category {
                width: 130px;
                text-align: center;
                position: relative;
                padding: 7px 0;
                color: #fff !important;

                @media screen and (max-width: 700px) {
                    min-width: 150px;
                    margin-top: 30px;
                }


                a {
                    color: #fff;
                    text-decoration: none;
                }

                .category-conteiner {
                    display: flex;
                    justify-content: space-between;
                    cursor: pointer;

                    .arrow {
                        height: 30px;
                        margin-left: 10px;
                        max-width: 27px;
                        transform: scale(0.7);
                    }
                }

                .category-options {
                    width: 150px;
                    position: absolute;
                    z-index: 2;
                    top: 64px;
                    list-style: none;
                    text-align: center;
                    background: #1fb28b;
                    cursor: pointer;
                    width: 200px;
                    margin-left: -40px;

                    @media screen and (max-width: 700px){
                        background: #048060;
                    }

                    &.active{
                        display: flex;
                        flex-direction: column;
                        border-radius: 4px;
                    }

                    a{
                        padding: 7px;
                    }
                    display: none;

                    .option {
                        &:hover {
                            transition: 0.3s;
                            background: #149b78;
                        }
                    }
                }
            }
        }
    }
    }
`;

export default StyledHeader