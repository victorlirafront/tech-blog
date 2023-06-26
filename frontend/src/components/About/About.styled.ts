import styled from 'styled-components';

export const StyledAbout = styled.div`
    height: 500px;
    width: 100%;
    background-image: url('./background-about.png?v=4');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    .about-wrapper {
        max-width: 600px;
        text-align: center;

        .about-title {
            letter-spacing: 0.8px;
            font-size: 3.25rem;
            margin-bottom: 10px;
            margin-bottom: 10px;
        }

        .about-text {
            font-size: 17px;
            margin-bottom: 25px;
            font-weight: 400;
        }

        .about-buttom {
            border-radius: 5px;
            background-color: #fff;
            display: inline-block;
            color: #333;
            text-align: center;
            letter-spacing: .2px;
            line-height: 1;
            font-size: 1rem;
            font-weight: 600;
            border-radius: 5px;
            padding: 13px 25px;
            cursor: pointer;
            outline: 0;
            border: 0;
            position: relative;
            transition: all .25s cubic-bezier(.02,.01,.47,1);
            font-weight: 400;
        }
    }
`;
