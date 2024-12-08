import Head from 'next/head';
import Header from '../components/Header';
import MainPage from '../components/MainPage';
import Post from '@/components/Post';
import About from '@/components/About';
import Footer from '@/components/Footer';
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
import { fetchData } from '@/helperFunctions/fetchData';
import SearchPost from '@/components/SearchPost/SearchPost';
import Pagination from '@/components/Pagination';

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
  totalPages: number;
    next?: {
      page: number;
      limit: number;
    };
    previous?: {
      page: number;
      limit: number;
    };
    results?: PostProps[];
};

export default function Home(props: Data) {
  const { setPage } = useContext(GlobalContext);
  const { scrollIntoViewHandler, containerRef } = useScrollContext();
  const { favoritPosts } = useAddToFavoritsContext();
  const { currentUser } = useCurrentUser();
  const [displayLoginModal, setDisplayLoginModal] = useState(false);
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentData, setCurrentData] = useState<Data>(props)

  useEffect(() => {
    console.log(currentData)
  }, [currentData] )

  useEffect(() => {
    setCurrentData(props)
  }, [props])

  useEffect(() => {
    if (currentData?.results === undefined ) {
      setErrorMessage("Nenhum item encontrado");
      setPage(1);
    } else {
      setErrorMessage("");
      if (currentData.next?.page) {
        setPage(currentData.next.page);
      }
    }

  }, [currentData, setPage]);
  

  useEffect(() => {
    if (currentData && currentData.next?.page) {
      setPage(currentData.next.page);
    }
  }, [currentData, setPage]);

  useEffect(() => {
    AOS.init();
  }, []);

  const checkNextPage = function () {
    if (currentData && currentData.next) {
      return true;
    } else {
      return false;
    }
  };

  const checkPreviousPage = function () {
    if (currentData && currentData?.previous) {
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

  const onOpenSearchModal = function () {
    setOpenSearchModal(prev => !prev);
  };

  const closeSearch = function () {
    setOpenSearchModal(false);
  };

  const updateSearchResults = function (data: Data) {
    setCurrentData(data)
  };

  const resetSearch = function(){
    setCurrentData(props)
  }

  let hasNoPost = errorMessage.length > 2 

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
      <Header
        className="header"
        scrollIntoView={() => scrollIntoViewHandler()}
        onOpenSearchModal={onOpenSearchModal}
        onResetSearch={resetSearch}
      />
      <SearchPost
        displaySearch={openSearchModal}
        onCloseSearch={closeSearch}
        onSearchPosts={updateSearchResults}
      />

      {hasNoPost && <p style={{color: '#fff', paddingTop: 200, textAlign: 'center', fontSize: 30}}>{errorMessage}</p>}
      {!hasNoPost && <About />}

      <MainPage className="main-page">
        <div className="container" ref={containerRef as React.RefObject<HTMLDivElement>}>
          {currentData?.results &&
            currentData.results.map((post: PostProps, index: number) => {
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
        pageLength={Math.ceil(props.totalPages)}
        page={
          props?.next?.page ? props?.next?.page - 1 : Math.ceil(props?.totalPages)
        }
        hasNextPage={checkNextPage()}
        hasPreviousPage={checkPreviousPage()}
        previousPage={props?.previous?.page ? props.previous.page : 1}
        nextPage={props?.next?.page ? props.next.page : 1}
      />
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  try {
    const page = context.query?.page ?? '1';
    const category = context.query?.category ?? 'all';
    const limit = '8';
    const data = await fetchData(page, limit, category);

    return {
      props: {
        ...data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: [], 
      },
    };
  }
};
