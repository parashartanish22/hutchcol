"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct Next.js router for client-side components
import Link from "next/link";
import Hutchcol_font from "../assets/Asset 1 1.svg";
import {
  IconMenu2,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeProvider } from "../../component/themeProvider";
import { ThemeToggle } from "../../component/themeToggle";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // Close menu when navigation occurs
  const pathname = usePathname();
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <Hutchcol_font width={40} height={40} />
                <span className="font-bold hidden sm:inline-block">
                  HutchCol
                </span>
              </Link>
              <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                    >
                      <IconMenu2 className="h-6 w-6" />
                      <span className="sr-only">Toggle Menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="pr-0">
                    <Link href="/" className="flex items-center mb-6">
                      <Hutchcol_font width={40} height={40} />
                      <span className="font-bold ml-2">HutchCol</span>
                    </Link>
                    <nav className="flex flex-col gap-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMenuOpen(false)} // Close menu when clicked
                          className="text-foreground/60 transition-colors hover:text-foreground/80"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </header>
          <main className="container mx-auto px-4 sm:px-6 py-8">
            {children}
          </main>
          <footer className="border-t">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:flex-row md:py-6">
              <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
                <Hutchcol_font width={50} height={50} />
                <p className="text-center text-sm leading-loose md:text-left">
                  Built by HutchCol. All rights reserved.
                </p>
              </div>
              <div className="flex gap-6">
                <a
                  href="https://www.facebook.com/share/159AX6PDkU/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <IconBrandFacebook className="w-6 h-6 text-blue-600 hover:text-blue-800" />
                </a>
              </div>
              <div className="flex flex-col items-center md:flex-row gap-4 text-sm">
                <a href="mailto:info@hutchcol.com" className="hover:underline">
                  Contact Us
                </a>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
