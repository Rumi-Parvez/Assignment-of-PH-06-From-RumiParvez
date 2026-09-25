import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import { Oswald } from "next/font/google";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import AddListBtnContext from "./context/addlistbtncontext";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FITLOG",
  description: "FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${inter.className} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
        
       <AddListBtnContext>

         <NavBar></NavBar>
        
        
        <main className="py-4 px-10 container mx-auto">
          
          {children}
          
          
        </main>

        


        <Footer></Footer>
      
        </AddListBtnContext>
        <ToastContainer />
      </body>
    </html>
  );
}
