import {
  Box,
  Image,
  Flex,
  Text,
  Link,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg="primary.deep" color="white" py={4}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Flex align="center">
          <Image
            src="https://dishub.acehprov.go.id/wp-content/uploads/2021/12/Dishub-Aceh-logo.png"
            alt="Logo"
            width={100}
          />
          <Text fontSize="2xl" fontWeight={'bold'} ml={3}>
            WADAH PENGADUAN PELAPORAN DAN INFORMASI DINAS PERHUBUNGAN DAN
            PERTAHANAN KAB. ACEH JAYA
          </Text>
        </Flex>

        <IconButton
          aria-label="Menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />

        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack align="start">
                <Link href="#" onClick={onClose}>
                  KIR
                </Link>
                <Link href="#" onClick={onClose}>
                  KESELAMATAN BERLALU LINTAS
                </Link>
                <Link href="#" onClick={onClose}>
                  PELAJAR PELOPOR
                </Link>
                <Link href="#" onClick={onClose}>
                  JADWAL KEBERANGKATAN & KEDATANGAN
                </Link>
                <Link href="#" onClick={onClose}>
                  PERTAHANAN
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  )
}

export default Header
