import Layout from '../components/layout/Layout';
import { Container } from '@chakra-ui/react';
import HeroHome from '@/components/Home/HeroHome';
import { getDatabase } from '@/lib/notion';
import ListArticle from '@/components/Home/ListArticle';

export const databaseId = process.env.NOTION_DATABASE_ID;

const Index = ({ posts }) => {
  console.log('Post ', posts);
  return (
    <Layout>
      <Container maxW="container.xl">
        <HeroHome />
        <ListArticle posts={posts} />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};

export default Index;
