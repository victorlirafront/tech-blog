import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import StyledHeader from './Header.styled';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext } from "react";
import { GlobalContext } from '../../Context/pagination';

const Header = function () {
    let { setPage, page, setTotalPages } = useContext(GlobalContext);
    let [isCategoryActive, setIsCategoryActive] = useState(false)

    useEffect(() => {
        AOS.init();
    }, []);

    const categoryToggle = function(e: any){
        setIsCategoryActive(!isCategoryActive);

        if(e.target.classList.contains("option")){
            setPage(2);
        }
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
                        <div>
                            <Link href="/">Home</Link>
                        </div>

                        <div className='category' onClick={(e) => categoryToggle(e)}>
                           <div className='category-conteiner'>
                                <p>Category</p>
                                <img style={css} className={`arrow`} src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow_Qvhukz-ZL.png" alt="" />
                           </div>
                            <div className={`category-options ${isCategoryActive ? 'active' : ""}`}>
                                 <Link className="option" href={"/Pagination/1?category=all"}>All</Link>
                                 <Link className="option" href={"/Pagination/1?category=javascript"}>Javascript</Link>
                                 <Link className="option" href={"/Pagination/1?category=react"}>React</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </StyledHeader>
    );
};

export default Header;
