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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPengaduan() {
      setLoading(true);
      try {
        const response = await axios.get("/api/complaint/get", {
          headers: {
            "Cache-Control": "no-store",
          },
        });
        const data = response.data;
        setItems(data);
        setTotalItems(data.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally{
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
