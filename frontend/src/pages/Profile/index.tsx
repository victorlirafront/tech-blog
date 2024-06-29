import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import 'aos/dist/aos.css';
import { useScrollContext } from '@/Context/scrollProvider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StyledProfile from './Profile.styled';
import axios from 'axios';
import { useAddToFavoritsContext } from '@/Context/addToFavorits';
import Post from '@/components/Post';
import { updateFavoritSource } from '@/utils/resusableFunctions';

interface IProfile {
  firstName: string;
  lastName: string;
}

interface IPost {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  meta_tag_title: string;
  meta_tag_description: string;
  post_image: string;
  author: string;
}

function Profile() {
  const { scrollIntoViewHandler } = useScrollContext();
  const { favoritPosts } = useAddToFavoritsContext();
  const [currentPostArray, setCurrentPostArray] = useState<IPost[]>();
  const [user, setUser] = useState<IProfile>({
    firstName: '',
    lastName: '',
  });

  useEffect(() => {
    const currentUserJSON = localStorage.getItem('currentUser');
    if (currentUserJSON) {
      const currentUser = JSON.parse(currentUserJSON);
      setUser(currentUser);
    }

    async function fetchData(baseUrl: string) {
      try {
        const response = await axios.get(baseUrl);
        const results = response.data.results;

        if (favoritPosts.length === 1 && favoritPosts[0].post === 1) return;
        if (results.length > 0) {
          const intersecao = results.filter((variant1: IPost) =>
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
        <meta name="description" content="teste"></meta>
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          href="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/binary-code_WBpGXnWnG.png?updatedAt=1700431546132"
        />
      </Head>
      <Header className="header" scrollIntoView={() => scrollIntoViewHandler()} />
      <StyledProfile data-aos="fade-down" data-aos-delay="200">
        <h1>
          Hello {user.firstName} {user.lastName}
        </h1>
        <h1> - These are your favorite posts - </h1>
        <div className="container">
          {currentPostArray &&
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
            })}
        </div>
      </StyledProfile>
      <Footer />
    </div>
  );
}

export default Profile;
