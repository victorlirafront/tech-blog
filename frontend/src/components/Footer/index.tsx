import  StyledFooter from './Footer.styled'

const getCurrentYear = function(){
    const dataAtual = new Date();
    // Obtém o ano atual
    return dataAtual.getFullYear();
}

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
                <p>Todos os direitos reservados © Victor Lira {getCurrentYear()}</p>
            </div>
        </StyledFooter>
    )
}

export default Footer