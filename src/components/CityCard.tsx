import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { cityType } from '../services/continentes';

interface CityCardProps {
  city: cityType;
}

export const CityCard: React.FC<CityCardProps> = ({ city }) => {
  const { image, name, country, flag } = city;
  return (
    <Box
      bg="white"
      h="279px"
      borderRadius="8px"
      border="1px solid"
      borderColor="highlight"
    >
      <Image
        w="100%"
        h="173px"
        src={image}
        alt={`${name}-image`}
        borderRadius="8px 8px 0 0"
      />
      <Flex align="center" justify="space-between" m="25px">
        <Box>
          <Text
            fontSize={{ base: '18px', lg: '20px' }}
            lineHeight="25px"
            fontWeight="600"
          >
            {name}
          </Text>
          <Text
            color="dark.info"
            fontSize={{ base: '14px', lg: '16px' }}
            lineHeight="26px"
            fontWeight="500"
          >
            {country}
          </Text>
        </Box>
        <Image
          src={flag}
          alt={`${flag}-image`}
          w="30px"
          h="30px"
          borderRadius="100%"
        />
      </Flex>
    </Box>
  );
};
