import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import ChatbotWidget from "@/components/chatbot/chatbot-widget";
import { ThemeProvider } from "@/components/theme-provider";
import * as React from "react";

export const metadata: Metadata = {
  title: "Certitude Professionals",
  description:
    "Expert Software Solutions and POS System Development by Certitude Professionals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Page structure */}
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>

          {/* Floating pieces that sit above the page */}
          <ChatbotWidget />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
