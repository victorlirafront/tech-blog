import Axios from 'axios';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';

function MovieDetails(props: any) {
    console.log(props.movieDetail);
    return (
        <React.Fragment>
            <Head>
                <title> Movie Overview </title>
                <meta
                    name="description"
                    content="Checkout all the details about your favorite movie"
                ></meta>
            </Head>

            <div>
                <h1>{props.movieDetail.user_name}</h1>
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

    const movieDetail = data.find((item: any) => {
        if (item.id == id) {
            return item;
        }
    });

    return {
        props: {
            movieDetail: movieDetail,
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
        fallback: false,
        paths: response.data.map((post: any) => ({
            params: { id: post.id.toString() },
        })),
    };
};

export default MovieDetails;
