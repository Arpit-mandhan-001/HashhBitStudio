import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata = {
  title: "Hashhbit Studio | Digital Marketing, Web Solutions & Creative Tech",
  description: "Hashhbit Studio is a next-generation creative technology and digital marketing studio crafting bespoke web experiences, growth engineering, and digital solutions.",
  keywords: ["Hashhbit Studio", "Digital Marketing", "Web Solutions", "Creative Technology", "UI/UX Design", "Brand Architecture"],
  openGraph: {
    title: "Hashhbit Studio — High Performance Digital & Web Solutions",
    description: "Premium digital marketing, immersive web applications, and tech-driven growth engineering.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${syne.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-[#F7F3EC] text-[#282126] font-sans antialiased selection:bg-[#B8A6C9] selection:text-[#282126] overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
