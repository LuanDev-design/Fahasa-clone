import { Nunito, Roboto } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({
  display: 'swap',
  subsets: ['vietnamese'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${nunito.className} ${roboto.className} text-primary !scroll-smooth w-full`}>
        {children}
      </body>
    </html>
  );
}
