import {  StyledFooter } from './Footer.styled'

const Footer = function(){
    return (
        <StyledFooter>
            <div className='icons-wrapper'>
                <a href="https://github.com/victorlirafront" target="_blank" rel="noopener noreferrer">
                    <div className='icons-group'>
                        <img className='icon' src="./github.png" />
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/victor-lira-front-end/" target="_blank" rel="noopener noreferrer">
                    <div className='icons-group'>
                        <img className='icon' src="./linkedin.png" />
                    </div>
                </a>
            </div>

            <div className='direitos-autorais'>
                <p>© 2023, Victor Lira</p>
            </div>
        </StyledFooter>
    )
}

export default Footer