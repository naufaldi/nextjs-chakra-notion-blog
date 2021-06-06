import {
  Grid,
  GridItem,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
} from '@chakra-ui/react';
export default function SubscribeForm(params) {
  return (
    <Grid templateColumns="repeat(12,1fr)" templateRows="auto" w="full">
      <GridItem
        colSpan={['12', '12', '6']}
        colStart={['1', '1', '4']}
        border="1px solid black"
        borderTop="4px solid black"
        p="10"
        textAlign="center"
        display="flex"
        flexDir="column"
        gridGap={5}
      >
        <Heading as="h1" fontSize="2xl">
          Sign up for the newsletter
        </Heading>
        <Text fontFamily="sans-serif" fontSize="lg">
          If you want relevant updates occasionally, sign up for the private
          newsletter. Your email is never shared.
        </Text>
        <Box display="flex" alignItems="center">
          <FormControl as="form" position="relative">
            <FormLabel visibility="hidden" h="0" position="absolute">
              Email address
            </FormLabel>
            <Input
              borderColor="black"
              placeholder="Enter your email..."
              fontFamily="sans-serif"
              backgroundColor="white"
              focusBorderColor="black"
              borderRadius="sm"
              _placeholder={{
                color: 'black',
                fontFamily: 'sans-serif',
                fontWeight: 'medium',
                opacity: '100%',
              }}
            />
          </FormControl>
          <Button
            backgroundColor="black"
            color="white"
            fontFamily="sans-serif"
            borderRadius="sm"
          >
            SIGN UP
          </Button>
        </Box>
      </GridItem>
    </Grid>
  );
}
