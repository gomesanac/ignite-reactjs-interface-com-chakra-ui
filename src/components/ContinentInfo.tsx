import { Flex, Text } from '@chakra-ui/react';

interface ContinentInfoProps {
  number: number;
  type: string;
}

export const ContinentInfo: React.FC<ContinentInfoProps> = ({
  number,
  type,
}) => {
  return (
    <Flex direction="column" align="center">
      <Text
        color="highlight"
        fontSize={{ base: '22px', lg: '24px' }}
        fontWeight="600"
        lineHeight={{ lg: '48px' }}
      >
        {number}
      </Text>
      <Text fontSize={{ base: '16px', lg: '18px' }} fontWeight="600">
        {type}
      </Text>
    </Flex>
  );
};
