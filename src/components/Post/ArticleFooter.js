import { Grid, GridItem, Text, Avatar, Button, Link } from '@chakra-ui/react';

export default function ArticleFooter() {
  return (
    <Grid
      templateColumns="repeat(12,1fr)"
      my="10"
      gridTemplateRows="auto"
      gap={8}
      w="full"
      paddingX={['5', '5', '0']}
    >
      <GridItem
        display="flex"
        colStart={['1', '1', '4']}
        colSpan={['12', '12', '6']}
      >
        <Button
          rounded="sm"
          borderWidth="1px"
          borderColor="gray"
          backgroundColor="white"
          color="black"
          display="flex"
          justifyContent="center"
          width="50%"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0001 0.041626C4.47724 0.041626 0 4.51886 0 10.0417C0 14.995 3.60522 19.0972 8.33225 19.8916V12.128H5.91994V9.33417H8.33225V7.27413C8.33225 4.88389 9.79213 3.58135 11.9247 3.58135C12.9461 3.58135 13.8238 3.65746 14.0786 3.69098V6.18942L12.5995 6.19013C11.44 6.19013 11.2165 6.74102 11.2165 7.54969V9.33274H13.9832L13.6223 12.1265H11.2165V19.9584C16.1642 19.3562 20 15.1495 20 10.0388C20 4.51886 15.5228 0.041626 10.0001 0.041626Z"
              fill="#010002"
            />
          </svg>
          <Text fontFamily="sans-serif" fontWeight="bold" ml="2">
            Share on Facebook
          </Text>
        </Button>
        <Button
          rounded="sm"
          borderWidth="1px"
          borderColor="gray"
          backgroundColor="white"
          color="black"
          display="flex"
          justifyContent="center"
          width="50%"
        >
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.6169 0.00896646C18.763 0.611275 17.8176 1.07195 16.8171 1.37324C16.28 0.755757 15.5663 0.318104 14.7725 0.119469C13.9786 -0.0791667 13.1429 -0.0292013 12.3784 0.262607C11.6138 0.554416 10.9573 1.07399 10.4977 1.75105C10.0381 2.42812 9.7975 3.23001 9.80847 4.04827V4.93995C8.24146 4.98058 6.68873 4.63305 5.28855 3.92829C3.88838 3.22354 2.68424 2.18345 1.78336 0.900645C1.78336 0.900645 -1.78336 8.92575 6.24175 12.4925C4.40536 13.739 2.21775 14.364 0 14.2758C8.02511 18.7342 17.8336 14.2758 17.8336 4.02152C17.8328 3.77315 17.8089 3.52539 17.7622 3.28143C18.6723 2.38395 19.3145 1.25082 19.6169 0.00896646Z"
              fill="black"
            />
          </svg>
          <Text fontFamily="sans-serif" fontWeight="bold" ml="2">
            Share on Facebook
          </Text>
        </Button>
      </GridItem>
      <GridItem
        display="flex"
        colStart={['1', '1', '4']}
        colSpan={['12', '12', '6']}
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        <Text>Tags: </Text>
        <Link ml="2">product design,</Link>
        <Link>culture</Link>
      </GridItem>
      <GridItem
        display="flex"
        colStart={['1', '1', '4']}
        colSpan={['12', '12', '6']}
      >
        <Avatar name="Mika Matikainen" src="/img/avatar/profile.png" />
        <Text ml="2">
          <b>MIKA MATIKAINEN </b>
          is a Design Founder & Advisor, Berlin School of Creative Leadership
          Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic
          Rose stakeholder.
        </Text>
      </GridItem>
    </Grid>
  );
}
