import "./globals.css";
import { Montserrat, League_Gothic } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
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
    <html
      lang="en"
      className={montserrat.variable + " " + league_Gothic.variable}
    >
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
