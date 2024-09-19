import StyledFooter from './Footer.styled';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { GITHUB_ICON, LINKEDIN_ICON } from '@/constants/images';
import { GITHUB_LINk, LINKEDIN_LINK } from '@/constants/links';

const getCurrentYear = () => new Date().getFullYear();

const Footer = () => {
  return (
    <StyledFooter>
      <div className="icons-wrapper">
        <Link href={GITHUB_LINk} target="_blank">
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

        <Link href={LINKEDIN_LINK} target="_blank">
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
        <p>
          Todos os direitos reservados © {getCurrentYear()} <strong>Victor Lira</strong>
        </p>
        <p>
          Blog criado com <strong>Next.js</strong>
        </p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
