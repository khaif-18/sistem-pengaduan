// "use server";
import connectDB from "@/server/connection";
import pengaduan from "@/server/models/form";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectDB();

    const dataPengaduan = await pengaduan.find({}).sort({ _id: -1 }).exec();

    const responseData = dataPengaduan.map((record) => {
      return {
        ...record.toObject(),
        evidence: record.evidence
          ? `data:image/jpeg;base64,${record.evidence.toString("base64")}`
          : null,
      };
    });

    return NextResponse.json(responseData, { 
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=1',
        'CDN-Cache-Control': 'public, s-maxage=60',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=3600',
      },});
  } catch (error: unknown) {
    console.error("Error:", error);

    return NextResponse.json(
      {
        error:
          "Gagal mengambil data pengaduan: " +
          (error instanceof Error ? error.message : "kesalahan yang tidak diketahui"),
      },
      { status: 500 }
    );
  }
}
