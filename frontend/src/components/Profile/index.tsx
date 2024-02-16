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
                <div className="profile-wrapper">
                    <div className="card-image" data-aos="fade-down" data-aos-delay="200"></div>
                    <div className="button-wrapper" data-aos="fade-down" data-aos-delay="300">
                        <div onClick={() => changeResumeLanguage("English")} className={`usa-box ${resumeLanguage === "English" ? "": "active"}`}>
                            <Image width={30} height={30} src="/usa.png" alt="" />
                        </div>
                        <div onClick={() => changeResumeLanguage("Portuguese")} className={`br-box ${resumeLanguage === "Portuguese" ? "": "active"}`}>
                            <Image width={30} height={30} src="/brasil.png" alt="" />
                        </div>
                        <button className="download-btn">Download Resume - {resumeLanguage}</button>
                    </div>
                </div>
                <div className="about-wrapper">
                    <p className="text-1" data-aos="fade-down" data-aos-delay="200">About me</p>
                    <h1 className="profile" data-aos="fade-down" data-aos-delay="300">Victor Lira</h1>
                    <h2 className="profession" data-aos="fade-down" data-aos-delay="400">Frontend Developer</h2>
                    <p className="description" data-aos="fade-down" data-aos-delay="500">My name is Victor, I am a Front-end developer, passionate about the JavaScript universe. I have had the opportunity to create internal projects for large companies, and I took the initiative to create this blog to share important topics related to web development.</p>
                    <SimpleSlider />
                </div>
            </div>
        </StyledAboutMe>
    )
}

export default Profile;