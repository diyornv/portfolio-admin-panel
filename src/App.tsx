import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layout';
import { Auth } from './pages/Auth';
import { useAuthStore } from './store/auth';
import React from 'react';
import { Skills } from './pages/Skills';
import { Socials } from './pages/Socials';
import { Projects } from './pages/Projects';
import { Logo } from './pages/Logo';

function Dashboard() {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md">
      <h1 className="text-4xl font-bold mb-2">Home</h1>
      <div>Dashboard</div>
    </div>
  );
}

export default function App() {
  const { isAuthenticated, checkAuth } = useAuthStore();
  React.useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/socials" element={<Socials />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/logo" element={<Logo />} />
          </Routes>
        </Layout>
      ) : (
        <Auth />
      )}
    </BrowserRouter>
  );
}
