'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import StyledHeader from './Header.styled';
import AOS from 'aos';
import Image from 'next/image';
import { IHeaderProps, UrlParams } from './Interface';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const Header = function (props: IHeaderProps) {
  const [currentTab, setCurrentTab] = useState('');
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const router = useRouter();
  const currentUrl = router.asPath;
  const [headerFadeDown, setHeaderFadeDown] = useState('fade-down');
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

    const handleRouteChangeComplete = () => {
      if (props && props.scrollIntoView && urlParams.category !== 'all') {
        props.scrollIntoView();
      }
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);
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
  };

  const hideMobileMenu = function () {
    setOpenMobileMenu(false);
  };

  const goBackToHomePage = function () {
    categoryOptionHandler('1', 'all');
  };

  return (
    <StyledHeader data-aos={headerFadeDown} className={props.className}>
      <div className="container">
        <nav>
          <div className="home" onClick={goBackToHomePage}>
            <Image
              width={50}
              height={40}
              className="header-icon"
              src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/code_2GKuQisNn.png?updatedAt=1697217597567"
              alt="header icon"
            />
          </div>
          <div className={`menu-wrapper ${openMobileMenu ? 'active' : ''}`}>
            <Image
              width={50}
              height={20}
              onClick={() => hideMobileMenu()}
              className="close"
              src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/close_eNQqVeiw3.png?updatedAt=1703309380667"
              alt="close menu"
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
                  className={`typescript-option ${currentTab === 'typescript' ? 'active' : ''}`}
                  onClick={() => categoryOptionHandler('1', 'typescript')}
                >
                  Mobile
                </p>
                <p
                  className={`react-option ${currentTab === 'react' ? 'active' : ''}`}
                  onClick={() => categoryOptionHandler('1', 'react')}
                >
                  Práticas
                </p>
              </div>
              <Link className={`anchor ${currentTab === 'about' ? 'active' : ''}`} href="/AboutMe">
                Portfólio
              </Link>
            </div>
            <div>
              <GoogleLogin
                text="signin"
                width={100}
                theme={'filled_black'}
                onSuccess={(credentialResponse: CredentialResponse) => {
                  if (credentialResponse?.credential) {
                    const decoded = jwtDecode(credentialResponse?.credential);
                    console.log(decoded);
                  }
                }}
                onError={() => {
                  console.log('Login error');
                }}
              />
            </div>
          </div>
          <Image
            width={50}
            height={50}
            onClick={() => showMobileMenu()}
            className={`menu-hamburguer`}
            src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/hamburguer_1id8uhYeQ.png?updatedAt=1703307554746"
            alt="menu"
          />
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
