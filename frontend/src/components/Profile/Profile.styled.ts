
import styled from 'styled-components';

const Profile = styled.div`
    max-width: 90%;
    margin: 0 auto;
    margin-top: 100px;
    padding: 20px 60px;
    background-color: #151515;
    border: 2px solid #1f1f1f;

    @media screen and (max-width: 450px) {
        padding: 20px ;
    }


    .box-1 {
        display: flex;
        color: #fff;
        justify-content: space-between;
        padding: 60px 30px;
        border-radius: 4px;
        max-width: 1200px;
        margin: 0 auto;

        @media screen and (max-width: 1040px) {
            flex-direction: column;
            align-items: center;
        }

        @media screen and (max-width: 453px) {
            padding: 60px 10px;
            padding-bottom: 100px;
        }

        .profile-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .card-image {
                border-radius: 100%;
                width: 250px;
                height: 250px;
                background-image: url(https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/profile-picture_IS0KqOtN1.jpeg?updatedAt=1708444003006);
                background-size: cover;
            }

            .button-wrapper {
                position: relative;

                .usa-box {
                    width: 30px;
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    bottom: 70px;

                    cursor: pointer;

                    &.active {
                        filter: grayscale();
                    }

                    img {
                        width: 100%;
                        height: auto;
                    }
                }

                .br-box {
                    width: 30px;
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    bottom: 70px;
                    left: 33px;
                    cursor: pointer;

                    &.active {
                        filter: grayscale();
                    }

                    img {
                        width: 100%;
                        height: auto;
                    }
                }

                .download-wrapper {
                    margin-top: 70px;
                    width: 250px;
                    padding: 15px 10px;
                    text-align: center;
                    border-radius: 4px;

                    @media screen and (max-width: 1040px) {
                        margin-top: 100px;
                    }

                    .download-btn {
                        padding: 15px 30px;
                        cursor: pointer;
                        background: transparent;
                        font-size: 15px;
                        text-decoration: none;
                    }
                }
            }
        }

        .about-wrapper{
            max-width: 550px;
            width: 100%;

            @media screen and (max-width: 1040px) {
                margin-top: 50px;
            }

            .text-1{

                @media screen and (max-width: 1040px) {
                    text-align: center;
                }
            }

            .profile-h1 {
                margin: 10px 0px;

                @media screen and (max-width: 1040px) {
                    text-align: center;
                }
                
                @media screen and (max-width: 400px) {
                    font-size: 34px;
                }
            }

            .profession{
                font-size: 20px;
                @media screen and (max-width: 1040px) {
                    text-align: center;
                }

                @media screen and (max-width: 400px) {
                    font-size: 16px;
                }
            }

            .description{
                margin: 20px 0px 48px 0px;
                @media screen and (max-width: 400px) {
                    font-size: 14px;
                    line-height: 24px;
                }
            }
        }
    }
`;

export default Profile;
