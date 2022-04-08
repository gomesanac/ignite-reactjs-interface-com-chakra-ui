import { Divider, Flex, Text } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <Flex direction="column" justify="center">
      <Header />
      <Banner />
      <TravelTypes />
      <Divider
        orientation="horizontal"
        bg="dark.text"
        border="1px"
        borderColor="black.text"
        margin="0 auto"
        w="10rem"
      />
      <Text
        fontSize={{ base: '20px', md: '28px', lg: '36px' }}
        lineHeight={{ base: '30px', md: '42px', lg: '36px' }}
        fontWeight="500"
        m={{ base: '24px auto', md: '38px auto', lg: '52px auto' }}
        textAlign="center"
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Text>
      <Carousel />
    </Flex>
  );
}
