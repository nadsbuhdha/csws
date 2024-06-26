import { Inter, Open_Sans } from "next/font/google";
import Navbar from "./components/Navbar"
import "./globals.css";
// import { Luckiest_Guy } from "next/font/google";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


const opensans = Open_Sans ({
  subsets: ['cyrillic'],
  variable: "--font-Open-Sans",
  weight:"400",
})

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cant Stop Wont Stop",
  icon:'/cant_stop_wont_stop_logo no back.png',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${opensans.variable}`}> <Navbar />{children}
      <Footer />
      
      {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
      </body>
    </html>
  );
}
