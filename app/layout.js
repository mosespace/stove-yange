import "./globals.css";
import { Poppins } from "next/font/google";
import Alert from "./components/Alert";
import Nav from "./components/nav-bar/Nav";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "StoveYo",
  description: "Created by Kisakye Moses",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Alert />
        <Nav />
        {children}
        <script src='../path/to/flowbite/dist/flowbite.min.js'></script>
      </body>
    </html>
  );
}
