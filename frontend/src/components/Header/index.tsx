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
                    <ul>
                        <li>
                            <Link href="/">HOME</Link>
                        </li>
                        <li>
                            <Link href="/">ABOUT ME</Link>
                        </li>
                        <li>
                            <Link href="/">MY SKILLS</Link>
                        </li>
                        <li>
                            <Link href="/">VLOG</Link>
                        </li>
                        <li>
                            <Link href="/">CONTACT ME</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </StyledHeader>
    );
};

export default Header;
