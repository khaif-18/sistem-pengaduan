import { Box, Image, Flex, Text, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="primary.deep" color="white" py={4}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Flex align="center">
          <Image
            src="/dummy-logo.png"
            alt="Logo"
            boxSize="50px"
            borderRadius="full"
          />
          <Text fontSize="2xl" ml={3}>
            Lorem Ipsum
          </Text>
        </Flex>
        <Flex>
          <Link href="#" mx={2}>
            Beranda
          </Link>
          <Link href="#" mx={2}>
            Tentang Kami
          </Link>
          <Link href="#" mx={2}>
            Berita
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
