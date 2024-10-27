export interface IPengaduan {
  jenisPengaduan: string
  tanggal: Date | string
  nama: string
  nomorTelepon: string
  evidence?: File | null
  deskripsi: string
}
