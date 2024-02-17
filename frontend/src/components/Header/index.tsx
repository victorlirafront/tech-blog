'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import StyledHeader from './Header.styled';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext } from "react";
import { GlobalContext } from '../../Context/pagination';
import Image from 'next/image';

interface IHeaderProps {
    scrollIntoView?: () => void;
}

const Header = function (props: IHeaderProps) {
    let { setPage } = useContext(GlobalContext);
    let [isCategoryActive, setIsCategoryActive] = useState(false);
    let [currentTab, setCurrentTab] = useState("");
    let [openMobileMenu, setOpenMobileMenu] = useState(false)
    const router = useRouter();
    const currentUrl = router.asPath;
    const [headerFadeDown, setHeaderFadeDown] = useState("fade-down");

    const menuToggleBaseOnUrl = function(){
        if(currentUrl.includes("AboutMe")){
            setCurrentTab("about")
        }else{
            setCurrentTab("blog")
        }
    }

    useEffect(() => {
        AOS.init();
        menuToggleBaseOnUrl();

        const updateWindowWidth = () => {
            if(window.innerWidth < 700){
                setHeaderFadeDown("")
            }
        };

        updateWindowWidth();
    }, []);

    const categoryToggle = function (e: any) {
        setIsCategoryActive(!isCategoryActive);

        if (e.target.classList.contains("option")) {
            setPage(2);
        }
    }

    const menuTab = function (currentPage: any) {
        setCurrentTab(currentPage);
    }

    const showMobileMenu = function(){
        setOpenMobileMenu(true)
    }

    const categoryOptionHandler = function(route: string){
        hideMobileMenu();
        router.push(route);
    }

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            if (url) {
                if (props && props.scrollIntoView) {
                    props.scrollIntoView();
                }
            }
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };

    }, [router.events]);

    const hideMobileMenu = function(){
        setOpenMobileMenu(false)
    }

    const menuHandler = function(menuOption: string){
        hideMobileMenu();
        menuTab(menuOption);
    }

    let deg = isCategoryActive ? "-180deg" : "0deg"
    let ctrans = `rotate(${deg}) scale(0.7)`;
    let css = {
        transition: "0.2s",
        transform: ctrans
    }

    return (
        <StyledHeader data-aos={headerFadeDown}> 
            <div className="container">
                <nav>
                    <Link className='home' href="/">
                        <Image width={50} height={40} className='header-icon' src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/code_2GKuQisNn.png?updatedAt=1697217597567" alt="" />
                    </Link>
                    <div className={`menu-wrapper ${openMobileMenu ? "active" : ""}`}>
                        
                        <Image width={50} height={20} onClick={() => hideMobileMenu()} className='close' src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/close_eNQqVeiw3.png?updatedAt=1703309380667" alt="" />

                        <div className='div-left'>
                            <Link onClick={() => menuHandler("blog")} className={`anchor ${currentTab === "blog" ? "active" : ""}`} href="/">Blog</Link>
                            <Link onClick={() => menuHandler("about")} className={`anchor ${currentTab === "about" ? "active" : ""}`} href="/AboutMe">Portfolio</Link>
                        </div>

                        <div className='category' onClick={(e) => categoryToggle(e)}>
                            <div className='category-conteiner'>
                                <p>Category</p>
                                <Image width={40} height={40} style={css} className={`arrow`} src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow_Qvhukz-ZL.png" alt="" />
                            </div>
                            <ul className={`category-options ${isCategoryActive ? 'active' : ""}`}>
                                <li className="option" onClick={() => categoryOptionHandler("/Pagination/1?category=all")}>All</li>
                                <li className="option" onClick={() => categoryOptionHandler("/Pagination/1?category=javascript")}>JavaScript</li>
                                <li className="option" onClick={() => categoryOptionHandler("/Pagination/1?category=typescript")}>TypeScript</li>
                                <li className="option" onClick={() => categoryOptionHandler("/Pagination/1?category=react")}>React JS</li>
                                <li className="option" onClick={() => categoryOptionHandler("/Pagination/1?category=next")}>Next JS</li>
                            </ul>
                        </div>
                    </div>
                    <Image width={50} height={50} onClick={() => showMobileMenu()} className={`menu-hamburguer`} src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/hamburguer_1id8uhYeQ.png?updatedAt=1703307554746" alt="" />
                </nav>
            </div>
        </StyledHeader>
    );
};

export default Header;
