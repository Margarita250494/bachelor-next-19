import {Poppins, Rubik} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
});
export const metadata = {
  title: "Bachelor optimized App with React 18, Nex, Tailwind",
  description: "Bachelor optimized App with React 18, Nex, Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
