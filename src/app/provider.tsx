"use client"

import { Box, ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Box minH="100vh" w={"full"} display="flex" flexDirection="column">
          <Navbar />
          <Box as="main" flex="1">
            {props.children}
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </ChakraProvider>
  )
}
