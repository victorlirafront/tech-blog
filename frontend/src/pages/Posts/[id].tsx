import Axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';

function Posts(props: any) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Head>
        <title>Movie Overview</title>
        <meta
          name="description"
          content="Checkout all the details about your favorite movie"
        ></meta>
      </Head>

      <div>
        <h1>{props.post.date_posted}</h1>
        <p>{props.post.user_name}</p>
        <p>{props.post.title}</p>
        <p>{props.post.post_text}</p>
      </div>
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