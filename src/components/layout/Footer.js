import { Flex, Box, Heading, Text } from '@chakra-ui/react';
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
    <Flex
      as="footer"
      minH="36"
      backgroundColor="black"
      color="white"
      direction="column"
      alignItems="center"
      padding="2"
      overflow="hidden"
    >
      <Box width="100%" display="flex" justifyContent="space-between" flex="1">
        {textDecorFooter.map((text, i) => (
          <Text
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
        <Text textAlign="center" w="96" mt="5" mb="5" fontSize="xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.
        </Text>
        <Flex w="96" justifyContent="center" gridColumnGap="5">
          <Link fontFamily="sans-serif">Twitter</Link>
          <Link fontFamily="sans-serif">LinkedIn</Link>
          <Link fontFamily="sans-serif">RSS</Link>
        </Flex>
      </Box>
      <Box>
        <Text
          textAlign="center"
          mt="10"
          fontSize="12px"
          fontFamily="sans-serif"
        >
          © 2012–2020 Nordic Rose Co. <br></br> All rights reserved.{' '}
        </Text>
      </Box>
    </Flex>
  );
}
