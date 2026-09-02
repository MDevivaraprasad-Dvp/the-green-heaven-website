import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],

  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Green Heaven",
    default: "Welcome to The Green Heaven",
  },
  description:
    "The Green Heaven is a serene and eco-friendly retreat nestled in the heart of nature. Our mission is to provide a sustainable and rejuvenating experience for our guests, offering cozy cabins, lush landscapes, and a commitment to environmental stewardship.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-primary-950 text-primary-100 min-h-screen antialiased ${josefinSans.className} flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto ">{children}</main>
        </div>
      </body>
    </html>
  );
}
