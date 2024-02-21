"use client"
import styled from 'styled-components';

const StyledDarkModeToggle = styled.div`
    width: 60px;
    height: 25px;
    border: 1px solid #363636;
    border-radius: 30px;
    position: relative;
    background: #000;
    cursor: pointer;

    @media screen and (max-width: 700px){
        position: absolute;
        top: 40px;
        left: 20px;
    }

    .toggle {
        background: #fff;
        height: 100%;
        width: 24px;
        border-radius: 50%;
        position: absolute;
        transition: 0.5s;
        cursor: pointer;
        
        &.light {
            -webkit-transition: 0.5s;
            transition: 0.5s;
            right: 0px;
        }

        &.dark {
            -webkit-transition: 0.5s;
            transition: 0.5s;
            right: 33px;
        }
    }
`;

export default StyledDarkModeToggle