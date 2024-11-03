import mongoose from 'mongoose'

const kirSchema = new mongoose.Schema(
  {
    pdfInfo: { type: String, required: true },
  },
  { collection: 'kir' },
)

// Check if the model already exists; if it does, use it, otherwise create a new one
const pengaduanKir =
  mongoose.models.pengaduanKir || mongoose.model('pengaduanKir', kirSchema)

export default pengaduanKir
