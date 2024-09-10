import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import 'aos/dist/aos.css';
import { useScrollContext } from '@/Context/scrollProvider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { useAddToFavoritsContext } from '@/Context/addToFavorits';
import Post from '@/components/Post';
import { updateFavoritSource } from '@/utils/resusableFunctions';
import Image from 'next/image';
import StyledProfile from './Profile.styled';
import Header from '@/components/Header';
import { PostsProps } from './types';
import { FAVICON } from '@/constants/images';

export function Profile() {
  const { scrollIntoViewHandler } = useScrollContext();
  const { favoritPosts } = useAddToFavoritsContext();
  const [currentPostArray, setCurrentPostArray] = useState<PostsProps[]>();

  useEffect(() => {
    async function fetchData(baseUrl: string) {
      try {
        const response = await axios.get(baseUrl);
        const results = response.data.results;

        if (favoritPosts.length === 1 && favoritPosts[0].post === 1) return;
        if (results.length > 0) {
          const intersecao = results.filter((variant1: PostsProps) =>
            favoritPosts.some(variant2 => variant2.post === variant1.id),
          );
          if (intersecao) {
            setCurrentPostArray(intersecao);
          }
        }
      } catch (error) {
        console.error(`Erro na requisição: ${error}`);
      }

      return null;
    }

    fetchData('https://blog-tau-rosy-55.vercel.app/api/get?page=1&limit=9999&category=all');
  }, [favoritPosts]);

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
        <link
          rel="icon"
          href={FAVICON}
        />
      </Head>
      <Header className="header" scrollIntoView={() => scrollIntoViewHandler()} />
      <StyledProfile data-aos="fade-down" data-aos-delay="200">
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
      <Footer />
    </div>
  );
}