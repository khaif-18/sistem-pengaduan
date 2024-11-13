"use client"
import { Box, HStack, Heading, Stack, Table } from "@chakra-ui/react"
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination"
// import { useState } from "react"
import { useAdminPagination } from "@/hooks/adminHook"
import Image from "next/image"

export default function Admin() {
  const pageSize = 5

  // const [page, setPage] = useState(1)
  // const startRange = (page - 1) * pageSize
  // const endRange = startRange + pageSize
  // const visibleItems = items.slice(startRange, endRange)
  const { visibleItems, page, setPage, totalItems, loading } = useAdminPagination(pageSize)

  if (loading) {
    return <Box>Loading data...</Box>;
  }

  return (
    <Box maxW="1200px" mx="auto" mt={10}>
      <Stack width="full" gap="5">
        <Heading size="xl">Pengaduan</Heading>
        <Table.Root size="lg" variant="outline" striped>
          <Table.Header bg={"blue.300"}>
            <Table.Row >
              <Table.ColumnHeader>Jenis Pengaduan</Table.ColumnHeader>
              <Table.ColumnHeader>Tanggal</Table.ColumnHeader>
              <Table.ColumnHeader>Nama Lengkap</Table.ColumnHeader>
              <Table.ColumnHeader>Nomor Telepon</Table.ColumnHeader>
              <Table.ColumnHeader>Deskripsi</Table.ColumnHeader>
              <Table.ColumnHeader>Evidence</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {visibleItems.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell>{item.jenisPengaduan}</Table.Cell>
                <Table.Cell>{item.tanggal.split('T')[0]}</Table.Cell>
                <Table.Cell>{item.nama}</Table.Cell>
                <Table.Cell>{item.noTelepon}</Table.Cell>
                <Table.Cell maxW={80}>{item.deskripsi}</Table.Cell>
                {item.evidence && (
                  <Table.Cell>
                    <Image src={item.evidence} alt="Evidence" width={50} height={50} />
                  </Table.Cell>
                )}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>

        <PaginationRoot
          page={page}
          count={totalItems}
          pageSize={pageSize}
          onPageChange={(e) => setPage(e.page)}
        >
          <HStack>
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </HStack>
        </PaginationRoot>
      </Stack>
    </Box>
  )
}

// const items = [
//   { id: 1, jenisPengaduan: "Kritik & Saran", tanggal: "2024-10-20", namaLengkap: "Adit", nomorTelepon: "08123456789", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.", evidence: "https://via.placeholder.com/150" },
//   { id: 2, jenisPengaduan: "Lampu Traffic Light Mati", tanggal: "2024-10-21", namaLengkap: "Dimas", nomorTelepon: "08123456789", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.", evidence: "https://via.placeholder.com/150" },
//   { id: 3, jenisPengaduan: "Pelayanan", tanggal: "2024-10-22", namaLengkap: "Bima", nomorTelepon: "08123456789", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.", evidence: "https://via.placeholder.com/150" },
//   { id: 4, jenisPengaduan: "Kritik & Saran", tanggal: "2024-10-23", namaLengkap: "Agus", nomorTelepon: "08123456789", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.", evidence: "https://via.placeholder.com/150" },
//   { id: 5, jenisPengaduan: "Pelayanan", tanggal: "2024-10-24", namaLengkap: "Asep", nomorTelepon: "08123456789", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.", evidence: "https://via.placeholder.com/150" },
//   { id: 6, jenisPengaduan: "Kritik & Saran", tanggal: "2024-10-25", namaLengkap: "Rizky", nomorTelepon: "08123456789", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.", evidence: "https://via.placeholder.com/150" },
//   { id: 7, jenisPengaduan: "Pelayanan", tanggal: "2024-10-26", namaLengkap: "Rizal", nomorTelepon: "08123456789", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.", evidence: "https://via.placeholder.com/150" },
//   { id: 8, jenisPengaduan: "Kritik & Saran", tanggal: "2024-10-27", namaLengkap: "Agung", nomorTelepon: "08123456789", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.", evidence: "https://via.placeholder.com/150" },
//   { id: 9, jenisPengaduan: "Pelayanan", tanggal: "2024-10-28", namaLengkap: "Dapit", nomorTelepon: "08123456789", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.", evidence: "https://via.placeholder.com/150" },
//   { id: 10, jenisPengaduan: "Kritik & Saran", tanggal: "2024-10-29", namaLengkap: "Opet", nomorTelepon: "08123456789", deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc.", evidence: "https://via.placeholder.com/150" },
// ]
