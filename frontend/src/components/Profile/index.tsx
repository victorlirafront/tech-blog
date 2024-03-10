import StyledAboutMe from './Profile.styled';
import { useState } from 'react';
import SimpleSlider from '@/components/SlickTech';
import Image from 'next/image';
import React from 'react';

interface IProfile {
  className: string;
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

  return (
    <StyledAboutMe className={props.className}>
      <div className="box-1">
        <div className="profile-wrapper" data-aos="fade-right">
          <div className="card-image"></div>
          <div className="button-wrapper">
            <div
              onClick={() => changeResumeLanguage('English')}
              className={`usa-box ${
                resumeLanguage === 'English' ? '' : 'active'
              }`}
            >
              <Image width={30} height={30} src="/usa.png" alt="USA flag image" />
            </div>
            <div
              onClick={() => changeResumeLanguage('Portuguese')}
              className={`br-box ${
                resumeLanguage === 'Portuguese' ? '' : 'active'
              }`}
            >
              <Image width={30} height={30} src="/brasil.png" alt="BRAZIL flag image" />
            </div>
            <div className="download-wrapper">
              <a
                className="download-btn"
                target="_blank"
                href={
                  resumeLanguage === 'English'
                    ? englishResume
                    : portugueseResume
                } rel="noreferrer"
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
            My name is Victor, I am a Front-end developer, passionate about the
            JavaScript universe. I have had the opportunity to create internal
            projects for large companies, and I took the initiative to create
            this blog to share important topics related to web development.
          </p>
          <SimpleSlider />
        </div>
      </div>
    </StyledAboutMe>
  );
};

export default Profile;
