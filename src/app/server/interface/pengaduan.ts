export interface IPengaduan {
  jenis_pengaduan: string
  tanggal: Date | string
  nama: string
  alamat: string
  no_telp: string
  evidence?: File | null
  deskripsi: string
}
