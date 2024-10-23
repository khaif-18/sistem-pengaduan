import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
} from '@chakra-ui/react'
import { useForm } from './hook'

const ComplaintForm = () => {
  const { formik, handleFileChange } = useForm() // Tambahkan handler untuk file

  return (
    <Box maxW="600px" mx="auto" mt={10} px={4}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Pilih Jenis Pengaduan Anda</FormLabel>
          <Select
            onChange={formik.handleChange}
            defaultValue={'Kritik & Saran'}
            name="jenis_pengaduan"
          >
            <option value="Kritik & Saran">Kritik & Saran</option>
            <option value="Lampu Traffic Light Mati">
              Lampu Traffic Light Mati
            </option>
            <option value="Pelayanan">Pelayanan</option>
          </Select>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Tanggal</FormLabel>
          <Input onChange={formik.handleChange} name="tanggal" type="date" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Nama Lengkap</FormLabel>
          <Input
            onChange={formik.handleChange}
            value={formik.values.nama}
            name="nama"
            placeholder="Nama Lengkap"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Alamat</FormLabel>
          <Input
            onChange={formik.handleChange}
            value={formik.values.alamat}
            name="alamat"
            placeholder="Alamat"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Nomor Telepon (WhatsApp)</FormLabel>
          <Input
            type="string"
            onChange={formik.handleChange}
            value={formik.values.no_telp}
            maxLength={13}
            name="no_telp"
            placeholder="Nomor Telepon"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Detail Pengaduan</FormLabel>
          <Textarea
            onChange={formik.handleChange}
            value={formik.values.deskripsi}
            name="deskripsi"
            bg="primary.soft"
            placeholder="Deskripsikan pengaduan"
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Evidence</FormLabel>
          <Input
            type="file"
            onChange={(event) => handleFileChange(event)} // Gunakan handler khusus
            name="evidence"
            placeholder="Evidence"
          />
        </FormControl>

        <Button colorScheme="blue" width="100%" type="submit">
          Kirim Pengaduan
        </Button>
      </form>
    </Box>
  )
}

export default ComplaintForm
