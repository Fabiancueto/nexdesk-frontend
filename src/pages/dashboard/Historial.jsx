import React from 'react';
import { motion } from "framer-motion";
import { Clock, Circle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';

const historyEvents = [
  { id: 1, action: 'Ticket creado', user: 'Juan Pérez', details: 'Error en el módulo de usuarios #1234', date: 'Hoy', time: '10:30 AM', type: 'ticket' },
  { id: 2, action: 'Usuario agregado', user: 'María García', details: 'Carlos López fue agregado al sistema', date: 'Hoy', time: '09:15 AM', type: 'user' },
  { id: 3, action: 'Alias creado', user: 'Ana Martínez', details: 'team@poolandchill.com.mx', date: 'Ayer', time: '04:45 PM', type: 'alias' },
  { id: 4, action: 'Configuración actualizada', user: 'Luis Rodríguez', details: 'Notificaciones por correo activadas', date: 'Ayer', time: '02:20 PM', type: 'config' },
  { id: 5, action: 'Ticket cerrado', user: 'Juan Pérez', details: 'Problema con autenticación 2FA #1230', date: '2 días', time: '11:00 AM', type: 'ticket' },
  { id: 6, action: 'Usuario modificado', user: 'María García', details: 'Rol actualizado para Ana Martínez', date: '2 días', time: '09:30 AM', type: 'user' },
  { id: 7, action: 'Alias eliminado', user: 'Carlos López', details: 'old@poolandchill.com.mx', date: '3 días', time: '03:15 PM', type: 'alias' },
  { id: 8, action: 'Dashboard actualizado', user: 'Juan Pérez', details: 'Nuevos widgets agregados', date: '3 días', time: '01:45 PM', type: 'config' },
];

const getEventColor = (type) => {
  switch (type) {
    case 'ticket':
      return 'bg-[#3CA2A2]';
    case 'user':
      return 'bg-blue-500';
    case 'alias':
      return 'bg-[#3CA2A2]';
    case 'config':
      return 'bg-gray-500';
    default:
      return 'bg-gray-400';
  }
};

export const Historial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-gray-900 mb-2">Historial</h1>
        <p className="text-gray-600">
          Registro cronológico de todas las acciones del sistema
        </p>
      </div>

      <Card className="border-gray-200 bg-white shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#3CA2A2]" />
            <CardTitle className="text-gray-900">Línea de tiempo</CardTitle>
          </div>
          <CardDescription className="text-gray-600">
            Actividades recientes de usuarios y sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            <div className="space-y-6">
              {historyEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative flex gap-6"
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-3 h-3 rounded-full ${getEventColor(event.type)} ring-4 ring-white`}></div>
                  </div>

                  <div className="flex-1 pb-6">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h4 className="text-gray-900">{event.action}</h4>
                        <p className="text-sm text-gray-600 mt-1">{event.details}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-sm text-gray-900">{event.date}</p>
                        <p className="text-xs text-gray-500 mt-1">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Circle className="w-3 h-3 text-gray-400 fill-gray-400" />
                      <span className="text-xs text-gray-500">Por {event.user}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
