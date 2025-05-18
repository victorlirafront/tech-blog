import Head from 'next/head';
import React, { useCallback, useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useAddToFavoritsContext } from '@/Context/addToFavorits';
import Post from '@/components/Post';
import Image from 'next/image';
import StyledProfile from './Profile.styled';
import { PostsProps } from './types';
import { FAVICON } from '@/constants/images';
import { useCurrentUser } from '@/Context/currentUser';
import { useRouter } from 'next/router';
import { updateFavoritSource } from '@/helper/functions/updateFavoritSource';
import { PostsService } from '@/services/PostsService';

function Profile() {
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

  const filterFavoritPosts = useCallback(
    (results: PostsProps[]) => {
      const intersection = results.filter((variant1: PostsProps) =>
        favoritPosts.some(variant2 => variant2.post === variant1.id),
      );
      return intersection;
    },
    [favoritPosts],
  );

  useEffect(() => {
    if (!currentUser.email) {
      router.push('/');
    }

    const fetchDataAndUpdateState = async () => {
      try {
        const page = '1';
        const limit = '9999';
        const category = 'all';

        const data = await PostsService.getAllPosts(page, limit, category);
        const results = data.results;
        const intersection = filterFavoritPosts(results);

        if (intersection) {
          setCurrentPostArray(intersection);
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchDataAndUpdateState();
  }, [favoritPosts, currentUser, router, filterFavoritPosts]);


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
    </div>
  );
}


export default Profile