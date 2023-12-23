import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import StyledHeader from './Header.styled';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext } from "react";
import { GlobalContext } from '../../Context/pagination';

const Header = function () {
    let { setPage } = useContext(GlobalContext);
    let [isCategoryActive, setIsCategoryActive] = useState(false);
    let [currentTab, setCurrentTab] = useState("blog");

    useEffect(() => {
        AOS.init();
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

    let deg = isCategoryActive ? "-180deg" : "0deg"
    let ctrans = `rotate(${deg}) scale(0.7)`;
    let css = {
        transition: "0.2s",
        transform: ctrans
    }

    return (
        <StyledHeader data-aos="fade-down">
            <div className="container">
                <nav>
                    <img className='header-icon' src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/code_2GKuQisNn.png?updatedAt=1697217597567" alt="" />
                    <div className='menu-wrapper'>
                        <div className='div-left'>
                            <Link onClick={() => menuTab("blog")} className={`anchor ${currentTab === "blog" ? "active" : ""}`} href="/">Blog</Link>
                            <Link onClick={() => menuTab("about")} className={`anchor ${currentTab === "about" ? "active" : ""}`} href="/">About me</Link>
                            <Link onClick={() => menuTab("vlog")} className={`anchor ${currentTab === "vlog" ? "active" : ""}`} href="/">Vlog</Link>
                        </div>

                        <div className='category' onClick={(e) => categoryToggle(e)}>
                            <div className='category-conteiner'>
                                <p>Category</p>
                                <img style={css} className={`arrow`} src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow_Qvhukz-ZL.png" alt="" />
                            </div>
                            <div className={`category-options ${isCategoryActive ? 'active' : ""}`}>
                                <Link className="option" href={"/Pagination/1?category=all"}>All</Link>
                                <Link className="option" href={"/Pagination/1?category=javascript"}>Javascript</Link>
                                <Link className="option" href={"/Pagination/1?category=typescript"}>Typescript</Link>
                                <Link className="option" href={"/Pagination/1?category=react"}>React JS</Link>
                                <Link className="option" href={"/Pagination/1?category=next"}>Next JS</Link>
                            </div>
                        </div>
                    </div>
                    <p style={{color:"red"}}>menu</p>
                </nav>
            </div>
        </StyledHeader>
    );
};

export default Header;
