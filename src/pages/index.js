import Layout from '../components/layout/Layout';
import { Container } from '@chakra-ui/react';
import HeroHome from '@/components/Home/HeroHome';
import { getDatabase } from '@/lib/notion';
import ListArticle from '@/components/Home/ListArticle';
import MetaHead from '@/components/misc/MetaHead';


export const databaseId = process.env.NOTION_DATABASE_ID;

const Index = ({ posts }) => {
  console.log('Post ', posts);
  return (
    <>
    <MetaHead
      title="Next Notion Homepage"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, optio molestiae soluta eaque eius molestias repudiandae quia consectetur at possimus, sunt itaque tenetur fugit culpa, tempore magni reiciendis omnis explicabo?"
      heroImage="/img/hero-img.png"
      type={'website'}
    />
    <Layout>
      <Container maxW="container.xl">
        <HeroHome />
        <ListArticle posts={posts} />
      </Container>
    </Layout>
</>
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
