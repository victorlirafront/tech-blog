import React, { useEffect } from 'react';
import Link from 'next/link';
import StyledHeader from './Header.styled';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = function () {
    useEffect(() => {
        AOS.init();
    }, []);

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
                            {/* <select name="" id="">
                                <option disabled value="javascript">Category</option>
                                <option value="Javascript">Javascript</option>
                                <option value="Javascript">React</option>
                                <option value="Javascript">Next</option>
                                <option value="Javascript">HTML</option>
                                <option value="Javascript">CSS</option>
                            </select> */}
                            Category
                        </li>
                    </ul>
                </nav>
            </div>
        </StyledHeader>
    );
};

export default Header;
