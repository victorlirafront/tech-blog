import styled from 'styled-components';

const StyledHeader = styled.header`
    padding: 20px 60px;
    background: #121212;
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

export default StyledHeader