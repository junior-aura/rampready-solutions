import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    href: "#features",
    label: "Features"
  }, {
    href: "#specs",
    label: "Specifications"
  }, {
    href: "#applications",
    label: "Applications"
  }, {
    href: "#testimonials",
    label: "Testimonials"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-card/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="container-max section-padding !py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-display font-bold text-xl">R</span>
            </div>
            <span className={`font-display font-bold text-xl ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>Auratec</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? "text-muted-foreground" : "text-primary-foreground/80"}`}>Avaliações{link.label}
              </a>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+1234567890" className={`flex items-center gap-2 text-sm font-medium ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
              <Phone className="w-4 h-4" />
              <span>1-800-RAMP-PRO</span>
            </a>
            <Button variant="cta" size="lg" asChild>
              <a href="#contact">Request Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} /> : <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 pb-4 border-t border-border/20 pt-4 animate-fade-up">
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => <a key={link.href} href={link.href} className={`text-sm font-medium ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </a>)}
              <Button variant="cta" size="lg" className="mt-2" asChild>
                <a href="#contact">Request Quote</a>
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;