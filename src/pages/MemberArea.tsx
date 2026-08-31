import { useState } from 'react';
import { Shield, Mail, Lock, User, FileText, Calendar, Bell, Award, Settings, LogOut, IdCard } from 'lucide-react';

export default function MemberArea() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-light flex flex-col justify-center items-center py-12 px-6">
        <div className="w-full max-w-md bg-white p-8 md:p-12 rounded-sm shadow-sm border border-gray-100">
          <div className="flex flex-col items-center mb-10">
            <Shield className="w-12 h-12 text-institutional mb-4" />
            <h1 className="heading-serif text-3xl text-center">Área do Associado</h1>
            <p className="text-sm text-gray-500 mt-2">Acesso restrito</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-2">E-mail ou CPF</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input type="text" className="w-full bg-white border border-gray-200 pl-10 pr-4 py-3 rounded-sm focus:outline-none focus:border-institutional focus:ring-1 focus:ring-institutional transition-colors" placeholder="Seu acesso" required />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-2">Senha</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input type="password" className="w-full bg-white border border-gray-200 pl-10 pr-4 py-3 rounded-sm focus:outline-none focus:border-institutional focus:ring-1 focus:ring-institutional transition-colors" placeholder="••••••••" required />
              </div>
            </div>
            
            <button type="submit" className="w-full btn-secondary text-lg">Entrar</button>
            
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-4 mt-6">
              <a href="#" className="hover:text-institutional transition-colors">Esqueci minha senha</a>
              <a href="#" className="hover:text-institutional transition-colors">Criar acesso</a>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light flex">
      {/* Sidebar - Member */}
      <aside className="w-64 bg-navy-900 text-gray-400 hidden lg:flex flex-col flex-shrink-0 min-h-[calc(100vh-80px)]">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-institutional/20 rounded-full flex items-center justify-center text-institutional font-bold">
              JS
            </div>
            <div>
              <h2 className="text-white font-medium text-sm">João Silva</h2>
              <span className="text-xs text-gold uppercase tracking-wider">Matrícula: 4829</span>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-2">
          <MenuLink icon={<User />} label="Meu Perfil" active />
          <MenuLink icon={<IdCard />} label="Carteirinha Digital" />
          <MenuLink icon={<FileText />} label="Meus Documentos" />
          <MenuLink icon={<Calendar />} label="Meus Eventos" />
          <MenuLink icon={<Bell />} label="Comunicados" />
          <MenuLink icon={<Award />} label="Meus Benefícios" />
          <MenuLink icon={<Settings />} label="Configurações" />
        </nav>
        
        <div className="p-4">
          <button onClick={() => setIsLoggedIn(false)} className="w-full flex items-center gap-3 px-4 py-3 text-sm rounded-sm hover:bg-white/5 hover:text-white transition-colors">
            <LogOut className="w-4 h-4" /> Sair
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-auto">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="eyebrow">DASHBOARD</span>
            <h1 className="heading-serif text-4xl">Bem-vindo, João.</h1>
          </div>
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 border border-green-200 rounded-sm font-medium text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500"></span> Associação: ATIVA
          </div>
        </div>

        {/* Resumo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <DashboardCard title="Próximo Evento" value="Simpósio Anual" subtitle="24 Nov - Confirmado" icon={<Calendar />} color="text-institutional" />
          <DashboardCard title="Documentos" value="1 Pendente" subtitle="Atualizar comprovante" icon={<FileText />} color="text-gold" />
          <DashboardCard title="Benefícios" value="4 Resgatados" subtitle="Neste mês" icon={<Award />} color="text-navy-900" />
        </div>

        {/* Carteirinha & Avisos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card-elegant p-8 flex flex-col">
            <h3 className="font-semibold text-navy-900 mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              <IdCard className="w-4 h-4 text-institutional" /> Identidade Associativa
            </h3>
            <div className="flex-1 bg-gradient-to-br from-navy-900 to-institutional rounded-sm p-8 text-white relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="flex justify-between items-start mb-12 relative z-10">
                <Shield className="w-10 h-10 text-gold" />
                <span className="font-serif italic opacity-80">Validade: 12/2025</span>
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-1">João Silva Mendonça</h4>
                <p className="text-gold uppercase tracking-widest text-xs font-semibold mb-6">Membro Titular</p>
                <div className="flex justify-between items-end">
                  <div className="font-mono bg-white/10 px-3 py-1 rounded text-sm tracking-widest">
                    4829-001
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-elegant p-8">
            <h3 className="font-semibold text-navy-900 mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
              <Bell className="w-4 h-4 text-institutional" /> Últimos Avisos
            </h3>
            <div className="space-y-4">
              {[
                { date: "Hoje", text: "Sua inscrição no Simpósio Anual foi confirmada." },
                { date: "Ontem", text: "Novo benefício disponível na rede de farmácias credenciadas." },
                { date: "Há 3 dias", text: "Ata da reunião nº 45 disponível para leitura." }
              ].map((aviso, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-gray-50 border border-gray-100 rounded-sm">
                  <div className="w-2 h-2 rounded-full bg-institutional mt-2 shrink-0"></div>
                  <div>
                    <p className="text-sm text-gray-800 leading-relaxed mb-1">{aviso.text}</p>
                    <span className="text-xs text-gray-500 font-medium">{aviso.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function MenuLink({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <a href="#" className={`flex items-center gap-3 px-4 py-3 text-sm rounded-sm transition-colors ${active ? 'bg-institutional text-white font-medium' : 'hover:bg-white/5 hover:text-white'}`}>
      <div className={active ? 'text-white' : 'text-gray-400'}>{icon}</div>
      {label}
    </a>
  );
}

function DashboardCard({ title, value, subtitle, icon, color }: { title: string, value: string, subtitle: string, icon: React.ReactNode, color: string }) {
  return (
    <div className="card-elegant p-6 border-l-4 border-l-institutional">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{title}</h3>
        <div className={`w-10 h-10 bg-gray-50 rounded-sm flex items-center justify-center ${color}`}>
          {icon}
        </div>
      </div>
      <div className="text-2xl font-bold text-navy-900 mb-1">{value}</div>
      <div className="text-sm text-gray-500 font-medium">{subtitle}</div>
    </div>
  );
}
