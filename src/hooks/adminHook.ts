import { useEffect, useState } from "react"

interface PengaduanItem {
  id: number
  jenisPengaduan: string
  tanggal: string
  nama: string
  noTelepon: string
  deskripsi: string
  evidence: string
}

export function useAdminPagination(pageSize: number) {
  const [items, setItems] = useState<PengaduanItem[]>([])
  const [page, setPage] = useState(1)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    async function fetchPengaduan() {
      const response = await fetch('/api/complaint/get')
      const data = await response.json()
      setItems(data)
      setTotalItems(data.length)
    }
    
    fetchPengaduan()
  }, [])

  const startRange = (page - 1) * pageSize
  const endRange = startRange + pageSize
  const visibleItems = items.slice(startRange, endRange)

  return { visibleItems, page, setPage, totalItems }
}
