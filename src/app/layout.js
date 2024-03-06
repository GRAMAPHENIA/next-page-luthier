import React from "react";

import { Inter } from "next/font/google";
import "./globals.css";

import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Di corato Luthier",
  description: "Creado por Concepto Hexágono",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Suspense>{children}</Suspense>
      </body>
    </html>
  );
}
