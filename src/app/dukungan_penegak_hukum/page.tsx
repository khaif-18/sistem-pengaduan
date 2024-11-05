"use client";

import dynamic from 'next/dynamic';

const DynamicDukunganComp = dynamic(() => import('./dukunganComp'), { ssr: false });

export default function Dukungan() {
  return <DynamicDukunganComp />;
}