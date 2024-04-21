import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import 'aos/dist/aos.css';
import { useTheme } from '@/Context/darkmode';
import { lightTheme, darkTheme } from '../../components/themes/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from '@/components/themes/GlobalStyles';
import { ThemeContainer } from '@/components/themes/ThemeContainer.styled';
import { useScrollContext } from '@/Context/scrollProvider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StyledProfile from './Profile.styled';

interface IProfile {
  firstName: string;
  lastName: string;
}

function Profile() {
  const { theme, toggleTheme } = useTheme();
  const { scrollIntoViewHandler } = useScrollContext();
  const [user, setUser] = useState<IProfile>({
    firstName: '',
    lastName: '',
  });

  const themeToggler = function () {
    toggleTheme();
  };

  useEffect(() => {
    const currentUserJSON = localStorage.getItem('currentUser');
    if (currentUserJSON) {
      const currentUser = JSON.parse(currentUserJSON);
      setUser(currentUser);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta name="description" content="teste"></meta>
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          href="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/binary-code_WBpGXnWnG.png?updatedAt=1700431546132"
        />
      </Head>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyled />
        <ThemeContainer>
          <Header
            className="header"
            theme={theme}
            themeToggler={() => themeToggler()}
            scrollIntoView={() => scrollIntoViewHandler()}
          />
          <StyledProfile data-aos="fade-down" data-aos-delay="200">
            <h1>
              Hello {user.firstName} {user.lastName}
            </h1>
            <h1> Be very welcome : )</h1>
          </StyledProfile>
          <Footer />
        </ThemeContainer>
      </ThemeProvider>
    </div>
  );
}

export default Profile;
