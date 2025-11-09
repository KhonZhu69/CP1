
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import * as React from 'react';
import Logo from '@/components/logo';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2" prefetch={false}>
          <Logo className="h-8 w-auto" />
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background">
                <div className="grid gap-4 p-4">
                  <Link href="#home" className="flex items-center gap-2 pb-2 border-b border-border/50" prefetch={false} onClick={handleLinkClick}>
                    <Logo className="h-8 w-auto" />
                  </Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                      prefetch={false}
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
Navbar.displayName = "Navbar";
