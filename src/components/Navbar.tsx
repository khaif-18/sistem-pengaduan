import { Box, VStack, HStack, Link, Flex, Text, ClientOnly, Skeleton } from '@chakra-ui/react'
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer'
import { Button } from './ui/button'
import Image from 'next/image'
import { ColorModeToggle } from './color-mode-toggle'
import logo from '../public/static/logo-dishub.png'

export const Navbar = () => (
  <Box bg={"blue.500"} py={4}>
    <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
      <Flex align="center">
        <Image
          src={logo}
          alt="Logo"
          width={100}
          height={100}
        />
        <Text fontSize={{md: "md", base: "sm", lg: "2xl" }} fontWeight={'bold'} ml={3}>
          WADAH PENGADUAN PELAPORAN DAN INFORMASI DINAS PERHUBUNGAN DAN
          PERTAHANAN KAB. ACEH JAYA
        </Text>
      </Flex>
      <HStack wrap="wrap" px={5}>
        <DrawerRoot placement='end'>
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Button variant="outline" size="sm">
              Menu
            </Button>
          </DrawerTrigger>
          <DrawerContent
            roundedBottom={'l3'}
          >
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
            </DrawerHeader>
            <DrawerBody pb={8}>
              <VStack align="start">
                <Link href="#">
                  KIR
                </Link>
                <Link href="#">
                  KESELAMATAN BERLALU LINTAS
                </Link>
                <Link href="#">
                  PELAJAR PELOPOR
                </Link>
                <Link href="#">
                  JADWAL KEBERANGKATAN & KEDATANGAN
                </Link>
                <Link href="#">
                  PERTAHANAN
                </Link>
              </VStack>
            </DrawerBody>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </HStack>
      <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
        <ColorModeToggle />
      </ClientOnly>
    </Flex>
  </Box>
)
