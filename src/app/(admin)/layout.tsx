import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "Tuân làm trang Admin",
    description: "Giao diện dự án của Tuân",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`w-full h-auto flex flex-col items-center`}>
                {children}
            </body>
        </html>
    );
}
