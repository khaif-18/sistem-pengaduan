import { Inter } from "next/font/google"
import Provider from "./provider"
import Head from "./head"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Sistem Pengaduan",
  description: "Sistem Pengaduan - A platform for submitting complaints",
  openGraph: {
    title: "NoLink",
    description: "Sistem Pengaduan - A platform for submitting complaints",
    siteName: "Sistem Pengaduan",
    authors: "Khaif",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.className} suppressHydrationWarning>
      <Head />
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
