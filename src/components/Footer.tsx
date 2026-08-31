import { Building2, Phone, Mail, MapPin, Globe, Share2, MessageCircle, Rss } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy-900 pt-20 pb-8 text-gray-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="pr-4">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Building2 className="w-8 h-8 text-gold" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-wide leading-none">ASSOCIAÇÃO</span>
                <span className="text-[10px] text-institutional uppercase tracking-widest font-semibold mt-1">Nacional</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Uma organização construída para representar, fortalecer oportunidades e fomentar o desenvolvimento contínuo de nossos associados e parceiros em todo o território nacional.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Navegação</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-gold transition-colors">Início</Link></li>
              <li><a href="#sobre" className="hover:text-gold transition-colors">Institucional</a></li>
              <li><a href="#associados" className="hover:text-gold transition-colors">Associados</a></li>
              <li><a href="#documentos" className="hover:text-gold transition-colors">Documentos</a></li>
              <li><a href="#contato" className="hover:text-gold transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" /> 
                <span>(00) 0000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" /> 
                <span>contato@associacao.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">Av. Empresarial, 1000 - Andar 15<br/>Centro Financeiro - SP</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-gold hover:text-white transition-colors text-gray-400">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-gold hover:text-white transition-colors text-gray-400">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-gold hover:text-white transition-colors text-gray-400">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-gold hover:text-white transition-colors text-gray-400">
                <Rss className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Associação Nacional. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
