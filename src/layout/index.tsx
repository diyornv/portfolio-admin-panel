import React from 'react';
import { Sidebar } from './Sidebar';
import { PanelLeft, PanelRight } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar collapsed={collapsed} />
      <div className="flex-1 flex flex-col bg-[#f4f6fa] overflow-auto">
        {/* Topbar */}
        <header className="h-16 w-full bg-[#0a1a2f] flex items-center px-8 shadow z-10">
          <button
            className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 transition mr-4"
            onClick={() => setCollapsed((c) => !c)}
            aria-label="Toggle sidebar"
          >
            {collapsed ? (
              <PanelRight className="text-white" size={36} />
            ) : (
              <PanelLeft className="text-white" size={36} />
            )}
          </button>
        </header>
        <main className="flex-1 p-8 overflow-auto">{children}</main>
      </div>
    </div>
  );
} 