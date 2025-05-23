import Footer from "@/components/Footer/Footer";
import RootWrapper from "@/wrapper/RootWrapper";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable}  antialiased`}>
        <RootWrapper>
          {/* <CustomCursor /> */}

          {/* <FixedEmailLeft /> */}

          {children}

          <Footer />
        </RootWrapper>
      </body>
    </html>
  );
}
