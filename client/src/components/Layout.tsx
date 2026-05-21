import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Linkedin } from "lucide-react";

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
    <header className="sticky top-0 z-50 bg-[#F2F5F4]/95 backdrop-blur-sm border-b border-[#C8CCCA]" style={{ borderBottomWidth: '0.5px' }}>
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="font-sans text-lg font-black text-[#2A6E67] tracking-tight" style={{ fontWeight: 900 }}>
            Tech Love Consulting
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans font-semibold text-xs uppercase tracking-[0.06em] no-underline transition-colors duration-200 ${
                location.startsWith(link.href)
                  ? "text-[#2A6E67]"
                  : "text-[#7A7A74] hover:text-[#2A6E67]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/discovery-call" className="btn-primary no-underline">
            Book a Discovery Call
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#1A1A18]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-[#F2F5F4] border-t border-[#C8CCCA] px-6 py-6 space-y-4" style={{ borderTopWidth: '0.5px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block font-sans font-semibold text-xs uppercase tracking-[0.06em] no-underline ${
                location.startsWith(link.href)
                  ? "text-[#2A6E67]"
                  : "text-[#7A7A74]"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/discovery-call"
            className="btn-primary no-underline inline-block mt-4"
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
    <footer className="bg-[#F2F5F4] border-t border-[#C8CCCA]" style={{ borderTopWidth: '0.5px' }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-sans text-base font-700 text-[#2A6E67] mb-4">
              Tech Love Consulting
            </h4>
            <p className="text-sm text-[#7A7A74] leading-relaxed">
              AI strategy for founder-led businesses. Built on 20 years of operational leadership.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-[0.6875rem] font-700 text-[#7A7A74] uppercase tracking-[0.2em] mb-4">
              Services
            </h4>
            <nav className="space-y-2">
              <Link href="/services/ai-fit-check" className="block text-sm text-[#7A7A74] hover:text-[#2A6E67] no-underline font-serif">AI Fit Check</Link>
              <Link href="/services/ai-clarity-sprint" className="block text-sm text-[#7A7A74] hover:text-[#2A6E67] no-underline font-serif">AI Clarity Sprint</Link>
              <Link href="/services/ai-design-activation-sprint" className="block text-sm text-[#7A7A74] hover:text-[#2A6E67] no-underline font-serif">AI Design + Activation Sprint</Link>
              <Link href="/services/embedded-ai-advisor" className="block text-sm text-[#7A7A74] hover:text-[#2A6E67] no-underline font-serif">Embedded AI Advisor</Link>
            </nav>
          </div>
          <div>
            <h4 className="font-sans text-[0.6875rem] font-700 text-[#7A7A74] uppercase tracking-[0.2em] mb-4">
              Connect
            </h4>
            <nav className="space-y-2">
              <Link href="/discovery-call" className="block text-sm text-[#7A7A74] hover:text-[#2A6E67] no-underline font-serif">Book a Discovery Call</Link>
              <Link href="/contact" className="block text-sm text-[#7A7A74] hover:text-[#2A6E67] no-underline font-serif">Contact</Link>
              <Link href="/scale-framework" className="block text-sm text-[#7A7A74] hover:text-[#2A6E67] no-underline font-serif">SCALE Framework</Link>
              <Link href="/blog" className="block text-sm text-[#7A7A74] hover:text-[#2A6E67] no-underline font-serif">Blog</Link>
              <a
                href="https://www.linkedin.com/in/erynnkirshner"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#7A7A74] hover:text-[#2A6E67] no-underline font-serif transition-colors"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </nav>
          </div>
        </div>
        <hr className="border-[#C8CCCA] my-10" style={{ borderTopWidth: '0.5px' }} />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#7A7A74]">
          <p className="mb-0">&copy; {new Date().getFullYear()} Tech Love Consulting. All rights reserved.</p>
          <nav className="flex gap-6">
            <Link href="/privacy-policy" className="text-[#7A7A74] hover:text-[#2A6E67] no-underline">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-[#7A7A74] hover:text-[#2A6E67] no-underline">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2F5F4]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
