import { Flex, Box, IconButton, Heading, Container } from '@chakra-ui/react';
import Link from '../misc/Link';
export default function Header(params) {
  return (
    <Box as="header" borderBottom="1px" borderColor="gray.200" py="4">
      <Container maxW="container.xl">
        <Flex alignItems="center">
          <Heading
            as="h1"
            fontWeight="light"
            letterSpacing="widest"
            flexGrow="1"
            fontSize={['2xl', '2xl', '3xl']}
          >
            Next Notion
          </Heading>
          <Flex
            w="72"
            justifyContent="space-between"
            display={['none', 'none', 'flex']}
          >
            <Link fontWeight="bold" fontFamily="serif">
              BLOG
            </Link>
            <Link fontWeight="bold" fontFamily="serif">
              ABOUT
            </Link>
            <Link fontWeight="bold" fontFamily="serif">
              LINKS
            </Link>
            <Link fontWeight="bold" fontFamily="serif">
              PROJECTS
            </Link>
          </Flex>
          <IconButton
            display={['flex', 'flex', 'none']}
            size="lg"
            bgColor="white"
            icon={
              <svg
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            }
          />
        </Flex>
        <Flex
          py="0"
          w="72"
          mx="auto"
          justifyContent="space-between"
          display="flex"
          fontSize="sm"
          fontWeight="bold"
          fontFamily="serif"
          visibility="hidden"
          h="0"
        >
          <Link>BLOG</Link>
          <Link>ABOUT</Link>
          <Link>LINKS</Link>
          <Link>PROJECTS</Link>
        </Flex>
      </Container>
    </Box>
  );
}
