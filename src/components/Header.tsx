import { Flex, Icon, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';

interface HeaderProps {
  showGoHomeButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showGoHomeButton = false }) => {
  return (
    <Flex
      as="header"
      w="100%"
      align="center"
      h={{ base: '50px', md: '100px' }}
      px="36"
    >
      {showGoHomeButton && (
        <Link href="/" passHref>
          <Icon as={IoIosArrowBack} />
        </Link>
      )}
      <Image margin="0 auto" src="/images/logo.svg" alt="Logo" />
    </Flex>
  );
};
