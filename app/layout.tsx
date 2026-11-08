import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { DM_Sans, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-shippori",
});

export const metadata: Metadata = {
  title: "Okamy Sushi Bar | Poranga, CE",
  description:
    "Sushi bar em Poranga, Ceará. Veja o cardápio, fale no WhatsApp e saiba como chegar.",
  applicationName: "Okamy Sushi Bar",
  icons: {
    icon: "/favicon-okamy.png",
  },
  openGraph: {
    title: "Okamy Sushi Bar | Poranga, CE",
    description:
      "Seu próximo momento especial começa aqui. Confira nosso cardápio e entre em contato.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${shippori.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
