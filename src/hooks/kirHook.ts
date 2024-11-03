import { useEffect, useState } from "react";
import axios from "axios";

// interface KirItem {
//   pdfInfo: string;
// }

export function useKirHook() {
  const [item, setItem] = useState<string>();

  useEffect(() => {
    async function fetchKirPDFs() {
      try {
        const response = await axios.get('/api/kir/get');
        setItem(response.data[0].pdfInfo)
      } catch (error) {
        console.error("Error fetching PDF data:", error);
      }
    }
    
    fetchKirPDFs();
  }, []);

  return { item };
}
