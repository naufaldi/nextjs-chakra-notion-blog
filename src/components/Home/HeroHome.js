import React from 'react';
import { Container } from '@/components/misc/Container';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';

const HeroHome = () => {
  // Dark Mode
  const colorFont = useColorModeValue('black', 'white');
  return (
    <Container>
      <Grid
        templateColumns="repeat(12,1fr)"
        gap={8}
        pt="76px"
        pb="12px"
        w="full"
      >
        <GridItem colSpan={[12, 12, 8]} colStart={[1, 1, 3]} rowStart="1">
          <Box
            position="relative"
            w="full"
            h={['max-content', 'max-content', '533px']}
          >
            <Image
              src="/img/hero-img.png"
              width={853}
              height={533}
              layout="responsive"
            />
          </Box>
          <Heading
            as="h1"
            fontWeight="bold"
            fontSize="54px"
            lineHeight="54px"
            textAlign="center"
            mx="auto"
            mt="44px"
            mb="32px"
          >
            NextJS Chakra Notion Blog
          </Heading>
        </GridItem>
        <GridItem
          colSpan={[12, 12, 6]}
          colStart={[1, 1, 4]}
          gap={8}
          rowStart={2}
        >
          <Text color={colorFont} textAlign="center" fontFamily="mono">
            Why Ghost (& Figma) instead of Medium, WordPress or other options?
          </Text>
          <Box as="hr" borderBottom="2px solid #000000" my="34px"></Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default HeroHome;
