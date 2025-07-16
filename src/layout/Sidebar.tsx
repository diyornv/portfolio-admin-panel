import { LogOut, Smile, Folder, Share2, BarChart2, User } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

const menu = [
  { label: 'Dashboard', icon: <BarChart2 size={20} />, to: '/' },
  { label: 'Skills', icon: <User size={20} />, to: '/skills' },
  { label: 'Socials', icon: <Share2 size={20} />, to: '/socials' },
  { label: 'Projects', icon: <Folder size={20} />, to: '/projects' },
  { label: 'Logo', icon: <Smile size={20} />, to: '/logo' },
];

export function Sidebar({ collapsed = false }: { collapsed?: boolean }) {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <aside
      className={`flex flex-col h-full ${collapsed ? 'w-20' : 'w-56'} bg-[#0a1a2f] text-white p-4 justify-between transition-all duration-300`}
    >
      <div>
        <div className={`flex items-center gap-2 mb-8 ${collapsed ? 'justify-center' : ''}`}>
          {!collapsed && (
            <span className="text-2xl font-bold bg-white/10 px-3 py-2 rounded-lg">Admin Panel</span>
          )}
          {collapsed && (
            <span className="text-2xl font-bold bg-white/10 px-3 py-2 rounded-lg">A</span>
          )}
        </div>
        <nav className="flex flex-col gap-2">
          {menu.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center ${collapsed ? 'justify-center' : 'gap-3 px-4'} py-2 rounded-lg transition-colors font-medium text-base hover:bg-white/10 ${
                  isActive ? 'bg-blue-600 text-white' : 'text-white/80'
                }`
              }
              end
            >
              {item.icon}
              {!collapsed && item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="flex flex-col gap-2">
        <button
          onClick={handleLogout}
          className={`flex items-center ${collapsed ? 'justify-center' : 'gap-2 px-4'} py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors`}
        >
          <LogOut size={18} />
          {!collapsed && 'Logout'}
        </button>
        <div className={`text-xs text-white/50 py-2 rounded-lg bg-white/5 mt-2 ${collapsed ? 'text-center px-0' : 'px-4'}`}>
          {collapsed ? 'v1.0' : 'Version 1.0.0'}
        </div>
      </div>
    </aside>
  );
} 