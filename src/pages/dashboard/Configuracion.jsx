import React from 'react';
import { motion } from "framer-motion";
import { Settings, Users, Mail, BarChart3, Bell, Shield, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Switch } from '../../components/ui/switch';
import { Label } from '../../components/ui/label';

const configCards = [
  {
    title: 'Usuarios',
    description: 'Gestionar usuarios y roles del sistema',
    icon: Users,
    color: 'from-[#3CA2A2] to-[#00285F]',
  },
  {
    title: 'Alias',
    description: 'Configurar alias de correo electrónico',
    icon: Mail,
    color: 'from-[#00285F] to-[#3CA2A2]',
  },
  {
    title: 'Dashboards',
    description: 'Personalizar paneles de control',
    icon: BarChart3,
    color: 'from-[#3CA2A2] to-blue-500',
  },
];

export const Configuracion = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2">Configuración</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Administra las configuraciones de tu plataforma
        </p>
      </div>

      {/* Config Cards */}
      <div>
        <h2 className="text-gray-900 dark:text-white mb-6">Módulos principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {configCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: [0.4, 0.0, 0.2, 1] }}
            >
              <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E] hover:shadow-lg hover:shadow-[#3CA2A2]/10 transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">{card.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">
                    {card.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notifications */}
        <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E]">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-[#3CA2A2]" />
              <CardTitle className="text-gray-900 dark:text-white">Notificaciones</CardTitle>
            </div>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Configura cómo deseas recibir notificaciones
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notif" className="text-gray-700 dark:text-gray-300">
                Notificaciones por correo
              </Label>
              <Switch id="email-notif" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="push-notif" className="text-gray-700 dark:text-gray-300">
                Notificaciones push
              </Label>
              <Switch id="push-notif" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="updates-notif" className="text-gray-700 dark:text-gray-300">
                Actualizaciones del sistema
              </Label>
              <Switch id="updates-notif" />
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E]">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#3CA2A2]" />
              <CardTitle className="text-gray-900 dark:text-white">Seguridad</CardTitle>
            </div>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Opciones de seguridad y privacidad
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="2fa" className="text-gray-700 dark:text-gray-300">
                Autenticación de dos factores
              </Label>
              <Switch id="2fa" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="session-timeout" className="text-gray-700 dark:text-gray-300">
                Cierre de sesión automático
              </Label>
              <Switch id="session-timeout" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="login-alerts" className="text-gray-700 dark:text-gray-300">
                Alertas de inicio de sesión
              </Label>
              <Switch id="login-alerts" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E]">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#3CA2A2]" />
              <CardTitle className="text-gray-900 dark:text-white">Preferencias</CardTitle>
            </div>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Personaliza tu experiencia
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-save" className="text-gray-700 dark:text-gray-300">
                Guardado automático
              </Label>
              <Switch id="auto-save" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="compact-mode" className="text-gray-700 dark:text-gray-300">
                Modo compacto
              </Label>
              <Switch id="compact-mode" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="animations" className="text-gray-700 dark:text-gray-300">
                Animaciones
              </Label>
              <Switch id="animations" defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* System */}
        <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E]">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Settings className="w-5 h-5 text-[#3CA2A2]" />
              <CardTitle className="text-gray-900 dark:text-white">Sistema</CardTitle>
            </div>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Configuración general del sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-gray-700 dark:text-gray-300">Versión actual</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">NexDesk v2.1.0</p>
            </div>
            <div className="space-y-2">
              <Label className="text-gray-700 dark:text-gray-300">Última actualización</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">4 de noviembre, 2025</p>
            </div>
            <div className="space-y-2">
              <Label className="text-gray-700 dark:text-gray-300">Cliente</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Pool & Chill</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};
