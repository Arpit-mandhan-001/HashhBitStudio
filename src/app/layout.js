import { Inter, Poppins, Raleway, Sora } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const bingoRegular = localFont({
  src: "../fonts/Bingo-Regular.woff2",
  variable: "--font-bingo-regular",
});

const bingoItalic = localFont({
  src: "../fonts/Bingo-Italic.woff2",
  variable: "--font-bingo-italic",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${raleway.variable} ${bingoRegular.variable} ${bingoItalic.variable} ${sora.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-[#F7F3EC] text-[#282126] antialiased">
        {children}
      </body>
    </html>
  );
}
