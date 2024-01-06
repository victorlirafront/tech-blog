import styled from 'styled-components';

const Profile = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 100px;
    padding: 20px 60px;

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
            border: 3px solid rgb(11, 238, 178);
            border-color: rgb(11, 238, 178);
            box-shadow: 0px 0px 10px 0px rgb(11, 238, 178);
        }

        .download-btn {
            padding: 15px 60px;
            cursor: pointer;
            color: #0beeb2;
            border: 2px solid #0beeb2;
            border-radius: 4px;
            background: transparent;
            margin-top: 50px;
        }
    }
`

export default Profile;