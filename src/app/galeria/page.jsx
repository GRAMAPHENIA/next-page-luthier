import React from "react";
import GuitarItem from "@/components/GuitarItem";
import data from "../../data/data.json";

import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 relative rounded-2xl overflow-hidden bg-[var(--primary)] my-10 py-4 px-6">
        {data.map((guitar) => (
          <GuitarItem
            guitar={guitar}
          />
        ))}
      </div>
    </>
  );
}
