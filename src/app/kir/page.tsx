"use client";

import dynamic from 'next/dynamic';
import { pdfjs } from 'react-pdf';
import KirComp from './kirComp';

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

const DynamicKirComp = dynamic(() => Promise.resolve(KirComp), { ssr: false });

export default function Kir() {
  return <DynamicKirComp />;
}
