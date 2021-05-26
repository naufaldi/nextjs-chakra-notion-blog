import { Flex, Box, Heading } from '@chakra-ui/react';
import Link from '../misc/Link';
export default function Header(params) {
  return (
    <Flex
      padding="5"
      alignItems="center"
      as="header"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Heading as="h1" fontWeight="light" letterSpacing="widest" flexGrow="1">
        Next Notion
      </Heading>
      <Flex w="72" justifyContent="space-between">
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
    </Flex>
  );
}
