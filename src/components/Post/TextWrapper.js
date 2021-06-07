import { GridItem } from '@chakra-ui/react';

export default function TextWrapper({ children }) {
  return (
    <GridItem colStart={['1', '1', '4']} colSpan={['12', '12', '6']}>
      {children}
    </GridItem>
  );
}
