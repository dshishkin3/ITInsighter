import type { Metadata } from "next";
import Editor from "./page";

export const metadata: Metadata = {
    title: "Editor",
    description: "Editor when you can to create your dream",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
