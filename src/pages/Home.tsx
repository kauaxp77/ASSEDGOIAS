import { ArrowRight, ChevronRight, Download, Eye, Calendar, MapPin, Building2, Shield, FileText, CheckCircle2, FileArchive, Handshake, Phone, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      {/* ================= HERO ================= */}
      <section className="relative bg-white pt-12 pb-24 lg:pt-24 lg:pb-32 overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <span className="eyebrow">ASSOCIAÇÃO NACIONAL</span>
            <h1 className="heading-serif text-5xl lg:text-7xl leading-[1.1] mb-8">
              Representação que fortalece.<br />
              União que transforma.
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              Construímos uma associação forte, transparente e preparada para representar nossos associados e criar novas oportunidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">Associe-se</button>
              <button className="btn-outline border-gray-300 text-graphite hover:border-navy-900 hover:bg-navy-900">
                Conheça a associação
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/40"></div>
            <div className="aspect-[4/3] bg-gray-100 rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-navy-900/5 mix-blend-multiply"></div>
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Sede Institucional" className="w-full h-full object-cover grayscale-[20%]" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-institutional/5 -z-10"></div>
          </div>
        </div>
      </section>

      {/* ================= NÚMEROS ================= */}
      <section className="py-16 bg-navy-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
            <div className="w-full py-4 md:py-0">
              <span className="heading-serif text-5xl text-white block mb-2">20+</span>
              <span className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Anos de atuação</span>
            </div>
            <div className="w-full py-4 md:py-0">
              <span className="heading-serif text-5xl text-white block mb-2">1.000+</span>
              <span className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Associados</span>
            </div>
            <div className="w-full py-4 md:py-0">
              <span className="heading-serif text-5xl text-white block mb-2">100+</span>
              <span className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Eventos Realizados</span>
            </div>
            <div className="w-full py-4 md:py-0">
              <span className="heading-serif text-5xl text-white block mb-2">50+</span>
              <span className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Parcerias</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INSTITUCIONAL ================= */}
      <section id="sobre" className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[3/4] bg-gray-100 w-4/5 ml-auto rounded-sm overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80" alt="Reunião Institucional" className="w-full h-full object-cover grayscale-[30%]" />
              </div>
              <div className="absolute bottom-10 left-0 w-1/2 aspect-square bg-navy-900 p-8 text-white flex flex-col justify-center rounded-sm">
                <span className="text-gold mb-4"><Building2 className="w-8 h-8" /></span>
                <p className="font-serif text-xl italic leading-relaxed">"O alicerce sólido para o futuro da nossa categoria."</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="eyebrow">SOBRE A ASSOCIAÇÃO</span>
              <h2 className="heading-serif text-4xl lg:text-5xl mb-8 leading-tight">
                Uma organização construída para representar pessoas e fortalecer oportunidades.
              </h2>
              <div className="w-12 h-[2px] bg-gold mb-8"></div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nossa atuação é pautada na defesa intransigente dos direitos e interesses de nossos associados. Buscamos constantemente o aprimoramento das relações institucionais e a criação de um ambiente favorável ao desenvolvimento do setor.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Com base em princípios éticos e na transparência de nossas ações, nos consolidamos como a principal voz representativa nacional, atuando junto a órgãos públicos e entidades privadas para garantir as melhores condições para nossa base.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-institutional font-semibold hover:text-navy-900 transition-colors">
                Conheça nossa história <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSÃO, VISÃO, VALORES ================= */}
      <section className="py-24 bg-light border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="flex flex-col">
              <TargetIcon className="w-8 h-8 text-institutional mb-6" />
              <h3 className="heading-serif text-2xl mb-4">Missão</h3>
              <p className="text-gray-600 leading-relaxed">Representar e fortalecer nossos associados através de iniciativas que promovam desenvolvimento, integração e oportunidades.</p>
            </div>
            <div className="flex flex-col md:border-l border-gray-200 md:pl-16">
              <EyeIcon className="w-8 h-8 text-institutional mb-6" />
              <h3 className="heading-serif text-2xl mb-4">Visão</h3>
              <p className="text-gray-600 leading-relaxed">Ser referência em representação, gestão e desenvolvimento associativo no território nacional.</p>
            </div>
            <div className="flex flex-col md:border-l border-gray-200 md:pl-16">
              <Shield className="w-8 h-8 text-institutional mb-6" />
              <h3 className="heading-serif text-2xl mb-4">Valores</h3>
              <ul className="space-y-2 text-gray-600 font-medium">
                <li>União</li>
                <li>Ética</li>
                <li>Transparência</li>
                <li>Excelência</li>
                <li>Inovação</li>
                <li>Compromisso</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFÍCIOS ================= */}
      <section id="associados" className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="eyebrow">VANTAGENS DO ASSOCIADO</span>
            <h2 className="heading-serif text-4xl lg:text-5xl">Pertencer é ter representação.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard icon={<Building2 />} title="Representatividade" desc="Voz ativa e atuação direta perante órgãos governamentais e instituições do setor." />
            <BenefitCard icon={<FileText />} title="Capacitação" desc="Programas de formação contínua, cursos e treinamentos especializados para o mercado." />
            <BenefitCard icon={<Handshake />} title="Networking" desc="Conexão direta com profissionais e empresas referência em todo o país." />
            <BenefitCard icon={<CheckCircle2 />} title="Parcerias" desc="Ampla rede de convênios oferecendo descontos exclusivos em produtos e serviços." />
            <BenefitCard icon={<Shield />} title="Orientação" desc="Suporte especializado nas esferas administrativa, técnica e jurídica." />
            <BenefitCard icon={<Calendar />} title="Eventos" desc="Acesso prioritário e condições especiais em congressos, simpósios e feiras." />
          </div>
        </div>
      </section>

      {/* ================= COMO SE ASSOCIAR ================= */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-serif text-4xl text-white">Como se associar</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative">
            <div className="hidden lg:block absolute top-6 left-0 w-full h-[1px] bg-white/20"></div>
            
            <Step number="01" title="Cadastro" desc="Preenchimento do formulário inicial com dados básicos." />
            <Step number="02" title="Documentação" desc="Envio digital dos documentos exigidos pelo estatuto." />
            <Step number="03" title="Análise" desc="Avaliação pelo conselho administrativo." />
            <Step number="04" title="Aprovação" desc="Pagamento da taxa e ativação imediata dos benefícios." />
          </div>
          
          <div className="mt-20 text-center">
            <button className="btn-primary">Quero me associar agora</button>
          </div>
        </div>
      </section>

      {/* ================= NOTÍCIAS ================= */}
      <section id="noticias" className="py-24 bg-light">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="eyebrow">INFORMAÇÃO</span>
              <h2 className="heading-serif text-4xl">Últimas Notícias</h2>
            </div>
            <a href="#" className="hidden sm:inline-flex items-center gap-2 text-institutional font-semibold hover:text-navy-900 transition-colors">
              Ver todas <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 group cursor-pointer">
              <div className="aspect-video bg-gray-200 mb-6 overflow-hidden rounded-sm relative">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80" alt="Notícia Principal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-navy-900 text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider">Institucional</div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span>12 de Agosto, 2024</span>
              </div>
              <h3 className="heading-serif text-3xl mb-3 group-hover:text-institutional transition-colors">Congresso Nacional discute novas diretrizes para o setor</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">O evento reuniu os principais líderes do setor para debater as regulamentações que entrarão em vigor no próximo ano, marcando um novo momento na história da nossa entidade.</p>
              <span className="text-institutional font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">Leia mais <ChevronRight className="w-4 h-4" /></span>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-8">
              <NewsSmall category="Comunicados" date="08 de Agosto, 2024" title="Atualização do regulamento interno aprovada em assembleia" img="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80" />
              <NewsSmall category="Eventos" date="05 de Agosto, 2024" title="Inscrições abertas para o Simpósio Anual de Gestão" img="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= EVENTOS ================= */}
      <section id="eventos" className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <span className="eyebrow">AGENDA</span>
          <h2 className="heading-serif text-4xl mb-12">Próximos Eventos</h2>
          
          <div className="card-elegant p-0 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-navy-900 p-8 text-white flex flex-col justify-center">
              <span className="text-gold font-bold text-5xl mb-2">24</span>
              <span className="uppercase tracking-widest text-sm mb-6">Novembro, 2024</span>
              <div className="flex items-center gap-3 text-sm text-gray-300 mb-3">
                <MapPin className="w-4 h-4 text-gold" /> São Paulo, SP (Presencial)
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Calendar className="w-4 h-4 text-gold" /> 09:00 às 18:00
              </div>
            </div>
            <div className="md:w-2/3 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="heading-serif text-3xl mb-4">Simpósio Anual de Liderança</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Um encontro focado em estratégias de mercado, desenvolvimento institucional e fortalecimento da categoria. Palestras com renomados especialistas e rodadas de negócios.
              </p>
              <div>
                <button className="btn-primary">Inscrever-se</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DOCUMENTOS ================= */}
      <section id="documentos" className="py-24 bg-light">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <span className="eyebrow">TRANSPARÊNCIA</span>
            <h2 className="heading-serif text-4xl mb-6">Biblioteca Documental</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {['Todos', 'Estatuto', 'Editais', 'Atas', 'Prestação de contas'].map((f, i) => (
                <button key={i} className={`px-4 py-2 text-sm font-medium rounded-sm border ${i === 0 ? 'bg-navy-900 text-white border-navy-900' : 'bg-white text-gray-600 border-gray-200 hover:border-navy-900'}`}>{f}</button>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-sm">
            {[
              { name: "Estatuto Social Consolidado", cat: "Estatuto", date: "10/01/2024" },
              { name: "Edital de Convocação - Assembleia Geral", cat: "Editais", date: "05/03/2024" },
              { name: "Relatório Anual de Atividades", cat: "Relatórios", date: "15/12/2023" },
              { name: "Ata da Reunião de Diretoria nº 45", cat: "Atas", date: "20/11/2023" }
            ].map((doc, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className="w-10 h-10 bg-institutional/10 rounded-sm flex items-center justify-center text-institutional shrink-0">
                    <FileArchive className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900">{doc.name}</h4>
                    <div className="flex gap-3 text-xs text-gray-500 mt-1 uppercase tracking-wide">
                      <span>{doc.cat}</span> • <span>{doc.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <button className="flex-1 md:flex-none px-4 py-2 text-sm font-medium text-institutional border border-institutional/20 hover:bg-institutional hover:text-white rounded-sm transition-colors flex items-center justify-center gap-2">
                    <Eye className="w-4 h-4" /> Visualizar
                  </button>
                  <button className="flex-1 md:flex-none px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-sm transition-colors flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" /> Baixar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTATO ================= */}
      <section id="contato" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-5/12">
              <span className="eyebrow">ATENDIMENTO</span>
              <h2 className="heading-serif text-4xl mb-6">Fale Conosco</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Nossa equipe está à disposição para esclarecer dúvidas, receber sugestões e prestar o suporte necessário.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-light flex items-center justify-center rounded-sm shrink-0">
                    <Phone className="w-5 h-5 text-institutional" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 text-sm uppercase tracking-wider mb-1">Telefone / WhatsApp</h4>
                    <p className="text-gray-600">(00) 0000-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-light flex items-center justify-center rounded-sm shrink-0">
                    <Mail className="w-5 h-5 text-institutional" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 text-sm uppercase tracking-wider mb-1">E-mail</h4>
                    <p className="text-gray-600">contato@associacao.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-light flex items-center justify-center rounded-sm shrink-0">
                    <MapPin className="w-5 h-5 text-institutional" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 text-sm uppercase tracking-wider mb-1">Sede</h4>
                    <p className="text-gray-600">Av. Empresarial, 1000 - Andar 15<br/>Centro Financeiro - SP</p>
                    <p className="text-sm text-gray-400 mt-1">Segunda a sexta — 08h às 18h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-7/12">
              <div className="bg-light p-8 md:p-12 rounded-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-2">Nome completo</label>
                      <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:outline-none focus:border-institutional focus:ring-1 focus:ring-institutional transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-2">Telefone</label>
                      <input type="tel" className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:outline-none focus:border-institutional focus:ring-1 focus:ring-institutional transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-2">E-mail</label>
                      <input type="email" className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:outline-none focus:border-institutional focus:ring-1 focus:ring-institutional transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-2">Assunto</label>
                      <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:outline-none focus:border-institutional focus:ring-1 focus:ring-institutional transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-2">Mensagem</label>
                    <textarea rows={4} className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm focus:outline-none focus:border-institutional focus:ring-1 focus:ring-institutional transition-colors"></textarea>
                  </div>
                  <button type="button" className="btn-primary w-full md:w-auto">Enviar Mensagem</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Subcomponents

function TargetIcon(props: any) { return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>; }
function EyeIcon(props: any) { return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>; }

function BenefitCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="card-elegant flex flex-col items-start group">
      <div className="w-12 h-12 rounded-sm bg-light flex items-center justify-center text-institutional mb-6 group-hover:bg-institutional group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-semibold text-xl text-navy-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Step({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="flex-1 relative z-10 w-full">
      <div className="w-12 h-12 bg-navy-900 border border-gold flex items-center justify-center text-gold font-serif font-bold text-lg mb-6 lg:mx-auto">
        {number}
      </div>
      <h3 className="font-semibold text-xl mb-3 lg:text-center">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed lg:text-center px-4">{desc}</p>
    </div>
  );
}

function NewsSmall({ category, date, title, img }: { category: string, date: string, title: string, img: string }) {
  return (
    <div className="flex gap-6 group cursor-pointer">
      <div className="w-1/3 aspect-[4/3] bg-gray-200 overflow-hidden rounded-sm relative shrink-0">
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2 uppercase tracking-wide">
          <span className="font-semibold text-institutional">{category}</span> • <span>{date}</span>
        </div>
        <h4 className="font-serif text-xl text-navy-900 group-hover:text-institutional transition-colors leading-snug">{title}</h4>
      </div>
    </div>
  );
}
