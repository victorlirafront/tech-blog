import styled from 'styled-components';

const StyledHeader = styled.header`
    position: relative;
    padding: 20px 60px;
    margin: 0 auto;
    z-index: 3;
    background: #000;

    @media screen and (max-width: 500px) {
        padding: 10px 20px;
    }

    .home {
        @media screen and (max-width: 500px) {
            height: 38px;
        }
    }

    .container {
        margin: 0 auto;
        max-width: 1200px;

        nav {
            width: 100%;
            display: flex;
            background: #000;

            @media screen and (max-width: 700px) {
                justify-content: space-between;
            }

            .header-icon {
                width: 34px;
                margin-right: 15px;
            }

            .menu-wrapper {
                display: flex;
                align-items: center;
                justify-content: space-between;
                list-style: none;
                width: 100%;

                &.active {
                    left: 0px;
                }

                .close {
                    width: 20px;
                    position: absolute;
                    top: 40px;
                    right: 20px;
                    display: none;

                    @media screen and (max-width: 700px) {
                        display: block;
                    }
                }

                @media screen and (max-width: 700px) {
                    background: rgb(0, 98, 72);
                    position: fixed;
                    left: -100%;
                    top: 0;
                    bottom: 0;
                    height: 100vh;
                    width: 100vw;
                    flex-direction: column-reverse;
                    justify-content: center;
                }

                .div-left {
                    display: flex;
                    min-width: 320px;
                    justify-content: space-between;

                    @media screen and (max-width: 700px) {
                        flex-direction: column;
                        min-width: 250px;
                        /* height: 100px; */
                    }

                    .anchor {
                        @media screen and (max-width: 700px) {
                            &:first-child{
                                margin-bottom: 40px;
                            }
                        }

                        &.active {
                            border-bottom: 3px solid #0beeb2;
                            padding-bottom: 6px;
                        }
                    }

                    cursor: pointer;

                    a {
                        text-decoration: none;

                        &:hover {
                            color: #c5c5c5;
                        }

                        @media screen and (max-width: 700px) {
                            &:hover {
                                color: #fff;
                            }
                        }
                    }
                }

                .category {
                    width: 130px;
                    text-align: center;
                    position: relative;
                    
                    @media screen and (max-width: 700px) {
                        min-width: 250px;
                        margin-top: 30px;
                    }

                    a {
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
                        position: absolute;
                        z-index: 2;
                        top: 64px;
                        list-style: none;
                        text-align: center;
                        cursor: pointer;
                        width: 200px;
                        margin-left: -40px;
                        height: 0;
                        transition: 0.5s;
                        display: flex;
                        flex-direction: column;
                        overflow: hidden;

                        @media screen and (max-width: 700px) {
                            width: 250px;
                            margin-left: 0px;
                            overflow: scroll;
                            position: static;
                            margin-top: 30px;
                        }

                        &.active {
                            border-radius: 4px;
                            transition: 0.5s;
                            height: 200px;
                        }

                        li {
                            padding: 7px;
                        }

                        .option {
                            &:hover {
                                transition: 0.3s;
                                background: #149b78;
                            }
                        }
                    }
                }
            }

            .menu-hamburguer {
                display: none;

                @media screen and (max-width: 700px) {
                    display: block;
                    width: 30px;
                    height: 20px;
                    margin-top: 8px;
                }
            }
        }
    }
`;

export default StyledHeader;
