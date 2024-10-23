import mongoose from 'mongoose'

const pengaduanSchema = new mongoose.Schema(
  {
    jenis_pengaduan: { type: String, required: true },
    tanggal: { type: Date, required: true },
    nama: { type: String, required: true },
    alamat: { type: String, required: true },
    no_telp: { type: String, required: true },
    evidence: { type: Buffer },
    deskripsi: { type: String, required: true },
  },
  { collection: 'form' },
)

// Check if the model already exists; if it does, use it, otherwise create a new one
const pengaduan =
  mongoose.models.pengaduan || mongoose.model('pengaduan', pengaduanSchema)

export default pengaduan
