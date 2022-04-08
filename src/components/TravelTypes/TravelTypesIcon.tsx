import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { useMemo } from 'react';

interface TravelTypesIconProps {
  children: string;
  image: string;
  alignSelf?: boolean;
}

export const TravelTypesIcon: React.FC<TravelTypesIconProps> = ({
  children,
  image,
}) => {
  const isWideVersion = useBreakpointValue({ base: false, md: true });

  const src = useMemo(
    () => (isWideVersion ? image : '/images/TravelTypes/ellipse.svg'),
    [image, isWideVersion]
  );

  return (
    <Flex
      direction={{ base: 'row', md: 'column' }}
      align="center"
      justify="center"
      mb={{ base: '27px', md: '0' }}
    >
      <Image
        src={src}
        alt={`${children}-image`}
        h={{ base: '8px', md: '85px' }}
        mr={{ base: '8px', md: '0' }}
        mb={{ base: '0', md: '12px', lg: '24px' }}
      />
      <Text
        fontSize={{ base: '18px', lg: '24px' }}
        fontWeight={{ base: '500', lg: '600' }}
      >
        {children}
      </Text>
    </Flex>
  );
};
