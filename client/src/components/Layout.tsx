import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/scale-framework", label: "SCALE Framework" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="font-serif text-xl font-bold text-teal tracking-tight">
            Tech Love Consulting
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold no-underline transition-colors duration-200 ${
                location.startsWith(link.href)
                  ? "text-teal"
                  : "text-foreground/70 hover:text-teal"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/discovery-call" className="btn-primary text-sm !py-2.5 !px-5 no-underline">
            Book a Discovery Call
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-cream border-t border-border px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-base font-semibold no-underline ${
                location.startsWith(link.href)
                  ? "text-teal"
                  : "text-foreground/70"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/discovery-call"
            className="btn-primary text-sm !py-2.5 !px-5 no-underline inline-block mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Book a Discovery Call
          </Link>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-teal text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-serif text-lg font-bold text-cream mb-4">
              Tech Love Consulting
            </h4>
            <p className="text-cream/80 text-sm leading-relaxed">
              AI strategy for founder-led businesses. Built on 20 years of operational leadership.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-sm font-bold text-cream uppercase tracking-wider mb-4">
              Services
            </h4>
            <nav className="space-y-2">
              <Link href="/services/ai-fit-check" className="block text-sm text-cream/80 hover:text-cream no-underline">AI Fit Check</Link>
              <Link href="/services/ai-clarity-sprint" className="block text-sm text-cream/80 hover:text-cream no-underline">AI Clarity Sprint</Link>
              <Link href="/services/ai-design-activation-sprint" className="block text-sm text-cream/80 hover:text-cream no-underline">AI Design + Activation Sprint</Link>
              <Link href="/services/embedded-ai-advisor" className="block text-sm text-cream/80 hover:text-cream no-underline">Embedded AI Advisor</Link>
            </nav>
          </div>
          <div>
            <h4 className="font-sans text-sm font-bold text-cream uppercase tracking-wider mb-4">
              Connect
            </h4>
            <nav className="space-y-2">
              <Link href="/discovery-call" className="block text-sm text-cream/80 hover:text-cream no-underline">Book a Discovery Call</Link>
              <Link href="/contact" className="block text-sm text-cream/80 hover:text-cream no-underline">Contact</Link>
              <Link href="/scale-framework" className="block text-sm text-cream/80 hover:text-cream no-underline">SCALE Framework</Link>
              <Link href="/blog" className="block text-sm text-cream/80 hover:text-cream no-underline">Blog</Link>
            </nav>
          </div>
        </div>
        <hr className="border-cream/20 my-10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/60">
          <p className="mb-0">&copy; {new Date().getFullYear()} Tech Love Consulting. All rights reserved.</p>
          <nav className="flex gap-6">
            <Link href="/privacy-policy" className="text-cream/60 hover:text-cream no-underline">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-cream/60 hover:text-cream no-underline">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
