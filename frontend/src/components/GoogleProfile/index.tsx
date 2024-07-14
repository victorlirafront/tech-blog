import 'aos/dist/aos.css';
import StypGoogleProfile from './GoogleProfile.styled';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Iprops {
  profileSrc: string;
}

const GooleProfile = function (props: Iprops) {
  const { profileSrc } = props;

  return (
    <StypGoogleProfile>
      <Link href="/Profile">
        <div className="container">
          <Image width={40} height={40} src={profileSrc} alt="teste" />
          <p>Perfil</p>
        </div>
      </Link>
    </StypGoogleProfile>
  );
};

export default GooleProfile;
