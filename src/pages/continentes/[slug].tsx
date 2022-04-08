import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { CityCard } from '../../components/CityCard';
import { ContinentInfo } from '../../components/ContinentInfo';

import continentes, { continenteType } from '../../services/continentes';

interface ContinentPageProps {
  continente: continenteType;
}

const ContinentPage = ({ continente }: ContinentPageProps) => {
  return (
    <Flex align="center" direction="column">
      <Flex
        w="100%"
        h={{ base: '100px', lg: '500px' }}
        bgImage={continente.banner}
        bgSize="cover"
        bgPosition="center"
        align={{ base: 'center', lg: 'end' }}
        justify={{ base: 'center', lg: 'start' }}
      >
        <Text
          fontSize={{ base: '28px', lg: '48px' }}
          fontWeight="600"
          lineHeight={{ base: '42px', lg: '72px' }}
          color="light.text"
          mb={{ base: 0, lg: '59px' }}
          ml={{ base: 0, lg: '140px' }}
        >
          {continente.continent}
        </Text>
      </Flex>
      <Flex
        p={{ base: '24px 16px', md: '48px 32px', lg: '80px 140px' }}
        direction="column"
      >
        <Flex
          mb={{ base: '32px', lg: '80px' }}
          align="center"
          direction={{ base: 'column', lg: 'row' }}
        >
          <Text
            w={{ base: '100%', lg: '60%' }}
            fontSize={{ base: '14px', lg: '18px' }}
            lineHeight={{ base: '21px', lg: '36px' }}
            align="justify"
            mb={{ base: '16px', lg: 0 }}
          >
            {continente.description}
          </Text>
          <Flex align="center" m="0 auto" gap="42px">
            <ContinentInfo number={continente.countries} type="países" />
            <ContinentInfo number={continente.languages} type="línguas" />
            <ContinentInfo
              number={continente.mostTenCitys}
              type="cidades +100"
            />
          </Flex>
        </Flex>
        <Text
          fontSize={{ base: '24px', lg: '36px' }}
          lineHeight={{ base: '34px', lg: '54px' }}
          fontWeight="500"
          mb={{ base: '20px', lg: '40px' }}
        >
          Cidades +100
        </Text>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4, xl: 5 }}
          spacing={10}
          px={{ base: '20px', md: 0 }}
        >
          {continente.citys.map((city) => (
            <CityCard key={city.name} city={city} />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const continente = continentes(slug as string);

  return { props: { continente } };
};

export default ContinentPage;
