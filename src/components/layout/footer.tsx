import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Certitude Professionals. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
Footer.displayName = "Footer";
