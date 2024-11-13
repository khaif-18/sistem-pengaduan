import axios from "axios";
import { useEffect, useState } from "react";

interface PengaduanItem {
    id: number;
    jenisPengaduan: string;
    tanggal: string;
    nama: string;
    noTelepon: string;
    deskripsi: string;
    evidence: string;
}

export function useAdminPagination(pageSize: number) {
    const [items, setItems] = useState<PengaduanItem[]>([]);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true); // Status loading

    useEffect(() => {
        async function fetchPengaduan() {
            setLoading(true); // Mulai proses pemuatan
            try {
                const response = await axios.get("/api/complaint/get");
                const data = response.data;

                if (Array.isArray(data)) {
                    setItems(data);
                    setTotalItems(data.length);
                } else {
                    throw new Error("Data isn't an array");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setItems([]);
                setTotalItems(0);
            } finally {
                setLoading(false); 
            }
        }

        fetchPengaduan();
    }, []);

    const startRange = (page - 1) * pageSize;
    const endRange = startRange + pageSize;
    const visibleItems = items.slice(startRange, endRange);

    return { visibleItems, page, setPage, totalItems, loading };
}
