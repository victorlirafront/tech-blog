import { StyledSlickTech, StyledSlickTechWrapper } from './TechModal.styled';
import Image from 'next/image';

interface Iprops {
  closeModal: () => void;
  className: string;
  techName: string;
  techDescription: string;
  techLink: string;
}

const TechModal = function (props: Iprops) {
  const onCloseModalHandler = function () {
    props.closeModal();
  };

  return (
    <StyledSlickTechWrapper className={props.className}>
      <StyledSlickTech className={props.className}>
        <Image
          onClick={onCloseModalHandler}
          className="error-icon"
          width={50}
          height={50}
          src="/error.png"
          alt="teste"
          data-aos="fade-down"
        />
        <h1 data-aos="fade-down">{props.techName}</h1>
        <p className="tech-documentation">{props.techDescription}</p>
        <a
          className="documentation-anchor"
          href={props.techLink}
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-down"
        >
          Oficial documentation
        </a>
      </StyledSlickTech>
    </StyledSlickTechWrapper>
  );
};

export default TechModal;
