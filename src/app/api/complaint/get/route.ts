"use server";
import connectDB from "@/server/connection";
import pengaduan from "@/server/models/pengaduan";
import { NextResponse } from "next/server";

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

    return NextResponse.json(responseData);
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
