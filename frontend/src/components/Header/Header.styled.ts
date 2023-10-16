"use client"
import styled from 'styled-components';

const StyledHeader = styled.header`
    padding: 20px 60px;
    background: #121212;
    max-width: 1000px;
    margin: 0 auto;

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

        ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
            list-style: none;
            color: white;
            width: 100%;

            li {
                cursor: pointer;
                
                a {
                    color: #fff;
                    text-decoration: none;
                }
            }
        }
    }
    }
`;

export default StyledHeader