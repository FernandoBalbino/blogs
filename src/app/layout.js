import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
export const metadata = {
  title: "Portfólio || Fernando Kauã",
  description: "Portfólio || Fernando Kauã",
  icons: "favicon.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.className} antialiased  scrollbar-thin  scrollbar-thumb-[#6F5CF3] scrollbar-track-white   selection:text-black selection:bg-[#A698F8]`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
