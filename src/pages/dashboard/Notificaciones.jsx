import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Bell, Check, Ticket, User, Mail, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const initialNotifications = [
  { id: 1, title: 'Nuevo ticket asignado', message: 'Se te ha asignado el ticket #1234', date: 'Hace 10 minutos', type: 'ticket', read: false },
  { id: 2, title: 'Usuario agregado', message: 'Juan Pérez fue agregado al sistema', date: 'Hace 1 hora', type: 'user', read: false },
  { id: 3, title: 'Alias creado', message: 'team@poolandchill.com.mx está activo', date: 'Hace 3 horas', type: 'email', read: true },
  { id: 4, title: 'Actualización del sistema', message: 'Nueva versión disponible v2.1.1', date: 'Hace 5 horas', type: 'system', read: true },
  { id: 5, title: 'Ticket cerrado', message: 'Ticket #1230 ha sido cerrado', date: 'Hace 1 día', type: 'ticket', read: true },
  { id: 6, title: 'Nuevo mensaje', message: 'Tienes un nuevo mensaje de soporte', date: 'Hace 2 días', type: 'email', read: true },
];

const getNotificationIcon = (type) => {
  switch (type) {
    case 'ticket':
      return <Ticket className="w-5 h-5 text-[#3CA2A2]" />;
    case 'user':
      return <User className="w-5 h-5 text-blue-500" />;
    case 'email':
      return <Mail className="w-5 h-5 text-[#3CA2A2]" />;
    case 'system':
      return <Settings className="w-5 h-5 text-gray-500" />;
    default:
      return <Bell className="w-5 h-5 text-gray-500" />;
  }
};

export const Notificaciones = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-2">Notificaciones</h1>
          <p className="text-gray-600">
            {unreadCount > 0
              ? `Tienes ${unreadCount} notificación${
                  unreadCount > 1 ? 'es' : ''
                } sin leer`
              : 'No tienes notificaciones sin leer'}
          </p>
        </div>
        {unreadCount > 0 && (
          <Button
            onClick={markAllAsRead}
            variant="outline"
            className="border-gray-200 text-gray-700 hover:bg-gray-50"
          >
            <Check className="w-4 h-4 mr-2" />
            Marcar todas como leídas
          </Button>
        )}
      </div>

      <Card className="border-gray-200 bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Centro de notificaciones</CardTitle>
          <CardDescription className="text-gray-600">
            Mantente al día con las actualizaciones del sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {notifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className={`group flex items-start gap-4 p-4 rounded-lg border transition-all duration-200 ${
                  notification.read
                    ? 'bg-white border-gray-200'
                    : 'bg-[#DFF4F4] border-[#3CA2A2]/30'
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    notification.read ? 'bg-gray-100' : 'bg-white'
                  }`}
                >
                  {getNotificationIcon(notification.type)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-gray-900 mb-1">{notification.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {notification.message}
                      </p>
                      <span className="text-xs text-gray-500">
                        {notification.date}
                      </span>
                    </div>
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-sm text-[#3CA2A2] hover:underline flex-shrink-0"
                      >
                        Marcar como leída
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
