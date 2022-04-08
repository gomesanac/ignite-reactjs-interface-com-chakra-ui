import { Box, Flex, Image, Text } from '@chakra-ui/react';

export const Banner: React.FC = () => {
  return (
    <Flex
      align="center"
      justify="space-evenly"
      h={{ base: '163px', md: '368px' }}
      p={{ base: '1.75rem 1rem', md: '0' }}
      bg="banner"
      bgImage="/images/Banner/background.png"
      bgSize="cover"
    >
      <Box>
        <Text
          color="light.text"
          fontSize={{ base: '20px', md: '36px' }}
          lineHeight={{ base: '30px', md: '54px' }}
          fontWeight="500"
          mb={{ base: '0.5rem', md: '1.25rem' }}
        >
          5 Continentes, <br /> infinitas possibilidades.
        </Text>
        <Text
          color="light.text"
          fontSize={{ base: '14px', md: '20px' }}
          lineHeight={{ base: '21px', md: '30px' }}
          maxW="524px"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      <Box display={{ base: 'none', lg: 'block' }}>
        <Image src="/images/Banner/airplane.svg" alt="Avião" />
      </Box>
    </Flex>
  );
};
