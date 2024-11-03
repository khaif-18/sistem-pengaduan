"use server";
import connectDB from "@/server/connection";
import pengaduanKir from "@/server/models/kir";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const dataKir = await pengaduanKir.find({}).sort({ _id: -1 }).limit(1).exec();

    const responseData = dataKir.map((record) => {
      return {
        ...record.toObject(),
        pdfInfo: record.pdfInfo
          ? `data:application/pdf;base64,${record.pdfInfo.toString("base64")}`
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
