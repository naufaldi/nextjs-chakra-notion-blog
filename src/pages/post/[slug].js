import React from 'react';
import Layout from '@/components/layout/Layout';
import { Container } from '@/components/misc/Container';
import HeroPost from '@/components/Post/HeroPost';
import AuthorBox from '@/components/Post/AuthorBox';
import ArticleContent from '@/components/Post/ArticleContent';
import ArticleFooter from '@/components/Post/ArticleFooter';
import SuggestArticle from '@/components/Post/SuggestArticle';
import SubscribeForm from '@/components/Post/SubscribeForm';
import MetaHead from '@/components/misc/MetaHead';

const Post = () => {
  return (
    <>
      <MetaHead />
      <Layout>
        <Container>
          <HeroPost />
          <AuthorBox />
          <ArticleContent />
          <ArticleFooter />
          <SuggestArticle />
          <SubscribeForm />
        </Container>
      </Layout>
    </>
  );
};

export default Post;
