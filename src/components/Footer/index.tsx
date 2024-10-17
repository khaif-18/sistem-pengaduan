import { Box, Flex, Text } from '@chakra-ui/react'

const Footer = () => (
  <Box bg="primary.soft" color="primary.deep" py={6} mt="auto">
    <Flex maxW="1200px" mx="auto" justify="space-between" flexWrap="wrap">
      <Box>
        <Text>Contact us at:</Text>
        <Text>Email: Lorem@Ipsum.go.id</Text>
        <Text>Phone: (Space Nomer)</Text>
      </Box>
      <Box>
        <Text>Lorem Ipsum</Text>
      </Box>
    </Flex>
  </Box>
)

export default Footer
