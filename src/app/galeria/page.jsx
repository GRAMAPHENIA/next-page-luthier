import React from "react";
import GuitarItem from "@/components/GuitarItem";
import data from "@/data/data.json";

import Image from "next/image";

export const metadata = {
  title: "Galeria de fotos",
};

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 relative rounded-2xl overflow-hidden bg-[var(--primary)] my-2 py-4 px-6">
        {data.map((guitar) => (
          <GuitarItem key={guitar.id} guitar={guitar} />
        ))}
      </div>
    </>
  );
}
