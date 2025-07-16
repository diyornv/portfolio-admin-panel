import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layout';
import { Auth } from './pages/Auth';
import { useAuthStore } from './store/auth';
import React from 'react';

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

  if (!isAuthenticated) {
    return <Auth />;
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Boshqa sahifalar uchun route'lar keyin qo'shiladi */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
