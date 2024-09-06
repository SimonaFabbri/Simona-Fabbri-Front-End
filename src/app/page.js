import "./globals.css";
import Home from "../components/Home.js";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Home />
      <Footer />
    </>
  );
}
