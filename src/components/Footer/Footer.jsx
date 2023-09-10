import { Container, HStack, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <HStack as="footer" pt={7} pb={7}>
      <Container maxW="1280px">
        <Text as="p">
          Created by Maryan Smoliy
          <Text as="span">{new Date().getFullYear()}</Text>
        </Text>
      </Container>
    </HStack>
  );
};

export default Footer;
