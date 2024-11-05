import mongoose from 'mongoose'

const dukunganSchema = new mongoose.Schema(
  {
    pdfInfo: { type: String, required: true },
  },
  { collection: 'dukungan_penegak_hukum' },
)

// Check if the model already exists; if it does, use it, otherwise create a new one
const dukunganPenegakHukum =
  mongoose.models.dukunganPenegakHukum || mongoose.model('dukunganPenegakHukum', dukunganSchema)

export default dukunganPenegakHukum
