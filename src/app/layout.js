import "./globals.css";
import { Inter, League_Gothic } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const league_Gothic = League_Gothic({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league_Gothic",
});
// Metadata
export const metadata = {
  title: "Simona Fabbri Front end",
  description: "Personal web site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable + " " + league_Gothic.variable}>
      <body
        className={
          "bg-[#171717]  flex flex-col items-center overflow-x-hidden "
        }
      >
        {children}
      </body>
    </html>
  );
}
