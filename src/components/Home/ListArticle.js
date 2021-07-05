import dummy from '@/data/dummy';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Grid, GridItem, Heading } from '@chakra-ui/layout';
import Image from 'next/image';
import React from 'react';
import { Container } from '../misc/Container';
import Link from 'next/link';
import TextHead from '../misc/TextHead';

const ListArticle = ({ posts }) => {
  const colorFont = useColorModeValue('black', 'white');
  console.log('Name List ', posts[0].properties.Name.title);
  return (
    <Container>
      <Grid templateColumns="repeat(12,1fr)" gap={8} w="full">
        <GridItem colSpan={[12, 12, 6]} colStart={[1, 1, 4]}>
          <Heading
            as="h5"
            fontWeight="bold"
            fontSize="3xl"
            lineHeight="52.51px"
            color={colorFont}
            textAlign="center"
          >
            All articles
          </Heading>
          <Grid
            templateColumns={[
              'repeat(1,1fr)',
              'repeat(2,1fr)',
              'repeat(2,1fr)',
            ]}
            gap="8"
            w="full"
            mt="40px"
          >
            {posts &&
              posts.map((data, index) => (
                <Link href="/post/slug" passHref key={index}>
                  <GridItem as="article" cursor="pointer">
                    <Box
                      w="full"
                      h={['max-content', 'max-content', '176px']}
                      position="relative"
                    >
                      <Image
                        src="/img/news/news-1.png"
                        width={304}
                        height={176}
                        layout="responsive"
                        alt="News 1"
                      />
                    </Box>
                    <Box p="20px">
                      <TextHead text={data.properties.Name.title} />
                    </Box>
                  </GridItem>
                </Link>
              ))}
          </Grid>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default ListArticle;
