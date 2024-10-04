import React, { useState, Fragment } from 'react';
import Head from 'next/head';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import TechModal from '@/components/TechModal';
import techJson from '@/data/slider-tech.json';
import { TechInfoProps, FormFieldName, FormData } from './types';
import {
  FAVICON,
  META_TAG_IMAGE,
  PROFILE_CIRCLE,
  PROFILE_PICTURE,
  VERIFY_ICON,
} from '@/constants/images';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SlickProjects from '@/components/SlickProjects';
import StyledAboutMe from './AboutMe.styled';
import Image from 'next/image';
import SlideTech from '@/components/SlickTech';
import { useScrollContext } from '@/Context/scrollProvider';
import {
  validateName,
  validateEmail,
  validatePhone,
  validateSubject,
  validateMessage,
} from './formValidation';

export const AboutMe = function () {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: { value: '', isValid: false },
    email: { value: '', isValid: false },
    cellphone: { value: '', isValid: false },
    subject: { value: '', isValid: false },
    message: { value: '', isValid: false },
  });
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollIntoViewHandler } = useScrollContext();
  const [currentModalTech, setCurrentModalTech] = useState({
    name: '',
    description: '',
    link: '',
  });

  useEffect(() => {
    AOS.init();
    const viewportWidth = window.innerWidth;
    if (viewportWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

  const filterByName = (json: Record<string, TechInfoProps>, name: string) => {
    const keys = Object.keys(json);

    const filteredKeys = keys.filter(key => json[key].name.toLowerCase() === name.toLowerCase());

    return filteredKeys.map(key => json[key]);
  };

  const fetchTechDescription = async function (tech: string) {
    const filteredData = filterByName(techJson, tech);
    setCurrentModalTech({
      name: filteredData[0].name,
      description: filteredData[0].description,
      link: filteredData[0].link,
    });
  };

  const showTechInformationHandler = async (element: HTMLElement) => {
    try {
      const techAttribute = element.getAttribute('data-tech');
      if (techAttribute) {
        await fetchTechDescription(techAttribute);
        setShowModal(true);
      }
    } catch (error) {
      console.error('Failed to fetch tech description:', error);
    }
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const showTechInfo = async (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const closestWithDataTech = target.closest('[data-tech]');

    if (closestWithDataTech) {
      await showTechInformationHandler(closestWithDataTech as HTMLElement);
    }
  };

  const formSubmit = function (e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setFormSubmitted(true);

    setFormData(prevData => {
      const isNameValid = validateName(prevData.name.value);
      const isEmailValid = validateEmail(prevData.email.value);
      const isPhoneValid = validatePhone(prevData.cellphone.value);
      const isSubjectValid = validateSubject(prevData.subject.value);
      const isMessageValid = validateMessage(prevData.message.value);

      return {
        ...prevData,
        name: {
          ...prevData.name,
          isValid: isNameValid,
        },
        email: {
          ...prevData.email,
          isValid: isEmailValid,
        },
        cellphone: {
          ...prevData.cellphone,
          isValid: isPhoneValid,
        },
        subject: {
          ...prevData.subject,
          isValid: isSubjectValid,
        },
        message: {
          ...prevData.message,
          isValid: isMessageValid,
        },
      };
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;

    if (
      name === 'name' ||
      name === 'email' ||
      name === 'cellphone' ||
      name === 'subject' ||
      name === 'message'
    ) {
      setFormData(prevData => ({
        ...prevData,
        [name]: { ...prevData[name as FormFieldName], value },
      }));
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Sobre mim | blog</title>
        <meta
          name="description"
          content="Olá, sou Victor Lira, o criador de um blog dedicado a explorar os domínios do JavaScript, React, Next.js, TypeScript e outras tecnologias de front-end de ponta. Junte-se a mim nesta jornada enquanto compartilho insights, tutoriais e dicas para aprimorar suas habilidades e ficar por dentro das últimas tendências em desenvolvimento de front-end. Mergulhe no fascinante mundo do desenvolvimento web através do meu blog e capacite-se com conhecimento e experiência."
        />
        <meta
          name="keywords"
          content="Victor Lira, JavaScript, React, Next.js, TypeScript, Frontend Development, Web Development, Technology Blog, Coding Tutorials"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Victor Lira" />
        <meta property="og:site_name" content="Victor Lira" />
        <link rel="icon" href={FAVICON} />
        <meta property="og:image" content={META_TAG_IMAGE} />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3834333278222212"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <TechModal
        techName={currentModalTech.name}
        techDescription={currentModalTech.description}
        techLink={currentModalTech.link}
        className={showModal ? 'active' : ''}
        closeModal={closeModalHandler}
      />
      <Header className="header" scrollIntoView={() => scrollIntoViewHandler()} />
      <StyledAboutMe className="profile">
        <div className="container-vh">
          <div className="item" style={isMobile ? { height: 'auto', paddingTop: '40px' } : {}}>
            <div className="profile-wrapper">
              <div className="card-wrapper" data-aos="fade-down" data-aos-delay="100">
                <Image
                  src={PROFILE_PICTURE}
                  alt="Profile Picture"
                  width={300}
                  height={300}
                  className="card-image"
                />
                <Image
                  className="circle"
                  src={PROFILE_CIRCLE}
                  width={100}
                  height={100}
                  alt="circle"
                />
              </div>

              <div className="name-box" data-aos="fade-down" data-aos-delay="200">
                <h1 className="name">Victor Lira</h1>
                <Image src={VERIFY_ICON} width={20} height={20} alt="verify icon" />
              </div>
              <h1 className="profile-h1" data-aos="fade-down" data-aos-delay="250">
                <span>DESENVOLVENDO SOLUÇÕES PARA</span> <br />
                <span>o amanhã</span>
              </h1>
            </div>
          </div>
          <div className="item item-1">
            <SlickProjects onClick={() => console.log('slick projects')} />
          </div>
          <div className="item item-2">
            <div className="about-wrapper">
              <p className="skills">MINHAS SKILLS E POWER UP’S</p>

              <p className="tip">
                Sinta-se à vontade para <span className="span-click">clicar nos ícones</span> abaixo
                : )
              </p>
              <SlideTech onClick={showTechInfo} />
            </div>
          </div>
          <div className="item item-3">
            <div className="form-wrapper">
              <h1 className="title">Fale comigo</h1>
              <p className="p-1">
                Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados que em breve
                entraremos em contato.{' '}
              </p>
              <form id="form">
                <div className="box-1">
                  <div className="form-control control-1">
                    <label>Seu Nome</label>
                    <input
                      className={`input name ${
                        !formData.name.isValid && formSubmitted ? 'error' : ''
                      }`}
                      value={formData.name.value}
                      type="text"
                      placeholder="Digite aqui"
                      name="name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-control control-2">
                    <label>e-mail</label>
                    <input
                      className={`input email ${
                        !formData.email.isValid && formSubmitted ? 'error' : ''
                      }`}
                      value={formData.email.value}
                      type="text"
                      placeholder="email@example.com.br"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="box-2">
                  <div className="form-control control-3">
                    <label>Telefone</label>
                    <input
                      className={`input cellphone ${
                        !formData.cellphone.isValid && formSubmitted ? 'error' : ''
                      }`}
                      value={formData.cellphone.value}
                      type="text"
                      placeholder="( _ _ ) _ ____ ____"
                      name="cellphone"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-control control-4">
                    <label>Assunto</label>
                    <input
                      className={`input cellphone ${
                        !formData.subject.isValid && formSubmitted ? 'error' : ''
                      }`}
                      type="text"
                      placeholder="Digite aqui"
                      name="subject"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="box-3">
                  <div className="form-control control-5">
                    <label>Mensagem</label>
                    <textarea
                      className={`input message ${
                        !formData.message.isValid && formSubmitted ? 'error' : ''
                      }`}
                      placeholder="Escreva aqui sua mensagem"
                      name="message"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button type="button" onClick={formSubmit} className="submit">
                  Enviar contato
                </button>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </StyledAboutMe>
    </Fragment>
  );
};
