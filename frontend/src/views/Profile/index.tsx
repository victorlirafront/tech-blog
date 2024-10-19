import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import 'aos/dist/aos.css';
import { useScrollContext } from '@/Context/scrollProvider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Axios from 'axios';
import { useAddToFavoritsContext } from '@/Context/addToFavorits';
import Post from '@/components/Post';
import { updateFavoritSource } from '@/utils/resusableFunctions';
import Image from 'next/image';
import StyledProfile from './Profile.styled';
import Header from '@/components/Header';
import { PostsProps } from './types';
import { FAVICON } from '@/constants/images';
import { postsEndPoints } from '@/constants/postsEndPoints';
import { useCurrentUser } from '@/Context/currentUser';
import { useRouter } from 'next/router';

export function Profile() {
  const { scrollIntoViewHandler } = useScrollContext();
  const { favoritPosts } = useAddToFavoritsContext();
  const [currentPostArray, setCurrentPostArray] = useState<PostsProps[]>();
  const { currentUser, callSetCurrentUser } = useCurrentUser();
  const router = useRouter();

  const redirect = async () => {
    try {
      await router.push('/');
    } catch (error) {
      console.error('Redirecionamento falhou:', error);
    }
  };

  const logout = async function () {
    await redirect();

    callSetCurrentUser({
      name: '',
      email: '',
      picture: '',
    });
  };

  useEffect(() => {
    if (!currentUser.email) {
      router.push('/');
    }

    const buildUrl = (baseUrl: string, page: string, limit: string, category: string) =>
      `${baseUrl}/api/get/?page=${page}&limit=${limit}&category=${category}`;

    const fetchData = async (baseUrl: string) => {
      try {
        const response = await Axios.get(baseUrl);
        const results = response.data.results;

        const intersecao = results.filter((variant1: PostsProps) =>
          favoritPosts.some(variant2 => variant2.post === variant1.id),
        );

        return intersecao.length > 0 ? intersecao : null;
      } catch (error) {
        console.error(`Erro na requisição: ${error}`);
        return null;
      }
    };

    const fetchDataFromUrls = async (
      postsEndPoints: string[],
      page: string,
      limit: string,
      category: string,
    ) => {
      for (const baseUrl of postsEndPoints) {
        const url = buildUrl(baseUrl, page, limit, category);
        const data = await fetchData(url);
        if (data) {
          return data;
        }
      }
      return [];
    };

    const fetchDataAndUpdateState = async () => {
      try {
        const data = await fetchDataFromUrls(postsEndPoints, '1', '9999', 'all');
        if (data) {
          setCurrentPostArray(data);
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchDataAndUpdateState();
  }, [favoritPosts, currentUser]);

  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta
          name="keywords"
          content="Victor Lira, JavaScript, React, Next.js, TypeScript, Frontend Development, Web Development, Technology Blog, Coding Tutorials"
        ></meta>
        <meta
          name="description"
          content="Olá, sou Victor Lira, o criador de um blog dedicado a explorar os domínios do JavaScript, React, Next.js, TypeScript e outras tecnologias de front-end de ponta. Junte-se a mim nesta jornada enquanto compartilho insights, tutoriais e dicas para aprimorar suas habilidades e ficar por dentro das últimas tendências em desenvolvimento de front-end. Mergulhe no fascinante mundo do desenvolvimento web através do meu blog e capacite-se com conhecimento e experiência."
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href={FAVICON} />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3834333278222212"
          crossOrigin="anonymous"
        ></script>
      </Head>

      {currentUser.email && (
        <Header className="header" scrollIntoView={() => scrollIntoViewHandler()} />
      )}

      {currentUser.email && (
        <StyledProfile data-aos="fade-down" data-aos-delay="200">
          <div className="profile">
            <div className="profile-information">
              <Image src={currentUser.picture} width={100} height={100} alt="profile picture" />
              <div className="box">
                <p className="name">{currentUser.name}</p>
                <p>{currentUser.email}</p>
              </div>
            </div>

            <div className="logout-box">
              <button onClick={logout}>Sair</button>
            </div>
          </div>

          <h1 className="favorit-post-title">Postagens favoritas</h1>
          <div className="container">
            {currentPostArray ? (
              currentPostArray.map(post => {
                return (
                  <Post
                    style={{}}
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
              })
            ) : (
              <div>
                <Image src="/loading.gif" width={100} height={100} alt="loading icon" />
              </div>
            )}
          </div>
        </StyledProfile>
      )}
      {currentUser.email && <Footer />}
    </div>
  );
}
