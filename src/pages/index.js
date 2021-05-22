import { Stack, Text, Heading, Container, Box } from '@chakra-ui/react';

const Index = () => (
  <Container maxW="container.xl">
    <Stack
      spacing="10"
      w="lg"
      mx="auto"
      textAlign="center"
      minH="100vh"
      color="black"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Heading fontSize="3xl" fontFamily="serif">
          A few words about this blog platform, Ghost, and how this site was
          made
        </Heading>
        <Text fontSize="md" fontFamily="mono" mt="10">
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </Text>
      </Box>
      <Box>
        <Heading fontFamily="sans-serif" fontSize="lg">
          Here are some things you should know regarding how we work
        </Heading>
        <Text mt="10" textAlign="left">
          This lovely web is full of everything which is created I don't know
          what in mind, considering that sometimes totally bonkers stuff might
          be highly relevant if it has the right kind of thinking behind it. 
        </Text>
      </Box>
    </Stack>
  </Container>
);

export default Index;
