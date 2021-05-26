import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Flex direction="column" h="150vh">
      <Header />
      <Box flexGrow="1">{children}</Box>
      <Footer />
    </Flex>
  );
}
