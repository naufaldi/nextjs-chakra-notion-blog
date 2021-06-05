import {
  Grid,
  GridItem,
  Heading,
  Text,
  Box,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import Image from 'next/image';
import TextWrapper from '@/components/Post/TextWrapper';
export default function ArticleContent(params) {
  return (
    <Grid
      as="article"
      templateColumns="repeat(12,1fr)"
      my="10"
      gridTemplateRows="auto"
      gap={8}
    >
      <TextWrapper>
        <Box display="flex" flexDirection="column" gridGap={5} mb="6">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Aliquam quis
            posuere ligula. In eu dui molestie, molestie lectus eu, semper
            lectus.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Aliquam quis
            posuere ligula. In eu dui molestie, molestie lectus eu, semper
            lectus.
          </Text>
          <Heading as="h2" fontFamily="sans-serif" fontSize="2xl" mb="5" mt="5">
            Next on the pipeline
          </Heading>
          <Text>
            Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Morbi efficitur
            auctor metus, id mollis lorem pellentesque id. Nullam posuere
            maximus dui et fringilla.
          </Text>
        </Box>
      </TextWrapper>
      <GridItem colSpan="8" colStart="3">
        <Box display="flex" flexDir="column">
          <Image
            src="/img/post/dummyPost.png"
            width={853}
            height={500}
            layout="responsive"
          />
          <Text
            textAlign="center"
            w="50%"
            mt="2"
            alignSelf="center"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            Image caption centered this way and I’ll make this a bit longer to
            indicate the amount of line-height.{' '}
          </Text>
        </Box>
      </GridItem>
      <TextWrapper>
        <Box display="flex" flexDirection="column" gridGap={5} mb="6">
          <Text>
            Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu,
            semper lectus. Proin at justo lacinia, auctor nisl et, consequat
            ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id
            mollis lorem pellentesque id. Nullam posuere maximus dui et
            fringilla. Nulla non volutpat leo.
          </Text>
          <Text>A list looks like this:</Text>
          <UnorderedList>
            <ListItem>First item in the list</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>
              Second item in the list lorem ipsum dolor sit amet
            </ListItem>
            <ListItem>
              Facilisis in pretium nisl aliquet nunc felis dolor lorem ipsum sit
              amet{' '}
            </ListItem>
            <ListItem>Third item in the list</ListItem>
          </UnorderedList>
          <Text>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aliquam quis posuere ligula.
          </Text>
          <Text>Thanks for reading,</Text>
          <Text>Mika</Text>
        </Box>
      </TextWrapper>
    </Grid>
  );
}
