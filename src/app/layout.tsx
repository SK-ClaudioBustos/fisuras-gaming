import { Container, ThemeProvider } from "@mui/material";
import { Ubuntu } from "next/font/google";
import Head from "next/head";
import bg from '../../public/img/camo.svg';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PresentionBox from "./components/PresentionBox";
import { color5 } from "./styles/colors";
import "./styles/globals.css";
import "./styles/reset.css";
import theme from "./styles/theme";

const font = Ubuntu({ weight: "400", subsets: ["latin"] });

const bodyStyles = {
  backgroundImage: `url(${bg.src})`,
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
}

const containerStyles = {
  marginY: "25px",
  backgroundColor: color5,
  minHeight: "calc(100vh - 50px)",
  padding: "3vw"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Fisuras Gaming</title>
        <meta property="og:title" content="Fisuras Gaming" key="title" />
      </Head>
      <body className={font.className} style={bodyStyles}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <PresentionBox />
          <Container sx={containerStyles}>
            {children}
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
