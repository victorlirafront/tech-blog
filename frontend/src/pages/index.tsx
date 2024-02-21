import Head from 'next/head';
import { Fragment } from 'react';
import Header from '../components/Header';
import MainPage from './MainPage';
import Post from '@/components/Post';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Axios from 'axios';
import Pagination from '@/components/Pagination';
import { GlobalContext } from '../Context/pagination';
import { useScrollContext } from '@/Context/scrollProvider';
import { useContext } from 'react';
import { useEffect, useRef } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useTheme } from '@/Context/darkmode';
import { lightTheme, darkTheme } from "../theme"
import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from '@/GlobalStyles';
import { ThemeContainer } from '@/ThemeContainer.styled';

interface IPost {
   id: any;
   title: string;
   content: string;
   date: string;
   category: string;
   meta_tag_title: string;
   meta_tag_description: string;
   post_image: string;
   author: string;
}

interface IData {
   data: {
      totalPages: number;
      next: {
         page: number;
         limit: number;
      };
      previous: {
         page: number;
         limit: number;
      };
      results: IPost[];
   };
}

export default function Home({ data }: IData) {
   const { setPage } = useContext(GlobalContext);
   const { theme, toggleTheme } = useTheme();
   const { scrollIntoViewHandler, containerRef } = useScrollContext();

   const themeToggler = function () {
      toggleTheme()
   }

   useEffect(() => {
      AOS.init();
      setPage(data?.next?.page);
   }, []);

   const checkNextPage = function () {
      if (data?.next) {
         return true;
      } else {
         return false;
      }
   };

   const checkPreviousPage = function () {
      if (data?.previous) {
         return true;
      } else {
         return false;
      }
   };

   return (
      <Fragment>
         <Head>
            <title>Victor Lira | Tech Blog</title>
            <meta name="keywords" content="Victor Lira, JavaScript, React, Next.js, TypeScript, Frontend Development, Web Development, Technology Blog, Coding Tutorials"></meta>
            <meta
               name="description"
               content="Hello, I'm Victor Lira, the creator behind a blog dedicated to exploring the realms of JavaScript, React, Next.js, TypeScript, and other cutting-edge frontend technologies. Join me on this journey as I share insights, tutorials, and tips to enhance your skills and stay abreast of the latest trends in frontend development. Dive into the fascinating world of web development through my blog and empower yourself with knowledge and expertise."
            />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <script
               async={true}
               src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3834333278222212"
               crossOrigin="anonymous"
            ></script>
            <meta
               name="google-adsense-account"
               content="ca-pub-3834333278222212"
            ></meta>
            <meta name="author" content="Victor Lira" />
            <meta name="robots" content="index, follow" />
            <meta property="og:site_name" content="Victor Lira" />
            <meta
               property="og:image"
               content="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/capa_Lt5CpWfSYm.png?updatedAt=1707230740618"
            />
            <meta
               property="og:url"
               content="https://www.victorlirablog.com/"
            />
            <link
               rel="icon"
               href="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/binary-code_WBpGXnWnG.png?updatedAt=1700431546132"
            />
         </Head>
         <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyled theme={theme === "light" ? lightTheme : darkTheme} />
            <ThemeContainer>
               <Header className="header" theme={theme} themeToggler={() => themeToggler()} scrollIntoView={() => scrollIntoViewHandler()} />
               <About />
               <MainPage className="main-page">
                  <div className="container" ref={containerRef as React.RefObject<HTMLDivElement>}>

                     {data?.results &&
                        data.results.map((post: IPost, index: number) => {
                           let costumizeFirstPost = false;

                           index === 0 ? (costumizeFirstPost = true) : false;

                           const styled = {
                              width: 'calc(66.66667% - 40px)',
                              minWidth: '300px',
                           };

                           return (
                              <Post
                                 style={costumizeFirstPost ? styled : {}}
                                 key={post.id}
                                 id={post.id}
                                 title={post.title}
                                 content={post.content}
                                 author={post.author}
                                 meta_tag_title={post.meta_tag_title}
                                 meta_tag_description={
                                    post.meta_tag_description
                                 }
                                 post_image={post.post_image}
                                 date={post.date}
                                 category={post.category}
                                 aos_delay="100"
                                 aos_type="fade-up"
                                 hover_animation={-7}
                              />
                           );
                        })}
                  </div>
               </MainPage>
               <Pagination
                  pageLength={Math.ceil(data?.totalPages)}
                  page={data?.next?.page ? data?.next?.page - 1 : Math.ceil(data?.totalPages)}
                  hasNextPage={checkNextPage()}
                  hasPreviousPage={checkPreviousPage()}
                  previousPage={data?.previous?.page ? data.previous.page : 1}
                  nextPage={data?.next?.page}
               />
               <Footer />
            </ThemeContainer>
         </ThemeProvider>
      </Fragment>
   );
}

async function fetchData(baseUrl: any) {
   try {
      const response = await Axios.get(baseUrl);
      const results = response.data.results;

      if (results.length > 0) {
         return response.data;
      }
   } catch (error) {
      console.error(`Erro na requisição: ${error}`);
   }

   return null;
}

export const getServerSideProps = async (context: any) => {
   try {

      const page = context.query?.page ?? "1";
      const category = context.query?.category ?? "all";
      const limit = '8';
      //Estou usando API gratuita com limite de requisições
      //então criei varioes endpoits para não quebrar a aplicação
      const baseUrl1 = `https://blog-backend-tau-three.vercel.app/api/get?page=${page}&limit=${limit}&category=${category}`;
      const baseUrl2 = `https://blog-backend-g9k4y75fk-victorlirafront.vercel.app/api/get?page=${page}&limit=${limit}&category=${category}`;
      const baseUrl3 = `https://blog-tau-rosy-55.vercel.app/api/get?page=${page}&limit=${limit}&category=${category}`;
      const baseUrl4 = `https://blog-git-main-victorlirafront.vercel.app/api/get?page=${page}&limit=${limit}&category=${category}`;

      const data =
         (await fetchData(baseUrl1)) ||
         (await fetchData(baseUrl2)) ||
         (await fetchData(baseUrl3)) ||
         (await fetchData(baseUrl4));

      return {
         props: {
            data, // Pass the extracted data as props
         },
      };
   } catch (error) {
      console.error('Error fetching data:', error);
      return {
         props: {
            data: [], // Return an empty array or handle the error as needed
         },
      };
   }
};
