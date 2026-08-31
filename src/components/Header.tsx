import { useState, useEffect } from 'react';
import { Building2, Menu, X, Shield, Handshake } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white py-4 shadow-[0_4px_20px_-15px_rgba(0,0,0,0.1)]' 
          : 'bg-white py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <Building2 className="w-8 h-8 text-navy-900 group-hover:text-institutional transition-colors" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-navy-900 tracking-wide leading-none">ASSOCIAÇÃO</span>
            <span className="text-[10px] text-institutional uppercase tracking-widest font-semibold mt-1">Nacional</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-graphite hover:text-institutional transition-colors">Início</Link>
          <a href={isHome ? "#sobre" : "/#sobre"} className="text-sm font-medium text-graphite hover:text-institutional transition-colors">Sobre</a>
          <a href={isHome ? "#associados" : "/#associados"} className="text-sm font-medium text-graphite hover:text-institutional transition-colors">Associados</a>
          <a href={isHome ? "#noticias" : "/#noticias"} className="text-sm font-medium text-graphite hover:text-institutional transition-colors">Notícias</a>
          <a href={isHome ? "#eventos" : "/#eventos"} className="text-sm font-medium text-graphite hover:text-institutional transition-colors">Eventos</a>
          <a href={isHome ? "#documentos" : "/#documentos"} className="text-sm font-medium text-graphite hover:text-institutional transition-colors">Documentos</a>
          <a href={isHome ? "#contato" : "/#contato"} className="text-sm font-medium text-graphite hover:text-institutional transition-colors">Contato</a>
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <Link to="/membro" className="text-institutional hover:text-navy-900 transition-colors font-semibold text-sm flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Área do Associado
          </Link>
          <Link to="/admin" className="btn-primary text-sm px-5 py-2.5">
            <Handshake className="w-4 h-4" />
            Associe-se
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-navy-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-graphite font-medium py-2 border-b border-gray-50">Início</Link>
          <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-graphite font-medium py-2 border-b border-gray-50">Sobre</a>
          <a href="#associados" onClick={() => setIsMobileMenuOpen(false)} className="text-graphite font-medium py-2 border-b border-gray-50">Associados</a>
          <Link to="/membro" onClick={() => setIsMobileMenuOpen(false)} className="text-institutional font-semibold py-2 border-b border-gray-50 flex items-center gap-2">
            <Shield className="w-4 h-4" /> Área do Associado
          </Link>
          <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)} className="text-gold font-semibold py-2 flex items-center gap-2">
            <Handshake className="w-4 h-4" /> Associe-se
          </Link>
        </div>
      )}
    </header>
  );
}
