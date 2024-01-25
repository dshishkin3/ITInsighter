import { createTheme, MantineProvider, ColorSchemeScript } from "@mantine/core";

import { Inter } from "next/font/google";

import { Header } from "@/widgets/header";

import type { Metadata } from "next";

import "@/app/styles/_globals.scss";
import "@/app/styles/_vars.scss";
import "@mantine/core/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ITInsighter",
    description: "Blog about code, technology and self-development",
};

const theme = createTheme({
    fontFamily: "Montserrat, sans-serif",
    defaultRadius: "md",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <ColorSchemeScript />
            </head>
            <body className={inter.className}>
                <MantineProvider defaultColorScheme="dark" theme={theme}>
                    <Header />
                    {children}
                </MantineProvider>
            </body>
        </html>
    );
}
