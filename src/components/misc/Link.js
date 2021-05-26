import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href || '#'}>
      <ChakraLink {...props} letterSpacing="wider">
        {children}
      </ChakraLink>
    </NextLink>
  );
}
