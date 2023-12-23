'use client';
import styled from 'styled-components';

const StyledAbout = styled.div`
    height: 400px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/worker_a5Q0u72Xk.png?updatedAt=1697424748194);
    position: relative;
    max-width: 1920px;
    margin: 0 auto;

    @media screen and (max-width: 750px){
        height: 270px;
    }

    .overlay {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #000;
        opacity: 0.1;
        z-index: 1;
    }

    .about-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 50px;

        @media screen and (max-width: 1230px){
            position: absolute;
            bottom: -250px;
        }

        @media screen and (max-width: 750px){
            flex-direction: column-reverse;
            bottom: -250px;
        }

        @media screen and (max-width: 6000px){
            padding: 10px 20px;
        }

        .typed-animation {

            @media screen and (max-width: 541px){
                display: none;
            }

            .title-1 {
                font-size: 27px;
                font-weight: bold;
                @media screen and (max-width: 541px){
                    font-size: 15px;
                }
                
            }

            .title-2 {
                font-size: 22px;
                font-weight: bold;
                @media screen and (max-width: 541px){
                    font-size: 15px;
                }
            }

            .title-3 {
                font-size: 17px;
                font-weight: bold;
                @media screen and (max-width: 541px){
                    font-size: 15px;
                }
            }

            .title-4 {
                font-size: 17px;
                font-weight: bold;
                @media screen and (max-width: 541px){
                    font-size: 15px;
                }
            }
        }

        .card {
            text-align: center;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;

            @media screen and (max-width: 750px){
                margin-bottom: 20px;
            }


            .name {
                color: #bad7e5;
                margin-top: 10px;
            }

            .profession {
                color: #bad7e5;
                margin-top: -5px;
            }

            .card-img {
                border-radius: 100%;
                width: 100px;
                height: 100px;
                background-image: url(https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/profile_-roAsJAbQ.png?updatedAt=1688612357551);
                background-size: cover;
                border: 3px solid #bad7e5;
                border-color: #0497EF;
                box-shadow: 0px 0px 10px 0px #0497EF;
            }
        }
    }
`;

export default StyledAbout;
