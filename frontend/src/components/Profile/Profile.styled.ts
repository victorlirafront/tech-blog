import styled from 'styled-components';

const Profile = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 50px;
    padding: 20px 60px;

    .box-1 {
        display: flex;
        color: #fff;
        justify-content: space-between;
        background-color: #151515;
        border: 2px solid #1f1f1f;
        padding: 60px 30px;
        border-radius: 4px;
        .profile-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .card-image {
                border-radius: 100%;
                width: 250px;
                height: 250px;
                background-image: url(https://lh3.googleusercontent.com/a/ACg8ocI-YwbX136l7geDj550zQ5cKTsKs126SCzWiwS594NwwQ=s288-c-no);
                background-size: cover;
                border: 1px solid rgb(11, 238, 178);
                border-color: rgb(11, 238, 178);
                box-shadow: 0px 0px 10px 0px rgb(11, 238, 178);
            }

            .button-wrapper {
                position: relative;

                .usa-box {
                    width: 30px;
                    position: absolute;
                    /* border: 1px solid #0beeb2; */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    bottom: 52px;
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
                    /* border: 1px solid #0beeb2; */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    bottom: 52px;
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

                .download-btn {
                    padding: 15px 10px;
                    cursor: pointer;
                    color: #0beeb2;
                    border: 2px solid #0beeb2;
                    border-radius: 4px;
                    background: transparent;
                    margin-top: 50px;
                    width: 250px;
                }
            }
        }

        .about-wrapper{
            max-width: 550px;

            .text-1{
                color: #0beeb2;
            }

            .profile {
                margin: 10px 0px;
            }

            .profession{
                font-size: 20px;
            }

            .description{
                color: #9ca3af;
                margin: 20px 0px 48px 0px;
            }
        }
    }
`;

export default Profile;
