import { Flex, Box, Heading, Text, Container } from '@chakra-ui/react';
import Link from '../misc/Link';

const textDecorFooter = [
  'Digital product design',
  'Remote work',
  'UX design',
  'Distributed teams',
  'Creativity',
  'Strategy',
  'Suspense',
  'Growth',
];

export default function Footer(params) {
  return (
    <Box as="footer" backgroundColor="black" color="white" mt="5">
      <Container
        maxW="container.xl"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          overflow="hidden"
          width="100%"
          display="flex"
          justifyContent="space-between"
          flex="1"
        >
          {textDecorFooter.map((text, i) => (
            <Text
              key={i}
              fontFamily="sans-serif"
              textTransform="uppercase"
              fontWeight={i % 2 === 0 ? 'bold' : 'light'}
              whiteSpace="nowrap"
              mr={['24', '24', '0']}
              ml={['-16', '-12', '0']}
            >
              {text}
            </Text>
          ))}
        </Box>
        <Box mt="10">
          <Heading
            as="h1"
            fontWeight="light"
            letterSpacing="widest"
            textAlign="center"
            fontSize="xl"
          >
            Next Notion
          </Heading>
          <Text
            textAlign="center"
            w="96"
            mt="5"
            mb="5"
            fontSize="xs"
            padding={['5', '5', '0']}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus.
          </Text>
          <Flex w="96" justifyContent="center" gridColumnGap="5">
            <Link fontFamily="sans-serif" color="white">
              Twitter
            </Link>
            <Link fontFamily="sans-serif" color="white">
              LinkedIn
            </Link>
            <Link fontFamily="sans-serif" color="white">
              RSS
            </Link>
          </Flex>
        </Box>
        <Box p="2">
          <Text
            textAlign="center"
            mt="10"
            fontSize="xs"
            fontFamily="sans-serif"
          >
            © 2021 Next Notion <br></br> All rights reserved.{' '}
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
