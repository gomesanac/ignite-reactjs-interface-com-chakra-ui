import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface SlideProps {
  slug: string;
  background: string;
  height: string;
  title: string;
  description: string;
}

export const Slide: React.FC<SlideProps> = ({
  slug,
  background,
  height,
  title,
  description,
}) => {
  return (
    <Box h={height} bgImage={background} bgSize="cover" bgPosition="center">
      <Flex
        direction="column"
        align="center"
        justify="center"
        bg="blackAlpha.500"
        h="100%"
      >
        <Link href={`/continentes/${slug}`} passHref>
          <Text
            color="light.text"
            fontWeight="700"
            fontSize={{ base: '24px', lg: '48px' }}
            lineHeight={{ base: '36px', lg: '72px' }}
            cursor="pointer"
            _hover={{ color: "highlight" }}
          >
            {title}
          </Text>
        </Link>
        <Text
          color="light.text"
          fontWeight="700"
          fontSize={{ base: '14px', lg: '24px' }}
          lineHeight={{ base: '21px', lg: '36px' }}
        >
          {description}
        </Text>
      </Flex>
    </Box>
  );
};
