import "./globals.css";
import { Providers } from "./providers";
import Alert from "./components/Alert";
import { Poppins } from "next/font/google";
import Nav from "./components/nav-bar/Nav";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "OwinoUg",
  description: "Created by Kisakye Moses",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Alert />
          <Nav />
          {children}
          <script src='../path/to/flowbite/dist/flowbite.min.js'></script>
        </Providers>
      </body>
    </html>
  );
}
