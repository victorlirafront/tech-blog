import Head from 'next/head';
import Header from '../components/Header';
import MainPage from '../components/MainPage';
import Post from '@/components/Post';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Axios from 'axios';
import Pagination from '@/components/Pagination';
import { GlobalContext } from '../Context/pagination';
import { useScrollContext } from '@/Context/scrollProvider';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useAddToFavoritsContext } from '@/Context/addToFavorits';
import { updateFavoritSource } from '@/utils/resusableFunctions';
import { META_TAG_IMAGE, FAVICON } from '@/constants/images';
import LoginAlertModal from '@/components/LoginAlertModal';
import { useCurrentUser } from '@/Context/currentUser';

type PostProps = {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  meta_tag_title: string;
  meta_tag_description: string;
  post_image: string;
  author: string;
};

type Data = {
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
    results: PostProps[];
  };
};

export default function Home({ data }: Data) {
  const { setPage } = useContext(GlobalContext);
  const { scrollIntoViewHandler, containerRef } = useScrollContext();
  const { favoritPosts } = useAddToFavoritsContext();
  const { currentUser } = useCurrentUser();
  const [displayLoginModal, setDisplayLoginModal] = useState(false);

  useEffect(() => {
    setPage(data?.next?.page);
  }, [data?.next?.page, setPage]);

  useEffect(() => {
    AOS.init();
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

  const displayLoginAlert = function () {
    setDisplayLoginModal(true);
  };

  const closeLoginAlertModal = function () {
    setDisplayLoginModal(false);
  };

  return (
    <>
      <Head>
        <title>Victor Lira | Tech Blog</title>
        <meta
          name="keywords"
          content="Victor Lira, JavaScript, React, Next.js, TypeScript, Frontend Development, Web Development, Technology Blog, Coding Tutorials"
        ></meta>
        <meta
          name="description"
          content="Olá, sou Victor Lira, o criador de um blog dedicado a explorar os domínios do JavaScript, React, Next.js, TypeScript e outras tecnologias de front-end de ponta. Junte-se a mim nesta jornada enquanto compartilho insights, tutoriais e dicas para aprimorar suas habilidades e ficar por dentro das últimas tendências em desenvolvimento de front-end. Mergulhe no fascinante mundo do desenvolvimento web através do meu blog e capacite-se com conhecimento e experiência."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Victor Lira" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Victor Lira" />
        <meta property="og:image" content={META_TAG_IMAGE} />
        <meta property="og:url" content="https://www.victorlirablog.com/" />
        <link rel="icon" href={FAVICON} />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3834333278222212"
          crossOrigin="anonymous"
        ></script>
      </Head>
      {!currentUser.email && displayLoginModal && (
        <LoginAlertModal onCloseLoginAlertModal={closeLoginAlertModal} />
      )}
      <Header className="header" scrollIntoView={() => scrollIntoViewHandler()} />
      <About />

      <MainPage className="main-page">
        <div className="container" ref={containerRef as React.RefObject<HTMLDivElement>}>
          {data?.results &&
            data.results.map((post: PostProps, index: number) => {
              let costumizeFirstPost = false;

              index === 0 ? (costumizeFirstPost = true) : false;

              const styled = {
                width: 'calc(66.66667% - 40px)',
                minWidth: '300px',
              };

              return (
                <Post
                  onDisplayLoginAlert={displayLoginAlert}
                  style={costumizeFirstPost ? styled : {}}
                  id={post.id}
                  key={post.id}
                  title={post.title}
                  content={post.content}
                  author={post.author}
                  meta_tag_title={post.meta_tag_title}
                  meta_tag_description={post.meta_tag_description}
                  post_image={post.post_image}
                  date={post.date}
                  category={post.category}
                  aos_delay="100"
                  aos_type="fade-up"
                  hover_animation={-7}
                  onUpdateFavoritSource={updateFavoritSource(favoritPosts, post)}
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
    </>
  );
}

async function fetchData(baseUrl: string) {
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

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  try {
    const page = context.query?.page ?? '1';
    const category = context.query?.category ?? 'all';
    const limit = '8';
    const baseUrl1 = `http://localhost:3001/api/get?page=${page}&limit=${limit}&category=${category}`;
    const baseUrl2 = `https://blog-backend-tau-three.vercel.app/api/get?page=${page}&limit=${limit}&category=${category}`;
    const baseUrl3 = `https://blog-backend-g9k4y75fk-victorlirafront.vercel.app/api/get?page=${page}&limit=${limit}&category=${category}`;
    const baseUrl4 = `https://blog-tau-rosy-55.vercel.app/api/get?page=${page}&limit=${limit}&category=${category}`;
    const baseUrl5 = `https://blog-git-main-victorlirafront.vercel.app/api/get?page=${page}&limit=${limit}&category=${category}`;

    const data =
      (await fetchData(baseUrl1)) ||
      (await fetchData(baseUrl2)) ||
      (await fetchData(baseUrl3)) ||
      (await fetchData(baseUrl4)) ||
      (await fetchData(baseUrl5));

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
