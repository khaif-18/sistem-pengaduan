import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
} from '@chakra-ui/react'

const ComplaintForm = () => (
  <Box maxW="600px" mx="auto" mt={10} px={4}>
    <FormControl mb={4}>
      <FormLabel>Pilih Jenis Pengaduan Anda</FormLabel>
      <Select>
        <option value="kritik">Kritik & Saran</option>
        <option value="lapu">Lampu Traffic Light Mati</option>
        <option value="pelayanan">Pelayanan</option>
      </Select>
    </FormControl>

    <FormControl mb={4}>
      <FormLabel>Tanggal</FormLabel>
      <Input type="date" />
    </FormControl>

    <FormControl mb={4}>
      <FormLabel>Nama Lengkap</FormLabel>
      <Input placeholder="Nama Lengkap" />
    </FormControl>

    <FormControl mb={4}>
      <FormLabel>Alamat</FormLabel>
      <Input placeholder="Alamat" />
    </FormControl>

    <FormControl mb={4}>
      <FormLabel>Nomor Telepon (WhatsApp)</FormLabel>
      <Input placeholder="Nomor Telepon" />
    </FormControl>

    <FormControl mb={4}>
      <FormLabel>Isi</FormLabel>
      <Textarea bg="primary.soft" placeholder="Isi pengaduan" />
    </FormControl>

    <Button colorScheme="blue" width="100%">
      Kirim Pengaduan
    </Button>
  </Box>
)

export default ComplaintForm
