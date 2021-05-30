import { Flex, Box, IconButton, Heading, Container } from '@chakra-ui/react';
import { useState } from 'react';
import Link from '../misc/Link';
import { MotionBox } from '../misc/motion';
import { motion } from 'framer-motion';
import { DarkModeSwitch } from '../misc/DarkModeSwitch';
export default function Header(params) {
  const [navView, setnavView] = useState(false);

  const navVariant = {
    opened: {
      paddingTop: '40px',
      paddingBottom: '40px',
      visibility: 'visible',
      transition: {
        opacity: 1,
        mass: 0,
      },
    },
    closed: {
      visibility: 'hidden',
      paddingBottom: 0,
      paddingTop: 0,
      transition: {
        opacity: 0,
      },
    },
  };
  const Temp = motion.div;
  return (
    <Box as="header" borderBottom="1px" borderColor="gray.200" py="4" mb="5">
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="center">
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
            justifyContent="space-between"
            display={['none', 'none', 'flex']}
          >
            <Link fontWeight="bold" fontFamily="serif" mx="2">
              BLOG
            </Link>
            <Link fontWeight="bold" fontFamily="serif" mx="2">
              ABOUT
            </Link>
            <Link fontWeight="bold" fontFamily="serif" mx="2">
              LINKS
            </Link>
            <Link fontWeight="bold" fontFamily="serif" mx="2">
              PROJECTS
            </Link>
            <Box mx="4">
              <DarkModeSwitch />
            </Box>
          </Flex>
          <IconButton
            onClick={() => setnavView(!navView)}
            display={['flex', 'flex', 'none']}
            size="lg"
            color="black"
            bgColor="white"
            aria-label="navbar button"
            _focus={{
              border: 'none',
              backgroundColor: 'white',
            }}
            transform={navView ? 'rotate(90deg)' : 'none'}
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
        <MotionBox
          variants={navVariant}
          animate={navView ? 'opened' : 'closed'}
          py="10"
          w="72"
          mx="auto"
          justifyContent="space-between"
          display="flex"
          fontSize="sm"
          fontWeight="bold"
          fontFamily="serif"
          h="0"
          display={['flex', 'flex', 'none']}
        >
          <Link>BLOG</Link>
          <Link>ABOUT</Link>
          <Link>LINKS</Link>
          <Link>PROJECTS</Link>
        </MotionBox>
      </Container>
    </Box>
  );
}
