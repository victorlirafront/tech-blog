'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import StyledHeader from './Header.styled';
import AOS from 'aos';
import Image from 'next/image';
import DarkModeToggle from '../DarkModeToggle';
import SignIn from '../../components/googleSignIn/signIn';

interface IHeaderProps {
  scrollIntoView?: () => void;
  className: string;
}

interface UrlParams {
  page: string;
  category: string;
}

const Header = function (props: IHeaderProps) {
  const [currentTab, setCurrentTab] = useState('');
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const router = useRouter();
  const currentUrl = router.asPath;
  const [headerFadeDown, setHeaderFadeDown] = useState('fade-down');
  const [shouldRender, setShouldRender] = useState(false);
  const [urlParams, setUrlParams] = useState<UrlParams>({
    page: '0',
    category: '',
  });

  useEffect(() => {
    if (
      urlParams.page === '0' ||
      (router.query.page === urlParams.page && router.query.category === urlParams.category)
    ) {
      return;
    }

    router.push({
      pathname: '/',
      query: {
        page: urlParams.page,
        category: urlParams.category,
      },
    });
  }, [urlParams, router]);

  const menuToggleBaseOnUrl = useCallback(() => {
    if (currentUrl.includes('all')) {
      setCurrentTab('all');
    } else if (currentUrl.includes('javascript')) {
      setCurrentTab('javascript');
    } else if (currentUrl.includes('react')) {
      setCurrentTab('react');
    } else if (currentUrl.includes('AboutMe')) {
      setCurrentTab('about');
    } else if (currentUrl.includes('typescript')) {
      setCurrentTab('typescript');
    } else {
      setCurrentTab('all');
    }
  }, [currentUrl, setCurrentTab]);

  useEffect(() => {
    setShouldRender(true);
    AOS.init();
    menuToggleBaseOnUrl();
    const updateWindowWidth = () => {
      if (window.innerWidth < 700) {
        setHeaderFadeDown('');
      }
    };
    updateWindowWidth();
  }, [menuToggleBaseOnUrl]);

  const showMobileMenu = function () {
    setOpenMobileMenu(true);
  };

  const categoryOptionHandler = function (route: string, category: string) {
    setUrlParams({
      page: route,
      category: category,
    });

    hideMobileMenu();

    // const handleRouteChangeComplete = () => {
    //   if (props && props.scrollIntoView) {
    //     props.scrollIntoView();
    //   }
    //   router.events.off('routeChangeComplete', handleRouteChangeComplete);
    // };

    // router.events.on('routeChangeComplete', handleRouteChangeComplete);
  };

  const hideMobileMenu = function () {
    setOpenMobileMenu(false);
  };

  const goBackToHomePage = function () {
    categoryOptionHandler('1', 'all');
  };

  return shouldRender ? (
    <StyledHeader data-aos={headerFadeDown} className={props.className}>
      <div className="container">
        <nav>
          <div className="home" onClick={goBackToHomePage}>
            <Image
              width={50}
              height={40}
              className="header-icon"
              src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/code_2GKuQisNn.png?updatedAt=1697217597567"
              alt=""
            />
          </div>
          <div className={`menu-wrapper ${openMobileMenu ? 'active' : ''}`}>
            <Image
              width={50}
              height={20}
              onClick={() => hideMobileMenu()}
              className="close"
              src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/close_eNQqVeiw3.png?updatedAt=1703309380667"
              alt=""
            />

            <div className="div-left">
              <div
                onClick={() => {
                  goBackToHomePage();
                }}
                className={`home ${currentTab === 'all' ? 'active' : ''}`}
              >
                Home
              </div>

              <div className="category-options">
                <p
                  className={`front-end-option ${currentTab === 'javascript' ? 'active' : ''}`}
                  onClick={() => categoryOptionHandler('1', 'javascript')}
                >
                  Front-end
                </p>
                <p
                  className={`react-option ${currentTab === 'react' ? 'active' : ''}`}
                  onClick={() => categoryOptionHandler('1', 'react')}
                >
                  Carreira
                </p>
                <p
                  className={`typescript-option ${currentTab === 'typescript' ? 'active' : ''}`}
                  onClick={() => categoryOptionHandler('1', 'typescript')}
                >
                  Abstrações
                </p>
              </div>
              <Link className={`anchor ${currentTab === 'about' ? 'active' : ''}`} href="/AboutMe">
                Portfólio
              </Link>
            </div>
            <div className="div-right">
              <SignIn />
            </div>
          </div>
          <Image
            width={50}
            height={50}
            onClick={() => showMobileMenu()}
            className={`menu-hamburguer`}
            src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/hamburguer_1id8uhYeQ.png?updatedAt=1703307554746"
            alt=""
          />
        </nav>
      </div>
    </StyledHeader>
  ) : (
    <div></div>
  );
};

export default Header;
