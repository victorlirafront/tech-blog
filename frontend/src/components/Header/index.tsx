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
        <StyledHeader>
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </StyledHeader>
    );
};

export default Header;
