import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import QueryProvider from "@providers/QueryProvider";
import "./globals.css";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata = {
  title: "Fast Food TNC",
  description: "Discover Delight at Fastfood TNC.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        <QueryProvider>
          <div className="App">
            <Navbar />
            {children}
            <Footer />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
