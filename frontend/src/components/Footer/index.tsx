import StyledFooter from './Footer.styled';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const getCurrentYear = () => new Date().getFullYear();

const Footer = () => {
   const [shouldRender, setShouldRender] = useState(false);

   useEffect(() => {
      setShouldRender(true);
   }, []);

   const githubUrl = "https://github.com/victorlirafront";
   const linkedinUrl = "https://www.linkedin.com/in/victor-lira-front-end/";
   const githubImageSrc = "https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/github_LDTcy1bc_.png?updatedAt=16886127797";
   const linkedinImageSrc = "https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/linkedin_aDQr6Huy2.png?updatedAt=16886127938";

   return (
      shouldRender ? (
         <StyledFooter>
            <div className="icons-wrapper">
               <Link href={githubUrl} target="_blank">
                  <div className="icons-group">
                     <Image
                        loading="lazy"
                        width={30}
                        height={30}
                        alt="GitHub"
                        className="icon"
                        src={githubImageSrc}
                     />
                  </div>
               </Link>

               <Link href={linkedinUrl} target="_blank">
                  <div className="icons-group">
                     <Image
                        loading="lazy"
                        width={30}
                        height={30}
                        alt="LinkedIn"
                        className="icon"
                        src={linkedinImageSrc}
                     />
                  </div>
               </Link>
            </div>

            <div className="direitos-autorais">
               <p>All rights reserved to © Victor Lira {getCurrentYear()}</p>
            </div>
         </StyledFooter>
      ) : <div></div>
   )
};

export default Footer;
