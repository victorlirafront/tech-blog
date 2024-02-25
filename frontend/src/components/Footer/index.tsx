import  StyledFooter from './Footer.styled'
import Link from 'next/link';
import Image from 'next/image';

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
                        <Image loading="lazy" width={30} height={30} alt="teste" className='icon' src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/github_LDTcy1bc_.png?updatedAt=16886127797" />
                    </div>
                </Link>

                <Link href="https://www.linkedin.com/in/victor-lira-front-end/" target="_blank">
                    <div className='icons-group'>
                        <Image loading="lazy" width={30} height={30} alt="teste" className='icon' src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/linkedin_aDQr6Huy2.png?updatedAt=16886127938" />
                    </div>
                </Link>
            </div>

            <div className='direitos-autorais'>
                <p>All rights reserved to © Victor Lira {getCurrentYear()}</p>
            </div>
        </StyledFooter>
    )
}

export default Footer