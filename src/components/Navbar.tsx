import { Box, VStack, HStack, Link, Flex, Text, Skeleton, ClientOnly } from '@chakra-ui/react'
import { usePathname } from 'next/navigation';
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

export const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <Box bg={"blue.500"} py={4}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Flex align="center">
          <Image
            src='/static/logo-dishub.png'
            alt="Logo"
            width={100}
            height={100}
          />
          <Text fontSize={{ md: "md", base: "sm", lg: "2xl" }} fontWeight={'bold'} ml={3}>
            Sistem Informasi dan Komunikasi Lalu Lintas Angkutan Jalan (SIKomandan)
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
            <DrawerContent roundedBottom={'l3'}>
              <DrawerHeader>
                <DrawerTitle>Menu</DrawerTitle>
              </DrawerHeader>
              <DrawerBody pb={8}>
                <VStack align="start">
                  <Link
                    href="/"
                    fontWeight={isActive('/') ? 'bold' : 'normal'}
                    color={isActive('/') ? 'blue.700' : 'inherit'}
                  >
                    Form Pengaduan
                  </Link>
                  <Link
                    href="/dukungan_penegak_hukum"
                    fontWeight={isActive('/dukungan_penegak_hukum') ? 'bold' : 'normal'}
                    color={isActive('/dukungan_penegak_hukum') ? 'blue.700' : 'inherit'}
                  >
                    Data Dukungan Penegakan Hukum
                  </Link>
                  <Link
                    href="#"
                    fontWeight={isActive('#') ? 'bold' : 'normal'}
                    color={isActive('#') ? 'blue.700' : 'inherit'}
                  >
                    Data Informasi dan Komunikasi LLAJ
                  </Link>
                  <Link
                    href="#"
                    fontWeight={isActive('#') ? 'bold' : 'normal'}
                    color={isActive('#') ? 'blue.700' : 'inherit'}
                  >
                    Data Pengendalian Pergerakan Lalu Lintas dan Angkutan
                  </Link>
                  <Link
                    href="#"
                    fontWeight={isActive('#') ? 'bold' : 'normal'}
                    color={isActive('#') ? 'blue.700' : 'inherit'}
                  >
                    Data Dukungan Pelayanan Perizinan dan Kegiatan Usaha Angkutan Jalan
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
  );
};
