import Footer from "./(Components)/Footer/Footer";
import Navbar from "./(Components)/Navbar/Navbar";
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
        <div className="App">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
