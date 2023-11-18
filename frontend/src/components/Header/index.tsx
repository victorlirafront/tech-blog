import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import StyledHeader from './Header.styled';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';
import { useContext } from "react";
import { GlobalContext } from '../../Context/pagination';

const Header = function () {
    let { setPage, page, setTotalPages } = useContext(GlobalContext);
    let [isCategoryActive, setIsCategoryActive] = useState(false)

    useEffect(() => {
        AOS.init();
    }, []);

    const router = useRouter();
    const changeHandler = function(event: any){
        const category = event.target.value
       if(category){
            router.push(`/Pagination/1?category=${category}`);
            setPage(2);
       }
    }

    const categoryToggle = function(){
        setIsCategoryActive(!isCategoryActive)
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
                        {/* <li>
                            <select name="" id="" onChange={(event) => changeHandler(event)}>
                                <option disabled selected value="">Category</option>
                                <option value="all">All</option>
                                <option value="javascript">Javascript</option>
                                <option value="react">React</option>
                            </select>
                        </li> */}
                        <div className='category' onClick={() => categoryToggle()}>
                           <div className='category-conteiner'>
                                <p>Category</p>
                                <img className={`arrow ${isCategoryActive ? 'active' : ""}`} src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/arrow_Qvhukz-ZL.png" alt="" />
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
