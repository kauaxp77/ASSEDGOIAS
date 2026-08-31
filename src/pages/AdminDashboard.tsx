import { useState } from 'react';
import { Users, FileText, Calendar, Bell, LayoutDashboard, MessageSquare, Settings, UsersRound, FileCheck, Shield, ChevronDown, Search } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">

      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-navy-900 text-gray-400 flex flex-col flex-shrink-0 min-h-screen md:sticky md:top-0">
        <div className="p-6 border-b border-white/10">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white tracking-wide">PAINEL</span>
            <span className="text-xs text-gold uppercase tracking-widest font-semibold mt-1">Administrativo</span>
          </div>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <AdminMenuLink icon={<LayoutDashboard />} label="Visão Geral" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
          <AdminMenuLink icon={<Users />} label="Associados" active={activeTab === 'associados'} onClick={() => setActiveTab('associados')} />
          <AdminMenuLink icon={<FileCheck />} label="Solicitações" badge="3" active={activeTab === 'solicitacoes'} onClick={() => setActiveTab('solicitacoes')} />
          <AdminMenuLink icon={<Bell />} label="Notícias" active={activeTab === 'noticias'} onClick={() => setActiveTab('noticias')} />
          <AdminMenuLink icon={<Calendar />} label="Eventos" active={activeTab === 'eventos'} onClick={() => setActiveTab('eventos')} />
          <AdminMenuLink icon={<FileText />} label="Documentos" active={activeTab === 'documentos'} onClick={() => setActiveTab('documentos')} />
          <AdminMenuLink icon={<MessageSquare />} label="Mensagens" active={activeTab === 'mensagens'} onClick={() => setActiveTab('mensagens')} />
          <AdminMenuLink icon={<UsersRound />} label="Diretoria" active={activeTab === 'diretoria'} onClick={() => setActiveTab('diretoria')} />
        </nav>

        <div className="p-4 border-t border-white/10">
          <AdminMenuLink icon={<Settings />} label="Configurações do Sistema" active={activeTab === 'config'} onClick={() => setActiveTab('config')} />
        </div>
      </aside>

      {/* Main Panel Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">

        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 py-4 px-8 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-xl font-bold text-navy-900">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </h1>
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input type="text" placeholder="Busca global..." className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-institutional focus:ring-1 focus:ring-institutional" />
            </div>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center font-bold text-sm">
                AD
              </div>
              <div className="hidden sm:block">
                <span className="block text-sm font-bold text-navy-900 leading-none">Admin</span>
                <span className="text-xs text-gray-500">Diretoria</span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          {activeTab === 'dashboard' && (
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Total de Associados" value="1.042" change="+12 este mês" icon={<Users />} color="bg-institutional/10 text-institutional" />
                <StatCard title="Solicitações Pendentes" value="14" change="3 urgentes" icon={<FileCheck />} color="bg-gold/10 text-gold" />
                <StatCard title="Inscrições (Simpósio)" value="350" change="70% da meta" icon={<Calendar />} color="bg-green-100 text-green-700" />
                <StatCard title="Mensagens não lidas" value="8" change="2 novas hoje" icon={<MessageSquare />} color="bg-orange-100 text-orange-700" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white border border-gray-200 rounded-sm p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-navy-900">Últimas Solicitações de Filiação</h3>
                    <button className="text-institutional text-sm font-medium hover:underline">Ver todas</button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-50 text-gray-500 uppercase tracking-wider text-xs">
                        <tr>
                          <th className="px-4 py-3 font-medium">Nome / Empresa</th>
                          <th className="px-4 py-3 font-medium">Data</th>
                          <th className="px-4 py-3 font-medium">Status</th>
                          <th className="px-4 py-3 font-medium">Ação</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-gray-700">
                        <TableRow name="Carlos E. Ribeiro" doc="482.XXX.XXX-01" date="Hoje, 09:42" status="Em Análise" statusColor="bg-yellow-100 text-yellow-800" />
                        <TableRow name="Tech Soluções Ltda" doc="12.XXX.XXX/0001-99" date="Ontem, 16:30" status="Documentação" statusColor="bg-blue-100 text-blue-800" />
                        <TableRow name="Mariana Santos" doc="093.XXX.XXX-44" date="28 Ago, 14:15" status="Aprovado" statusColor="bg-green-100 text-green-800" />
                        <TableRow name="Construtora Base" doc="34.XXX.XXX/0001-12" date="27 Ago, 10:00" status="Aprovado" statusColor="bg-green-100 text-green-800" />
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-sm p-6 shadow-sm">
                  <h3 className="font-bold text-navy-900 mb-6">Ações Rápidas</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-between p-4 bg-gray-50 border border-gray-100 hover:border-institutional/50 hover:bg-institutional/5 rounded-sm transition-colors group">
                      <div className="flex items-center gap-3 text-navy-900 font-medium">
                        <Bell className="w-5 h-5 text-gray-400 group-hover:text-institutional" />
                        Publicar Comunicado
                      </div>
                    </button>
                    <button className="w-full flex items-center justify-between p-4 bg-gray-50 border border-gray-100 hover:border-institutional/50 hover:bg-institutional/5 rounded-sm transition-colors group">
                      <div className="flex items-center gap-3 text-navy-900 font-medium">
                        <FileText className="w-5 h-5 text-gray-400 group-hover:text-institutional" />
                        Fazer Upload de Documento
                      </div>
                    </button>
                    <button className="w-full flex items-center justify-between p-4 bg-gray-50 border border-gray-100 hover:border-gold/50 hover:bg-gold/5 rounded-sm transition-colors group">
                      <div className="flex items-center gap-3 text-navy-900 font-medium">
                        <Shield className="w-5 h-5 text-gray-400 group-hover:text-gold" />
                        Gerenciar Permissões
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab !== 'dashboard' && (
            <div className="bg-white border border-gray-200 rounded-sm p-12 text-center h-[60vh] flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-gray-50 flex items-center justify-center rounded-full text-gray-400 mb-4">
                <Settings className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-navy-900 mb-2">Módulo em Desenvolvimento</h2>
              <p className="text-gray-500 max-w-md">O painel de gerenciamento completo para a seção "{activeTab}" está sendo implementado de acordo com as regras de negócio da associação.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function AdminMenuLink({ icon, label, badge, active, onClick }: { icon: React.ReactNode, label: string, badge?: string, active?: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-sm transition-colors ${active ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'
        }`}
    >
      <div className="flex items-center gap-3">
        <span className={active ? 'text-white' : 'text-gray-500'}>{icon}</span>
        {label}
      </div>
      {badge && (
        <span className="bg-gold text-navy-900 text-[10px] font-bold px-2 py-0.5 rounded-sm">
          {badge}
        </span>
      )}
    </button>
  );
}

function StatCard({ title, value, change, icon, color }: { title: string, value: string, change: string, icon: React.ReactNode, color: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-sm p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-sm flex items-center justify-center ${color}`}>
          {icon}
        </div>
      </div>
      <h3 className="text-3xl font-bold text-navy-900 mb-1">{value}</h3>
      <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
      <p className="text-xs font-semibold text-gray-400 mt-3">{change}</p>
    </div>
  );
}

function TableRow({ name, doc, date, status, statusColor }: { name: string, doc: string, date: string, status: string, statusColor: string }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-4 py-4">
        <div className="font-semibold text-navy-900">{name}</div>
        <div className="text-xs text-gray-500">{doc}</div>
      </td>
      <td className="px-4 py-4">{date}</td>
      <td className="px-4 py-4">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-semibold ${statusColor}`}>
          {status}
        </span>
      </td>
      <td className="px-4 py-4">
        <button className="text-institutional font-medium hover:underline text-xs uppercase tracking-wider">
          Avaliar
        </button>
      </td>
    </tr>
  );
}
