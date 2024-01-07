"use client"
import styled from 'styled-components';

const StyledFooter = styled.footer`
    padding: 75px 0;
    margin: 0 auto;
    background: #080808;
    margin-top: 130px;

    .icons-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 80px;
        margin: 0 auto;

        .icons-group {
            background: white;
            border: 1px solid #fff;
            border-radius: 50%;
            max-width: 30px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            .icon {
                width: 30px;
                border: 1px solid #fff;
                border-radius: 100%;
            }
        }
    }

    .direitos-autorais {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ccc;
        font-size: 12px;
        margin-top: 20px ;
    }
`;

export default StyledFooter