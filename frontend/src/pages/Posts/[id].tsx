import Axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';
import Header from '@/components/Header';
import  StyledPosts  from './Posts.styled';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import Footer from '@/components/Footer';
import dateFormatter from '@/helperFunctions/dateFormatter';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Posts(props: any) {
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
                <link rel="icon" href="https://ik.imagekit.io/Victorliradev/blog_pessoal/assets/js_QxOIctz2p.png?updatedAt=1688608526457" />
            </Head>
            <Header />
            <StyledPosts>
                <div data-aos="fade-down" className='background-image' style={{backgroundImage: `url(https://blog.rocketseat.com.br/content/images/size/w2000/2023/03/clean-code.jpg)`}}>
                    {/* <img src={props.post.post_image} /> */}
                </div>

                <div className='body-post' data-aos="fade-up">
                    <h1 className='title'>{props.post.title}</h1>
                    <p className='date'>{dateFormatter(formattedDate)}</p>
                    <MarkdownRenderer markdown={props.post.content}  />
                </div>
                <div className='writter'>
                    <div className='author'></div>
                    <div className='name-container'>
                        <p className='text-1'>Victor Lira &nbsp; 🚀</p>
                        <p className='text-2'>Content writer @victorlira_ws</p>
                    </div>
                </div>
            </StyledPosts>
            <Footer/>
        </React.Fragment>
    );
}

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
) => {
    const { id } = context.params!;

    const response = await Axios.get('http://localhost:3001/api/get');
    const data = response.data;

    const currentPost = data.find((item: any) => {
        if (item.id == id) {
            return item;
        }
    });

    return {
        props: {
            post: currentPost,
        },
        revalidate: 50,
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    let response = await Axios({
        url: 'http://localhost:3001/api/get',
        method: 'GET',
    });

    return {
        fallback: true,
        paths: response.data.map((post: any) => ({
            params: { id: post.id.toString() },
        })),
    };
};

export default Posts;