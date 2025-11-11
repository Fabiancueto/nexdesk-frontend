import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Settings, Users, Mail, BarChart3, HeadphonesIcon, ChevronLeft, ChevronRight, LogOut, Bell, Clock, Cog, Edit2 } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';

const navItems = [
  { to: '/dashboard', icon: Home, label: 'Tickets' },  { to: '/dashboard/usuarios', icon: Users, label: 'Usuarios' },
  { to: '/dashboard/alias', icon: Mail, label: 'Alias' },
  { to: '/dashboard/dashboards', icon: BarChart3, label: 'Dashboards' },
  { to: '/dashboard/notificaciones', icon: Bell, label: 'Notificaciones' },
  { to: '/dashboard/historial', icon: Clock, label: 'Historial' },
  { to: '/dashboard/ajustes', icon: Cog, label: 'Ajustes del sistema' },
  { to: '/dashboard/soporte', icon: HeadphonesIcon, label: 'Contacto' },
];

export const Sidebar = ({ isOpen, isCollapsed, onClose, onToggleCollapse }) => {
  const navigate = useNavigate();
  const [showLogoModal, setShowLogoModal] = useState(false);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen
          bg-white border-r border-gray-200
          transition-all duration-300 ease-in-out z-50
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isCollapsed ? 'w-20' : 'w-64'}
          flex flex-col
        `}
      >
        <div className={`border-b border-gray-200 flex items-center justify-center transition-all duration-300 relative ${isCollapsed ? 'p-4' : 'p-6'}`}>
          {!isCollapsed ? (
            <div className="relative">
              <Logo height="40px" />
              <button
                onClick={() => setShowLogoModal(true)}
                className="absolute -top-1 -right-1 p-1.5 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
                aria-label="Editar logo"
              >
                <Edit2 className="w-3 h-3 text-[#3CA2A2]" />
              </button>
            </div>
          ) : (
            <div className="w-10 h-10 rounded-lg bg-[#3CA2A2] flex items-center justify-center">
              <span className="text-white">N</span>
            </div>
          )}
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/dashboard'}
              onClick={() => onClose()}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-[#3CA2A2]/10 text-[#3CA2A2]'
                    : 'text-gray-600 hover:bg-gray-100'
                } ${isCollapsed ? 'justify-center' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon className={`w-5 h-5 flex-shrink-0 transition-transform hover:scale-105 ${isActive ? 'text-[#3CA2A2]' : ''}`} />
                  {!isCollapsed && (
                    <span className="whitespace-nowrap overflow-hidden">{item.label}</span>
                  )}
                </>
              )}
            </NavLink>
          ))}

          <button
            onClick={handleLogout}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-gray-600 hover:bg-red-50 hover:text-red-600 w-full ${isCollapsed ? 'justify-center' : ''}`}
          >
            <LogOut className="w-5 h-5 flex-shrink-0 transition-transform hover:scale-105" />
            {!isCollapsed && <span className="whitespace-nowrap overflow-hidden">Cerrar sesión</span>}
          </button>
        </nav>

        <div className="border-t border-gray-200"></div>

        <div className="p-3 space-y-2">
          {!isCollapsed && (
            <div className="px-3 py-3 rounded-lg bg-gray-50 border border-gray-200">
              <p className="text-xs text-gray-500">Cliente actual</p>
              <p className="text-sm mt-1 text-gray-900">Pool & Chill</p>
            </div>
          )}

          <button
            onClick={onToggleCollapse}
            className="hidden lg:flex items-center justify-center w-full p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <ChevronLeft className="w-5 h-5" />
            )}
          </button>
        </div>
      </aside>

      <Dialog open={showLogoModal} onOpenChange={setShowLogoModal}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-gray-900">Cambiar logotipo</DialogTitle>
            <DialogDescription className="text-gray-600">
              Sube una nueva imagen para personalizar tu dashboard
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="flex justify-center p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
              <Logo height="60px" />
            </div>

            <div className="space-y-3">
              <Button
                type="button"
                className="w-full bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200"
                onClick={() => {}}
              >
                Seleccionar imagen
              </Button>
              <Button
                type="button"
                className="w-full bg-[#3CA2A2] text-white hover:bg-[#358f8f]"
                onClick={() => setShowLogoModal(false)}
              >
                Guardar cambios
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
