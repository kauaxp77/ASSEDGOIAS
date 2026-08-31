import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MemberArea from './pages/MemberArea';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans text-graphite bg-light antialiased">
        {/* We keep Header and Footer inside BrowserRouter so they can use Links, 
            but AdminDashboard might have its own layout, so we can conditionally render them or just 
            make AdminDashboard fullscreen. Since AdminDashboard is self-contained, we can route to it. */}
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main className="flex-grow pt-20">
                <Home />
              </main>
              <Footer />
            </>
          } />
          
          <Route path="/associado" element={
            <>
              <Header />
              <main className="flex-grow pt-20">
                <MemberArea />
              </main>
              <Footer />
            </>
          } />

          {/* Admin Dashboard is full screen, doesn't need the public Header/Footer */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
