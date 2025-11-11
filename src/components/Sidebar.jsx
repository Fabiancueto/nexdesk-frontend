import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Settings, Users, Mail, BarChart3, HeadphonesIcon, ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './ui/button';

const navItems = [
  { to: '/dashboard', icon: Home, label: 'Tickets' },
  { to: '/dashboard/configuracion', icon: Settings, label: 'Configuración' },
  { to: '/dashboard/usuarios', icon: Users, label: 'Usuarios' },
  { to: '/dashboard/alias', icon: Mail, label: 'Alias' },
  { to: '/dashboard/dashboards', icon: BarChart3, label: 'Dashboards' },
  { to: '/dashboard/soporte', icon: HeadphonesIcon, label: 'Contacto' },
];

export const Sidebar = ({ isOpen, isCollapsed, onClose, onToggleCollapse }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen
          bg-white dark:bg-[#1E1E1E] border-r border-gray-200 dark:border-gray-800
          transition-all duration-300 ease-in-out z-50
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isCollapsed ? 'w-20' : 'w-64'}
          flex flex-col
        `}
      >
        {/* Logo Section */}
        <div className={`border-b border-gray-200 dark:border-gray-800 flex items-center justify-center transition-all duration-300 ${isCollapsed ? 'p-4' : 'p-6'}`}>
          {!isCollapsed ? (
            <Logo height="40px" />
          ) : (
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3CA2A2] to-[#00285F] flex items-center justify-center">
              <span className="text-white text-lg">N</span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/dashboard'}
              onClick={() => onClose()}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-[#3CA2A2]/10 text-[#3CA2A2]'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                } ${isCollapsed ? 'justify-center' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-[#3CA2A2]' : ''}`} />
                  {!isCollapsed && (
                    <span className="whitespace-nowrap overflow-hidden">{item.label}</span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Client Info & Logout */}
        <div className="border-t border-gray-200 dark:border-gray-800 p-3 space-y-2">
          {/* Client Info */}
          {!isCollapsed && (
            <div className="px-3 py-3 rounded-xl bg-gradient-to-r from-[#3CA2A2]/10 to-[#00285F]/10 border border-[#3CA2A2]/20">
              <p className="text-xs text-gray-600 dark:text-gray-400">Cliente actual</p>
              <p className="text-sm mt-1 text-gray-900 dark:text-white">Pool & Chill</p>
            </div>
          )}

          {/* Logout Button */}
          <Button
            onClick={handleLogout}
            variant="ghost"
            className={`w-full hover:bg-red-100 dark:hover:bg-red-900/20 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 ${isCollapsed ? 'justify-center px-0' : 'justify-start'}`}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span className="ml-3">Cerrar sesión</span>}
          </Button>

          {/* Collapse Toggle - Desktop Only */}
          <button
            onClick={onToggleCollapse}
            className="hidden lg:flex items-center justify-center w-full p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <ChevronLeft className="w-5 h-5" />
            )}
          </button>
        </div>
      </aside>
    </>
  );
};
