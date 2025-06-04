import { PostsService } from "@/services/PostsService";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const page = context.query?.page ?? '1';
    const category = context.query?.category ?? 'all';
    const limit = '8';
    let data = [];
    if (context.query.query) {
      const searchResults = await PostsService.searchPosts(String(context.query.query), page, limit);
      data = searchResults;
    } else {
      data = await PostsService.getAllPosts(page, limit, category);
    }

    return {
      props: {
        ...data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: [],
      },
    };
  }
};

export { Home as default } from '@/views/Home';