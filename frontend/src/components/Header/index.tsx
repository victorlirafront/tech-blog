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

const Header = function () {
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
        //esse display: none inline precisa ser corrigido
        //fiz isso pois o DOM esta carrgado o header com delay no CSS
        <StyledHeader data-aos={headerFadeDown}> 
            <div className="container">
                <nav>
                    <Link href="/">
                        <Image width={50} height={40} className='header-icon' src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/code_2GKuQisNn.png?updatedAt=1697217597567" alt="" />
                    </Link>
                    <div className={`menu-wrapper ${openMobileMenu ? "active" : ""}`}>
                        
                        <Image width={50} height={20} onClick={() => hideMobileMenu()} className='close' src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/close_eNQqVeiw3.png?updatedAt=1703309380667" alt="" />

                        <div className='div-left'>
                            <Link onClick={() => menuHandler("blog")} className={`anchor ${currentTab === "blog" ? "active" : ""}`} href="/">Blog</Link>
                            <Link onClick={() => menuHandler("about")} className={`anchor ${currentTab === "about" ? "active" : ""}`} href="/AboutMe">About me</Link>
                            {/* <Link onClick={() => menuHandler("vlog")} className={`anchor ${currentTab === "vlog" ? "active" : ""}`} href="/">Vlog</Link> */}
                        </div>

                        <div className='category' onClick={(e) => categoryToggle(e)}>
                            <div className='category-conteiner'>
                                <p>Category</p>
                                <Image width={40} height={40} style={css} className={`arrow`} src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow_Qvhukz-ZL.png" alt="" />
                            </div>
                            <div className={`category-options ${isCategoryActive ? 'active' : ""}`}>
                                <Link className="option" onClick={() => hideMobileMenu()} href={"/Pagination/1?category=all"}>All</Link>
                                <Link className="option" onClick={() => hideMobileMenu()} href={"/Pagination/1?category=javascript"}>JavaScript</Link>
                                <Link className="option" onClick={() => hideMobileMenu()} href={"/Pagination/1?category=typescript"}>TypeScript</Link>
                                <Link className="option" onClick={() => hideMobileMenu()} href={"/Pagination/1?category=react"}>React JS</Link>
                                <Link className="option" onClick={() => hideMobileMenu()} href={"/Pagination/1?category=next"}>Next JS</Link>
                            </div>
                        </div>
                    </div>
                    <Image width={50} height={50} onClick={() => showMobileMenu()} className={`menu-hamburguer`} src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/hamburguer_1id8uhYeQ.png?updatedAt=1703307554746" alt="" />
                </nav>
            </div>
        </StyledHeader>
    );
};

export default Header;
