import StyledAboutMe from './Profile.styled';
import { useState } from 'react';
import SlideTech from '@/components/SlickTech';
import Image from 'next/image';
import React from 'react';
import { MouseEvent } from 'react';

interface IProfile {
  className: string;
  onShowTechInformationHandler: (arg: HTMLElement) => void;
}

const Profile = function (props: IProfile) {
  const [resumeLanguage, setResumeLanguage] = useState('English');

  const portugueseResume =
    'https://drive.google.com/file/d/1jf-P0HWU5DDWVfBKsOlz7_0N8APNx0-o/view?usp=sharing';
  const englishResume =
    'https://drive.google.com/file/d/1PgmPF4ozacghtBIiZf1FHhUDrCzPcXg9/view?usp=sharing';

  const changeResumeLanguage = function (language: string) {
    setResumeLanguage(language);
  };

  const showTechInformationHandler = async function (e: MouseEvent) {
    const target = e.target as Element;
    const closestWithDataTech = target.closest('[data-tech]');

    if (closestWithDataTech) {
      props.onShowTechInformationHandler(closestWithDataTech as HTMLElement);
    }
  };

  return (
    <StyledAboutMe className={props.className}>
      <div className="box-1">
        <div className="profile-wrapper" data-aos="fade-right">
          <div className="card-image"></div>
          <div className="button-wrapper">
            <div
              onClick={() => changeResumeLanguage('English')}
              className={`usa-box ${resumeLanguage === 'English' ? '' : 'active'}`}
            >
              <Image width={30} height={30} src="/usa.png" alt="USA flag image" />
            </div>
            <div
              onClick={() => changeResumeLanguage('Portuguese')}
              className={`br-box ${resumeLanguage === 'Portuguese' ? '' : 'active'}`}
            >
              <Image width={30} height={30} src="/brasil.png" alt="BRAZIL flag image" />
            </div>
            <div className="download-wrapper">
              <a
                className="download-btn"
                target="_blank"
                href={resumeLanguage === 'English' ? englishResume : portugueseResume}
                rel="noreferrer"
              >
                Resume - {resumeLanguage}
              </a>
            </div>
          </div>
        </div>
        <div className="about-wrapper" data-aos="fade-left">
          <p className="text-1">About me</p>
          <h1 className="profile-h1">Victor Lira</h1>
          <h2 className="profession">Frontend Developer</h2>
          <p className="description">
            I have experience in Front-end Development, actively contributing to projects that have
            significantly impacted both end users and employees. I have been recognized for creating
            web tools aimed at automating internal operational processes.
          </p>
          <p className="tip">
            Feel free to <span className="span-click">click on the icons</span> below : )
          </p>
          <SlideTech onClick={showTechInformationHandler} />
        </div>
      </div>
    </StyledAboutMe>
  );
};

export default Profile;
