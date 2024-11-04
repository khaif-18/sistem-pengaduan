"use client";

import dynamic from 'next/dynamic';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

const DynamicKirComp = dynamic(() => import('./kirComp'), { ssr: false });

export default function Kir() {
  return <DynamicKirComp />;
}