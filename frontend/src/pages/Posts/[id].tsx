import Axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Header from '@/components/Header';
import StyledPosts from './Posts.styled';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import Footer from '@/components/Footer';
import dateFormatter from '@/helperFunctions/dateFormatter';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface IProps {
    post: {
        post_background: string
        date: string
        meta_tag_title: string
        meta_tag_description: string
        title: string
        content: string
        post_image: string
    }
}

interface ICurrentPost {
    id: number
}

function Posts(props: IProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
        AOS.init();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const dateObject = new Date(props.post.date);
    const formattedDate = dateObject.toLocaleDateString();

    return (
        <React.Fragment>
            <Head>
                <title>{props.post.meta_tag_title}</title>
                <meta
                    name="description"
                    content={`${props.post.meta_tag_description}`}
                ></meta>
                <link rel="icon" href="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/binary-code_WBpGXnWnG.png?updatedAt=1700431546132" />
            </Head>
            <Header />
            <StyledPosts>
                <div data-aos="fade-down" className='background-image' style={{ backgroundImage: `url(${props.post.post_background})` }}></div>

                <div className='body-post' data-aos="fade-up">
                    <h1 className='title'>{props.post.title}</h1>
                    <p className='date'>{dateFormatter(formattedDate)}</p>
                    <MarkdownRenderer markdown={props.post.content} />
                </div>
                <div className='writter'>
                    <div className='author'></div>
                    <div className='name-container'>
                        <p className='text-1'>Victor Lira &nbsp; 🚀</p>
                        <p className='text-2'>Content writer @victorlira_ws</p>
                    </div>
                </div>
            </StyledPosts>
            <Footer />
        </React.Fragment>
    );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.params!;

  try {
    //MELHORAR ISSO AQUI
    const response = await Axios.get(
      'http://localhost:3001/api/get?page=1&limit=100&category=all'
    );

    const data = response.data.results;

    const currentPost = data.find((post: ICurrentPost) => {
      return String(post.id) === String(id);
    });

    if (!currentPost) {
      // Se o post não for encontrado, retornar uma página 404
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post: currentPost,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }
};
export default Posts;