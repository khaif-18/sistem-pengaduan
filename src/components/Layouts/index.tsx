import { Box } from '@chakra-ui/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ComplaintForm from '@/components/Form/Complaint'

const Layout = () => (
  <Box minH="100vh" display="flex" flexDirection="column">
    <Header />
    <Box as="main" flex="1">
      <ComplaintForm />
    </Box>
    <Footer />
  </Box>
)

export default Layout
