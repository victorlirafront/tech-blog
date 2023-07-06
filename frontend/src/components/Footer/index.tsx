import  StyledFooter from './Footer.styled'

const Footer = function(){
    return (
        <StyledFooter>
            <div className='icons-wrapper'>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className='icons-group'>
                        <img className='icon' src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/github_LDTcy1bc_.png?updatedAt=16886127797" />
                    </div>
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                    <div className='icons-group'>
                        <img className='icon' src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/linkedin_aDQr6Huy2.png?updatedAt=16886127938" />
                    </div>
                </a>
            </div>

            <div className='direitos-autorais'>
                <p>© 2023 - Todos os direitos reservados</p>
            </div>
        </StyledFooter>
    )
}

export default Footer