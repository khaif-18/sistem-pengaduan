import connectDB from '../../server/connect'
import pengaduan from '../../server/models/pengaduan'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    await connectDB()

    const body = await req.json()

    const {
      jenis_pengaduan,
      tanggal,
      nama,
      alamat,
      no_telp,
      evidence,
      deskripsi,
    } = body
    if (
      !jenis_pengaduan ||
      !tanggal ||
      !nama ||
      !alamat ||
      !no_telp ||
      !evidence ||
      !deskripsi
    ) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 },
      )
    }
    let evidenceBuffer = null
    if (evidence) {
      try {
        evidenceBuffer = Buffer.from(evidence, 'base64')
      } catch (error: unknown) {
        if (error instanceof Error) {
          return NextResponse.json(
            { error: 'Terjadi kesalahan saat mengonversi file' },
            { status: 400 },
          )
        }
      }
    }
    const formPengaduan = new pengaduan({
      jenis_pengaduan,
      tanggal,
      nama,
      alamat,
      no_telp,
      evidence: evidenceBuffer,
      deskripsi,
    })

    await formPengaduan.save()
    return NextResponse.json({ done: true })
  } catch (error: unknown) {
    console.error('Error:', error)

    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Gagal mengirim form: ' + error.message },
        { status: 500 },
      )
    } else {
      return NextResponse.json(
        { error: 'Gagal mengirim form karena kesalahan yang tidak diketahui' },
        { status: 500 },
      )
    }
  }
}