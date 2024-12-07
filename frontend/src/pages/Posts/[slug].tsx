import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import {GetStaticPaths, GetStaticProps } from 'next';
import Header from '@/components/Header';
import StyledPostNew from './Posts.styled';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import Footer from '@/components/Footer';
import dateFormatter from '@/helperFunctions/dateFormatter';
import Post from '@/components/Post';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import { useScrollContext } from '@/Context/scrollProvider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from 'next/image';
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  TelegramShareButton,
} from 'react-share';
import { useAddToFavoritsContext } from '@/Context/addToFavorits';
import { updateFavoritSource } from '@/utils/resusableFunctions';
import { FAVICON, POST_BACKGROUND_BLUR } from '@/constants/images';
import { useCurrentUser } from '@/Context/currentUser';
import LoginAlertModal from '@/components/LoginAlertModal';
import { generateSlug } from '@/helperFunctions/generateSlug';
import { fetchData } from '@/helperFunctions/fetchData';

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

type IProps = {
  post: {
    id: number;
    category: string;
    post_background: string;
    date: string;
    meta_tag_title: string;
    meta_tag_description: string;
    title: string;
    content: string;
    post_image: string;
    author: string; // Make 'author' property optional
    keywords: string;
  };
  data: {
    results: PostProps[];
  };
};

type ICurrentPost = {
  slug: string;
  title: string;
};

function Posts(props: IProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [lastPosts, setLastPost] = useState<PostProps[]>([]);
  const [settings, setSettings] = useState({});
  const { scrollIntoViewHandler } = useScrollContext();
  const { favoritPosts } = useAddToFavoritsContext();
  const [displayLoginModal, setDisplayLoginModal] = useState(false);
  const { currentUser } = useCurrentUser();

  useEffect(() => {
    setIsLoading(false);
    AOS.init();

    setLastPost(props.data.results.slice(0, 3));

    setSettings({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1186,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }, [props.data.results]);

  const displayLoginAlert = function () {
    setDisplayLoginModal(true);
  };

  const closeLoginAlertModal = function () {
    setDisplayLoginModal(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <StyledPostNew>
      <Head>
        <title>{props.post.meta_tag_title}</title>
        <meta name="description" content={props.post.meta_tag_description}></meta>
        <meta name="author" content={props.post.author} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={props.post.keywords} />
        <link rel="icon" href={FAVICON} />
      </Head>
      {!currentUser.email && displayLoginModal && (
        <LoginAlertModal onCloseLoginAlertModal={closeLoginAlertModal} />
      )}
      <Header className="header" scrollIntoView={() => scrollIntoViewHandler()} />
      <div className="profile" data-aos="fade-down">
        <div className="background-image-container">
          <LazyLoadImage
            className="background-image"
            src={props.post.post_background}
            placeholderSrc={POST_BACKGROUND_BLUR}
            alt="Blur background"
          />
        </div>

        <div className="body-post" data-aos="fade-up">
          <h1 className="title">{props.post.title}</h1>
          <p className="date">{dateFormatter(props.post.date)}</p>
          <MarkdownRenderer> {props.post.content} </MarkdownRenderer>
          <div className="aside-absolute">
            <div className="content">
              <TwitterShareButton
                title={props.post.meta_tag_title}
                url={`https://www.victorlirablog.com/Posts/${generateSlug(props.post.title)}`}
              >
                <Image
                  src="/twitter.png"
                  width={30}
                  height={30}
                  alt="twitter icon"
                  className="img-twitter"
                />
              </TwitterShareButton>
              <RedditShareButton
                title={props.post.meta_tag_title}
                url={`https://www.victorlirablog.com/Posts/${generateSlug(props.post.title)}`}
              >
                <Image
                  src="/reddit.png"
                  width={30}
                  height={30}
                  alt="reddit icon"
                  className="img-reddit"
                />
              </RedditShareButton>
              <TelegramShareButton
                url={`https://www.victorlirablog.com/Posts/${generateSlug(props.post.title)}`}
                title={props.post.meta_tag_title}
              >
                <Image
                  src="/telegram.png"
                  width={30}
                  height={30}
                  alt="telegram icon"
                  className="img-telegram"
                />
              </TelegramShareButton>
              <FacebookShareButton
                title={props.post.meta_tag_title}
                url="https://www.victorlirablog.com/Posts/16"
              >
                <Image
                  src="/facebook.png"
                  width={30}
                  height={30}
                  alt="facebook icon"
                  className="img-facebook"
                />
              </FacebookShareButton>
            </div>
          </div>
        </div>
        <div className="writter">
          <div className="author"></div>
          <div className="name-container">
            <p className="text-1">Victor Lira &nbsp; 🚀</p>
            <p className="text-2">Escrito por Victor Lira</p>
          </div>
        </div>
      </div>
      <h1 className="title">Últimas postagens</h1>
      <div className="last-posts">
        <Slider {...settings}>
          {lastPosts.map((post: PostProps) => {
            return (
              <div className="slider-content" key={post.id}>
                <Post
                  onDisplayLoginAlert={displayLoginAlert}
                  id={post.id}
                  category={post.category}
                  content={post.content}
                  date={post.date}
                  meta_tag_description={post.meta_tag_description}
                  meta_tag_title={post.meta_tag_title}
                  title={post.title}
                  post_image={post.post_image}
                  author={post.author ?? 'Unknown Author'}
                  aos_delay=""
                  aos_type=""
                  hover_animation={-7}
                  onUpdateFavoritSource={updateFavoritSource(favoritPosts, post)}
                />
              </div>
            );
          })}
        </Slider>
      </div>
      <Footer />
    </StyledPostNew>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const page = '1';
  const limit = '100';
  const category = 'all';

  try {
    const data = await fetchData(page, limit, category);
    const paths = data.results.map((post: ICurrentPost) => ({
      params: { slug: generateSlug(post.title) },
    }));

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    console.error('Error fetching paths:', error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;

  try {
    const page = '1';
    const limit = '100';
    const category = 'all';

    const data = await fetchData(page, limit, category);

    const currentPost = data.results.find((post: ICurrentPost) => {
      return generateSlug(post.title) === slug;
    });

    if (!currentPost) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post: currentPost,
        data: data,
      },
      revalidate: 60, 
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }
};

export default Posts;
