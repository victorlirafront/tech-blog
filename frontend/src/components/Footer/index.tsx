import StyledFooter from './Footer.styled';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import React from 'react';
import { GITHUB_ICON, LINKEDIN_ICON } from '@/constants/images';

const getCurrentYear = () => new Date().getFullYear();

const Footer = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  const githubUrl = 'https://github.com/victorlirafront';
  const linkedinUrl = 'https://www.linkedin.com/in/victor-lira-front-end/';

  return (
    <React.Fragment>
      {shouldRender ? (
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
                  src={GITHUB_ICON}
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
                  src={LINKEDIN_ICON}
                />
              </div>
            </Link>
          </div>

          <div className="direitos-autorais">
            <p>Todos os direitos reservados © {getCurrentYear()} Victor Lira </p>
          </div>
        </StyledFooter>
      ) : (
        <div></div>
      )}{' '}
    </React.Fragment>
  );
};

export default Footer;
