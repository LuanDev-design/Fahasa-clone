import type { Metadata } from "next";
import "../globals.css";
import HeaderComponent from "./component/header";
import FooterComponent from "./component/footer";

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
        <div className="w-full ">
            <HeaderComponent/>
            <div className="w-full bg-[#f0f0f0]">
                {children}
            </div>
            <FooterComponent/>
        </div>
    );
}
