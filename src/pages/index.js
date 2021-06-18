import Layout from '../components/layout/Layout';
import { Container } from '@chakra-ui/react';
import HeroHome from '@/components/Home/HeroHome';
import ListArticle from '@/components/Home/ListArticle';
import MetaHead from '@/components/misc/MetaHead';

const Index = () => (
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
        <ListArticle />
      </Container>
    </Layout>
  </>
);

export default Index;
