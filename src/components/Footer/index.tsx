import { Box, Flex, Text } from '@chakra-ui/react'

const Footer = () => (
  <Box bg="primary.soft" color="primary.deep" py={6} mt="5">
    <Flex
      maxW="1200px"
      mx="auto"
      justify="space-between"
      align="center"
      flexWrap="wrap"
    >
      {/* Kontak */}
      <Box>
        <Text fontWeight="bold">Kontak Kami:</Text>
        <Text>Email: dishubnah@acehjayakab.go.id</Text>
      </Box>

      {/* Informasi */}
      <Box textAlign="right" fontWeight="semibold">
        {' '}
        <Text>WADAH PENGADUAN PELAPORAN DAN INFORMASI</Text>
        <Text> DINAS PERHUBUNGAN DAN PERTAHANAN KAB. ACEH JAYA</Text>
      </Box>
    </Flex>
  </Box>
)

export default Footer
