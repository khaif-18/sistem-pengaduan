
"use client";

import { Document, Page, pdfjs } from 'react-pdf';
import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useKirHook } from "@/hooks/kirHook";


export default function KirComp() {
  const { item } = useKirHook();
  const [isLoading, setIsLoading] = useState(true);
  const [numPages, setNumPages] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;
    return () => clearTimeout(timer);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <Box maxW="800px" mx="auto" mt={10} mb={10} px={4}>
      {isLoading || !item ? (
        <Text>Loading PDF...</Text>
      ) : (
        <Document file={item} onLoadSuccess={onDocumentLoadSuccess}>
          {numPages &&
            Array.from({ length: numPages }, (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={800}
              />
            ))}
        </Document>
      )}
    </Box>
  );
}
