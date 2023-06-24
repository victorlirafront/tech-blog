import styled from 'styled-components';

export const StyledHeader = styled.header`
    padding: 5px 60px;
    background: rgb(32, 32, 32);
    max-width: 1920px;
    margin: 0 auto;
    nav {
        width: 100%;

        ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
            list-style: none;
            color: white;

            li {
                a {
                    color: #fff;
                    text-decoration: none;
                }
            }
        }
    }
`;
