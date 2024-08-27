import StyledAboutMe from './Profile.styled';
import SlideTech from '@/components/SlickTech';
import Header from '../Header';
import Image from 'next/image';
import React from 'react';
import { MouseEvent } from 'react';
import { useScrollContext } from '@/Context/scrollProvider';
import { IProfile } from './types';
import SlickProjects from '../SlickProjects';
import Footer from '../Footer';

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
                alt="Profile Picture"
                width={300}
                height={300}
                className="card-image"
              />
              <Image
                className="circle"
                src={'/profile-circle.png'}
                width={100}
                height={100}
                alt="circle"
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
          <SlickProjects onClick={() => console.log('slick projects')} />
        </div>
        <div className="item item-2">
          <div className="about-wrapper">
            <p className="skills">MINHAS SKILLS E POWER UP’S</p>

            <p className="tip">
              Sinta-se à vontade para <span className="span-click">clicar nos ícones</span> abaixo : )
            </p>
            <SlideTech onClick={showTechInformationHandler} />
          </div>
        </div>
        <div className="item item-3">
          <div className="form-wrapper">
            <h1 className="title">Fale comigo</h1>
            <p className="p-1">
              Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados que em breve
              entraremos em contato.{' '}
            </p>
            <form
              id="form"
              action="https://formsubmit.co/victorliracorporativo@gmail.com"
              method="POST"
            >
              <div className="box-1">
                <div className="form-control control-1">
                  <label>Seu Nome</label>
                  <input type="text" placeholder="Digite aqui" name="name" required />
                </div>
                <div className="form-control control-2">
                  <label>e-mail</label>
                  <input type="text" placeholder="email@example.com.br" name="email" required />
                </div>
              </div>

              <div className="box-2">
                <div className="form-control control-3">
                  <label>Telefone</label>
                  <input type="tel" placeholder="( _ _ ) _ ____ ____" name="cellphone" required />
                </div>
                <div className="form-control control-4">
                  <label>Assunto</label>
                  <input type="text" placeholder="Digite aqui" name="subject" required />
                </div>
              </div>

              <div className="box-3">
                <div className="form-control control-5">
                  <label>Mensagem</label>
                  <textarea placeholder="Escreva aqui sua mensagem" name="message" required />
                </div>
              </div>
              <button className="submit">Enviar contato</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </StyledAboutMe>
  );
};

export default Profile;
