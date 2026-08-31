import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MemberArea from './pages/MemberArea';
import AdminDashboard from './pages/AdminDashboard';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/membro" element={<MemberArea />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>

        <Footer />

        {/* Botão flutuante WhatsApp */}
        <a 
          href="https://wa.me/5500000000000" 
          target="_blank" 
          rel="noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:scale-105 transition-transform duration-300 group flex items-center"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:ml-3 font-medium">
            Fale conosco
          </span>
        </a>
      </div>
    </Router>
  );
}

export default App;
