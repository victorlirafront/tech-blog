import StyledAboutMe from './Profile.styled';
import SlideTech from '@/components/SlickTech';
import Header from '../Header';
import Image from 'next/image';
import React from 'react';
import { MouseEvent } from 'react';
import { useScrollContext } from '@/Context/scrollProvider';
import { IProfile } from './Interface';

const Profile = function (props: IProfile) {
  const { scrollIntoViewHandler } = useScrollContext();

  const showTechInformationHandler = async function (e: MouseEvent) {
    const target = e.target as Element;
    const closestWithDataTech = target.closest('[data-tech]');

    if (closestWithDataTech) {
      props.onShowTechInformationHandler(closestWithDataTech as HTMLElement);
    }
  };

  return (
    <StyledAboutMe className={props.className}>
      <div className="container-vh">
        <div className="item">
          <Header className="header" scrollIntoView={() => scrollIntoViewHandler()} />

          <div className="profile-wrapper">
            <div className="card-wrapper" data-aos="fade-down" data-aos-delay="100">
              <Image
                src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/profile-1_feYey8V23.jpeg?updatedAt=1712709533286"
                alt="teste"
                width={100}
                height={100}
                className="card-image"
              />
              <Image
                className="circle"
                src={'/profile-circle.png'}
                width={100}
                height={100}
                alt="teste"
              />
            </div>

            <div className="name-box" data-aos="fade-down" data-aos-delay="200">
              <h1 className="name">Victor Lira</h1>
              <Image src={'/verify.png'} width={20} height={20} alt="teste" />
            </div>
            <h1 className="profile-h1" data-aos="fade-down" data-aos-delay="250">
              <span>DESENVOLVENDO SOLUÇÕES PARA</span> <br />
              <span>o amanhã</span>
            </h1>
          </div>
        </div>
        <div className="item item-1">
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quis minima impedit
          </h1>
        </div>
        <div className="item">
          <div className="about-wrapper">
            <p className="skills">MINHAS SKILLS E POWER UP’S</p>

            <p className="tip">
              Feel free to <span className="span-click">click on the icons</span> below : )
            </p>
            <SlideTech onClick={showTechInformationHandler} />
          </div>
        </div>
        <div className="item">
          <h1>Form</h1>
        </div>
      </div>
    </StyledAboutMe>
  );
};

export default Profile;
