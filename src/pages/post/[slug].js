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
      <MetaHead
        title="Blog Platform"
        description="A few words about this blog platform, Ghost, and how this site was made"
        heroImage="/img/hero-img.png"
        type="article"
      />
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
