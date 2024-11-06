"use server";
import connectDB from "@/server/connection";
import pengaduan from "@/server/models/form";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();

        const dataPengaduan = await pengaduan.find({})
        // .sort({ _id: -1 }).exec();
        console.log("res", dataPengaduan);

        const responseData = dataPengaduan.map((record) => {
            return {
                ...record.toObject(),
                evidence: record.evidence
                    ? `data:image/jpeg;base64,${record.evidence.toString(
                          "base64"
                      )}`
                    : null,
            };
        });

        return NextResponse.json(responseData, {
            status: 200,
            headers: {
                "Cache-Control": "no-cache, no-store, max-age=0, must-revalidate",
                "CDN-Cache-Control": "no-cache, no-store, max-age=0, must-revalidate",
                "Vercel-CDN-Cache-Control": "no-cache, no-store, max-age=0, must-revalidate",
            },
        });
    } catch (error: unknown) {
        console.error("Error:", error);

        return NextResponse.json(
            {
                error:
                    "Gagal mengambil data pengaduan: " +
                    (error instanceof Error
                        ? error.message
                        : "kesalahan yang tidak diketahui"),
            },
            { status: 500 }
        );
    }
}
