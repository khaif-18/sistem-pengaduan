"use client";

import dynamic from 'next/dynamic';

const DynamicKirComp = dynamic(() => import('./kirComp'), { ssr: false });

export default function Kir() {
  return <DynamicKirComp />;
}