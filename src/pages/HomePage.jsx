import { Box, Heading, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box
      bg="white"
      shadow="xl"
      w="600px"
      p={30}
      position={'absolute'}
      top={'50%'}
      left={'50%'}
      transform="translate(-50%, 50%)"
    >
      <Heading as="h1" fontSize={27} fontWeight={700} mb={6}>
        Welcome to PhoneBook, your one-stop destination for all your contact
        management needs!
      </Heading>
      <Text fontSize={18}>
        Are you tired of sifting through messy address books, struggling to find
        the right contact when you need it most? Look no further! PhoneBook is
        here to simplify your life and help you effortlessly organize and access
        your contacts.
      </Text>
    </Box>
  );
};

export default HomePage;
