import { Text, Link } from '@chakra-ui/react';
import React from 'react';

const TextHead = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    const { text } = value;
    return (
      <Text
        as="h1"
        as="h6"
        fontFamily="sans-serif"
        fontWeight="medium"
        fontSize="xl"
        textAlign="center"
        textTransform="capitalize"
      >
        {text.content}
      </Text>
    );
  });
};

export default TextHead;
