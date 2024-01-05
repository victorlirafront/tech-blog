import  StyledFooter from './Footer.styled'
import Link from 'next/link';

const getCurrentYear = function(){
    const dataAtual = new Date();
    // Obtém o ano atual
    return dataAtual.getFullYear();
}

const Footer = function(){
    return (
        <StyledFooter>
            <div className='icons-wrapper'>
                <Link href="https://github.com/victorlirafront" target="_blank">
                    <div className='icons-group'>
                        <img className='icon' src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/github_LDTcy1bc_.png?updatedAt=16886127797" />
                    </div>
                </Link>

                <Link href="https://www.linkedin.com/in/victor-lira-front-end/" target="_blank">
                    <div className='icons-group'>
                        <img className='icon' src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/linkedin_aDQr6Huy2.png?updatedAt=16886127938" />
                    </div>
                </Link>
            </div>

            <div className='direitos-autorais'>
                <p>Todos os direitos reservados © Victor Lira {getCurrentYear()}</p>
            </div>
        </StyledFooter>
    )
}

export default Footer