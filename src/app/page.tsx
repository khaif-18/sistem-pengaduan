'use client'

import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/themes/theme'
import Layout from '@/components/Layouts'

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Layout />
    </ChakraProvider>
  )
}
