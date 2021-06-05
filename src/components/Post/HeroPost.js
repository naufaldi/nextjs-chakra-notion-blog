import { Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
export default function HeroPost() {
  return (
    <Grid templateColumns="repeat(12,1fr)" gap="8">
      <GridItem
        colSpan={['12', '12', '8']}
        colStart={['1', '1', '3']}
        textAlign="center"
        rowSpan="1"
        paddingX={['5', '5', '0']}
      >
        <Heading as="h1" fontSize="2xl">
          A few words about this blog platform, Ghost, and how this site was
          made
        </Heading>
      </GridItem>
      <GridItem
        rowSpan="1"
        rowStart="2"
        colSpan={['12', '12', '6']}
        colStart={['1', '1', '4']}
        textAlign="center"
        paddingX={['5', '5', '0']}
      >
        <Text fontFamily="mono" fontSize={['md', 'md', 'lg']}>
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </Text>
      </GridItem>
      <GridItem
        colSpan={['12', '8', '8']}
        justifyContent="center"
        colStart={['1', '1', '3']}
      >
        <Image
          src="/img/hero-img.png"
          width={853}
          height={500}
          layout="responsive"
        />
      </GridItem>
    </Grid>
  );
}
