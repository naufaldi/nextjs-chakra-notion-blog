import React from 'react';
import Layout from '@/components/layout/Layout';
import { Container } from '@/components/misc/Container';
import HeroPost from '@/components/Post/HeroPost';
import AuthorBox from '@/components/Post/AuthorBox';

const Post = () => {
  return (
    <Layout>
      <Container>
        <HeroPost />
        <AuthorBox />
      </Container>
    </Layout>
  );
};

export default Post;
