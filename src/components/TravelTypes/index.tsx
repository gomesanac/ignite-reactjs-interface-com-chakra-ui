import { Box, Flex } from '@chakra-ui/react';

import { TravelTypesIcon } from './TravelTypesIcon';

export const TravelTypes: React.FC = () => {
  return (
    <Flex
      justify={{ base: 'space-between', md: 'center' }}
      flexWrap={{ base: 'wrap', md: 'nowrap' }}
      gap={{ md: '3rem', lg: '8rem' }}
      p={{ base: '36px 50px 11px', md: '36px 50px', lg: '80px 140px' }}
    >
      <TravelTypesIcon image="/images/TravelTypes/cocktail.svg">
        vida noturna
      </TravelTypesIcon>
      <TravelTypesIcon image="/images/TravelTypes/surf.svg">
        praia
      </TravelTypesIcon>
      <TravelTypesIcon image="/images/TravelTypes/building.svg">
        moderno
      </TravelTypesIcon>
      <TravelTypesIcon image="/images/TravelTypes/museum.svg">
        clássico
      </TravelTypesIcon>
      <Box m={{ base: '0 auto', md: '0' }}>
        <TravelTypesIcon alignSelf image="/images/TravelTypes/earth.svg">
          e mais...
        </TravelTypesIcon>
      </Box>
    </Flex>
  );
};
