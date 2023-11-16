import React, { useEffect } from 'react';
import Link from 'next/link';
import StyledHeader from './Header.styled';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';

const Header = function () {
    useEffect(() => {
        AOS.init();
    }, []);

    const router = useRouter();
    const changeHandler = function(event: any){
        const category = event.target.value
       if(category){
        router.push(`/Pagination/1?category=${category}`);
       }
    }

    return (
        <StyledHeader data-aos="fade-down">
            <div className="container">
                <nav>
                    <img className='header-icon' src="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/code_2GKuQisNn.png?updatedAt=1697217597567" alt="" />
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            {/* <Link href="/Pagination/1?category=react">teste</Link> */}
                            <select name="" id="" onChange={(event) => changeHandler(event)}>
                                <option disabled selected value="">Category</option>
                                <option value="javascript">Javascript</option>
                                <option value="react">React</option>
                            </select>
                        </li>
                    </ul>
                </nav>
            </div>
        </StyledHeader>
    );
};

export default Header;
