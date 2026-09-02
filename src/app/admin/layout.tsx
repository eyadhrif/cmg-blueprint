'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import {
  LayoutDashboard,
  Newspaper,
  Briefcase,
  Users,
  Mail,
  FileText,
  LogOut,
  ExternalLink,
  Menu,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarItems = [
  { label: 'Tableau de bord', href: '/admin', icon: LayoutDashboard },
  { label: 'Publications (PDF)', href: '/admin/articles', icon: FileText },
  { label: 'Actualités', href: '/admin/news', icon: Newspaper },
  { label: 'Offres d’emploi', href: '/admin/careers', icon: Briefcase },
  { label: 'Abonnés Newsletter', href: '/admin/subscribers', icon: Users },
  { label: 'Messages Contact', href: '/admin/messages', icon: Mail },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const navContent = (
    <>
      <div className="p-6 border-b border-card-border flex items-center justify-between">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent rounded flex items-center justify-center shadow-sm">
            <span className="text-white text-xs font-bold">MG</span>
          </div>
          <div className="flex flex-col">
            <span className="text-text-primary text-sm font-bold tracking-wide">MG & ASSOCIÉS</span>
            <span className="text-text-muted text-[10px] tracking-wider uppercase font-semibold">Portail Admin</span>
          </div>
        </Link>
        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden text-text-muted hover:text-text-primary p-1"
          aria-label="Fermer le menu"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-accent/15 text-accent border border-accent/30 font-semibold'
                  : 'text-text-muted hover:text-text-primary hover:bg-card-border/50',
              )}
            >
              <Icon size={18} className={isActive ? 'text-accent' : 'text-text-muted'} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-card-border space-y-2">
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-4 py-2.5 rounded-lg text-xs text-text-muted hover:text-text-primary hover:bg-card-border/50 transition-colors"
        >
          <span className="flex items-center gap-2">
            <ExternalLink size={14} />
            Voir le site public
          </span>
          <span className="text-[10px] bg-card-border px-1.5 py-0.5 rounded text-text-muted">↗</span>
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors w-full"
        >
          <LogOut size={16} />
          Déconnexion
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-dark flex flex-col lg:flex-row">
      {/* Mobile Top Navigation Header */}
      <header className="lg:hidden bg-card border-b border-card-border px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <Link href="/admin" className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-accent rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">MG</span>
          </div>
          <span className="text-text-primary text-sm font-bold">ADMINISTRATION</span>
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-text-muted hover:text-text-primary p-1.5 rounded-lg border border-card-border"
          aria-label="Ouvrir le menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-card border-r border-card-border flex-col shrink-0 sticky top-0 h-screen">
        {navContent}
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="relative w-72 bg-card border-r border-card-border flex flex-col h-full z-10 shadow-2xl">
            {navContent}
          </aside>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-8 lg:p-10 overflow-x-hidden min-w-0">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
