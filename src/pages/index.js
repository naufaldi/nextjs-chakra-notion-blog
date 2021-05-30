import Layout from '../components/layout/Layout';
import { Container, Text } from '@chakra-ui/react';
import HeroHome from '@/components/Home/HeroHome';
import ListArticle from '@/components/Home/ListArticle';

const Index = () => (
  <Layout>
    <Container maxW="container.xl">
      <HeroHome />
      <ListArticle />
    </Container>
  </Layout>
);

export default Index;
