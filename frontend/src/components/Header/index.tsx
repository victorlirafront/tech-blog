'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import StyledHeader from './Header.styled';
import AOS from 'aos';
import { useContext } from 'react';
import { GlobalContext } from '../../Context/pagination';
import Image from 'next/image';
import DarkModeToggle from '../DarkModeToggle';

interface IHeaderProps {
  scrollIntoView?: () => void;
  theme: string;
  className: string;
  themeToggler: () => void;
}

interface UrlParams {
  page: string;
  category: string;
}

const Header = function (props: IHeaderProps) {
  const { setPage } = useContext(GlobalContext);
  const [isCategoryActive, setIsCategoryActive] = useState(false);
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
    if (urlParams.page === '0') return;

    router.push({
      pathname: '/',
      query: {
        page: urlParams.page,
        category: urlParams.category,
      },
    });
  }, [urlParams, router]);

  const menuToggleBaseOnUrl = useCallback(() => {
    if (currentUrl.includes('AboutMe')) {
      setCurrentTab('about');
    } else {
      setCurrentTab('blog');
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

  const categoryToggle = function (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    setIsCategoryActive(!isCategoryActive);

    if ((e.target as HTMLElement).classList.contains('option')) {
      setPage(2);
    }
  };
  const menuTab = function (currentPage: string) {
    setCurrentTab(currentPage);
  };

  const showMobileMenu = function () {
    setOpenMobileMenu(true);
  };

  const categoryOptionHandler = function (route: string, category: string) {
    setUrlParams({
      page: route,
      category: category,
    });

    hideMobileMenu();

    const handleRouteChangeComplete = () => {
      if (props && props.scrollIntoView) {
        props.scrollIntoView();
      }
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);
  };

  const hideMobileMenu = function () {
    setOpenMobileMenu(false);
  };

  const menuHandler = function (menuOption: string) {
    hideMobileMenu();
    menuTab(menuOption);
  };

  const deg = !isCategoryActive ? '-180deg' : '0deg';
  const ctrans = `rotate(${deg}) scale(0.7)`;
  const css = {
    transition: '0.2s',
    transform: ctrans,
  };

  return shouldRender ? (
    <StyledHeader data-aos={headerFadeDown} className={props.className}>
      <div className="container">
        <nav>
          <Link className="home" href="/">
            <Image
              width={50}
              height={40}
              className="header-icon"
              src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/code_2GKuQisNn.png?updatedAt=1697217597567"
              alt=""
            />
          </Link>
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
              <Link
                onClick={() => menuHandler('blog')}
                className={`anchor ${currentTab === 'blog' ? 'active' : ''}`}
                href="/"
              >
                Blog
              </Link>
              <Link
                onClick={() => menuHandler('about')}
                className={`anchor ${currentTab === 'about' ? 'active' : ''}`}
                href="/AboutMe"
              >
                Portfolio
              </Link>
              <div className="category" onClick={e => categoryToggle(e)}>
                <div className="category-conteiner">
                  <p>Category</p>
                  <Image
                    width={40}
                    height={40}
                    style={css}
                    className={`arrow`}
                    src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow_Qvhukz-ZL.png"
                    alt=""
                  />
                </div>
                <ul
                  className={`category-options ${
                    !isCategoryActive ? '' : 'active'
                  }`}
                >
                  <li
                    className="option"
                    onClick={() => categoryOptionHandler('1', 'all')}
                  >
                    All
                  </li>
                  <li
                    className="option"
                    onClick={() => categoryOptionHandler('1', 'javascript')}
                  >
                    JavaScript
                  </li>
                  <li
                    className="option"
                    onClick={() => categoryOptionHandler('1', 'typescript')}
                  >
                    TypeScript
                  </li>
                  <li
                    className="option"
                    onClick={() => categoryOptionHandler('1', 'react')}
                  >
                    React JS
                  </li>
                  <li
                    className="option"
                    onClick={() => categoryOptionHandler('1', 'next')}
                  >
                    Next JS
                  </li>
                </ul>
              </div>
            </div>
            <DarkModeToggle
              themeMode={props.theme}
              onclick={props.themeToggler}
            ></DarkModeToggle>
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
