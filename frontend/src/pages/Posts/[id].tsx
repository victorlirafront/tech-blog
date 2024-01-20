import Axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Header from '@/components/Header';
import StyledPostNew from './Posts.styled';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import Footer from '@/components/Footer';
import dateFormatter from '@/helperFunctions/dateFormatter';
import Post from '@/components/Post';
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
        author: string
        keywords: string
    },
    data: any
}

interface ICurrentPost {
    id: number
}

function Posts(props: IProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [lastPosts, setLastPost] = useState([])

    useEffect(() => {
        setIsLoading(false);
        AOS.init();
        setLastPost(props.data.slice(0, 3))
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const dateObject = new Date(props.post.date);
    const formattedDate = dateObject.toLocaleDateString();

    return (
        <StyledPostNew>
            <Head>
                <title>{props.post.meta_tag_title}</title>
                <meta
                    name="description"
                    content={props.post.meta_tag_description}
                ></meta>
                 <meta name="author" content={props.post.author} />
                 <meta name="robots" content="index, follow" />
                 <meta name="keywords" content={props.post.keywords} />
                <link rel="icon" href="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/binary-code_WBpGXnWnG.png?updatedAt=1700431546132" />
            </Head>
            <Header />
            <div className='profile'>
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
            </div>
            <h1 className='title'>Last Posts</h1>
            <div className='last-posts'>
                {lastPosts.map((post: any) => {
                    return (
                        <Post
                            id={post.id}
                            category={post.category}
                            content={post.content}
                            date={post.date}
                            meta_tag_description='teste'
                            meta_tag_title='teste'
                            title={post.title}
                            post_image={post.post_image}
                            author={post.author}
                            className={post}
                        />
                    )
                })}
            </div>
            <Footer />
        </StyledPostNew>
    );
}

async function fetchData(baseUrl: any) {
    try {
        const response = await Axios.get(baseUrl);
        const results = response.data.results;

        if (results.length > 0) {
            return results;
        }
    } catch (error) {
        console.error(`Erro na requisição: ${error}`);
    }

    return null;
}

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const { id } = context.params!;

    try {
        //Estou usando API gratuita com limite de requisições 
        //então criei varioes endpoits para não quebrar a aplicação
        const baseUrl1 = 'https://blog-backend-tau-three.vercel.app/api/get?page=1&limit=100&category=all';
        const baseUrl2 = 'https://blog-backend-g9k4y75fk-victorlirafront.vercel.app/api/get?page=1&limit=100&category=all';
        const baseUrl3 = "https://blog-tau-rosy-55.vercel.app/api/get?page=1&limit=100&category=all";
        const baseUrl4 = "https://blog-git-main-victorlirafront.vercel.app/api/get?page=1&limit=100&category=all"

        const data = await fetchData(baseUrl1) || await fetchData(baseUrl2) || await fetchData(baseUrl3) || await fetchData(baseUrl4);

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
                data: data
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