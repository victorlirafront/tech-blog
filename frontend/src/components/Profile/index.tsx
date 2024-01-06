import StyledAboutMe from "./Profile.styled";

const Profile = function(){

    return (
        <StyledAboutMe data-aos="fade-down">
            <div className="profile-wrapper">
                <div className="card-image"></div>
                <button className="download-btn">Download CV</button>
            </div>
        </StyledAboutMe>
    )
}

export default Profile;