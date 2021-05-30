import { Box, Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';
import { MotionBox } from './motion';
import { AnimatePresence } from 'framer-motion';

export default function Link({ children, color = 'black', href, ...props }) {
  const [isHover, setisHover] = useState(false);
  const variants = {
    visible: {
      visibility: 'visible',
      width: '100%',
      transition: {
        opacity: 1,
        mass: 0,
      },
    },
    hidden: {
      visibility: 'hidden',
      width: 0,
      transition: {
        opacity: 0,
      },
    },
  };

  return (
    <NextLink href={href || '#'}>
      <Box
        position="relative"
        onMouseEnter={() => {
          setisHover(true);
          console.log('masuk');
        }}
        onMouseLeave={() => setisHover(false)}
      >
        <ChakraLink
          {...props}
          letterSpacing="wider"
          _hover={{
            textDecoration: 'none',
          }}
        >
          {children}
        </ChakraLink>
        <AnimatePresence>
          {isHover && (
            <MotionBox
              variants={variants}
              initial="hidden"
              animate="visible"
              exit={{ width: 0, opacity: 0 }}
              position="absolute"
              top="0"
              mt="7"
              layout
              display="block"
              w="full"
              h="1"
              bgColor={color}
            ></MotionBox>
          )}
        </AnimatePresence>
      </Box>
    </NextLink>
  );
}
