import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LifeProvider } from "@/context/LifeContext";
import ErrorBoundary from "@/components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estrategia de Vida",
  description: "Diseña tu estrategia de vida distribuyendo tus 168 horas semanales con el marco de Rainer Strack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ErrorBoundary>
          <LifeProvider>
            {children}
          </LifeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
