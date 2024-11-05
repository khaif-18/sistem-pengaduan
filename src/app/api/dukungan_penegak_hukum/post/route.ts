import connectDB from '@/server/connection'
import dukunganPenegakHukum from '@/server/models/dukungan'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    await connectDB()

    const body = await req.json()

    const {
      pdfInfo
    } = body
    if (!pdfInfo) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 },
      )
    }
    // let pdfBuffer = null
    // if (pdfInfo) {
    //   try {
    //     pdfBuffer = Buffer.from(pdfInfo, 'base64')
    //   } catch (error: unknown) {
    //     if (error instanceof Error) {
    //       return NextResponse.json(
    //         { error: 'Terjadi kesalahan saat mengonversi file' },
    //         { status: 400 },
    //       )
    //     }
    //   }
    // }
    const formDukungan = new dukunganPenegakHukum({  
      pdfInfo,
    })

    await formDukungan.save()
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
