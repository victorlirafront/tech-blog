import StyledAboutMe from "./Profile.styled";
import { useState } from "react";
import SimpleSlider from '@/components/SlickTech';
import Image from "next/image";

const Profile = function(){
    const [resumeLanguage, setResumeLanguage] = useState("English");

    const changeResumeLanguage = function(language: string){
        setResumeLanguage(language)
    }

    return (
        <StyledAboutMe >
            <div className="box-1">
                <div className="profile-wrapper" data-aos="fade-right">
                    <div className="card-image"></div>
                    <div className="button-wrapper">
                        <div onClick={() => changeResumeLanguage("English")} className={`usa-box ${resumeLanguage === "English" ? "": "active"}`}>
                            <Image width={30} height={30} src="/usa.png" alt="" />
                        </div>
                        <div onClick={() => changeResumeLanguage("Portuguese")} className={`br-box ${resumeLanguage === "Portuguese" ? "": "active"}`}>
                            <Image width={30} height={30} src="/brasil.png" alt="" />
                        </div>
                        <button className="download-btn">Download Resume - {resumeLanguage}</button>
                    </div>
                </div>
                <div className="about-wrapper" data-aos="fade-left">
                    <p className="text-1">About me</p>
                    <h1 className="profile">Victor Lira</h1>
                    <h2 className="profession">Frontend Developer</h2>
                    <p className="description">Meu nome é Iuri Silva, ou “iuricode” (é como me chamam agora) sou o criador do eFront, um material de ensino de frontend pela internet. Atualmente sou freelancer como Frontend Developer e UI Designer. Desenvolvo interfaces modernas e de alta qualidade, concentrado em performance, animações, responsividade e SEO.</p>
                    <SimpleSlider/>
                </div>
            </div>
        </StyledAboutMe>
    )
}

export default Profile;