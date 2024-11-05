import { useEffect, useState } from "react";
import axios from "axios";

export function useDukunganHook() {
  const [item, setItem] = useState<string>();

  useEffect(() => {
    async function fetchDukunganPDFs() {
      try {
        const response = await axios.get('/api/dukungan_penegak_hukum/get');
        setItem(response.data[0].pdfInfo)
      } catch (error) {
        console.error("Error fetching PDF data:", error);
      }
    }
    
    fetchDukunganPDFs();
  }, []);

  return { item };
}
