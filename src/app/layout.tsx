import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./styles/reset.css";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";
import Footer from "./components/Footer";
import PresentionBox from "./components/PresentionBox";

const font = Ubuntu({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fisura Gaming",
  description: "El mejor servidor de Counter Strike",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <PresentionBox />
        <Container sx={{ marginY: "25px", backgroundColor: "#435191", minHeight: "calc(100vh - 50px)", borderRadius: "6px" }}>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
