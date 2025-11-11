import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Cog, Save, Globe, Database, Shield, Bell } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Switch } from '../../components/ui/switch';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

export const Ajustes = () => {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-2">Ajustes del sistema</h1>
          <p className="text-gray-600">
            Configuración avanzada y preferencias del sistema
          </p>
        </div>
        <Button
          onClick={handleSave}
          className="bg-[#3CA2A2] text-white hover:bg-[#358f8f]"
        >
          <Save className="w-4 h-4 mr-2" />
          {saved ? 'Guardado' : 'Guardar cambios'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-gray-200 bg-white shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#3CA2A2]" />
              <CardTitle className="text-gray-900">General</CardTitle>
            </div>
            <CardDescription className="text-gray-600">
              Configuración general del sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label className="text-gray-700">Nombre de la empresa</Label>
              <Input
                defaultValue="Pool & Chill"
                className="bg-white border-[#D9D9D9]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-gray-700">Zona horaria</Label>
              <Select defaultValue="america-mexico">
                <SelectTrigger className="bg-white border-[#D9D9D9]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="america-mexico">América/México (GMT-6)</SelectItem>
                  <SelectItem value="america-ny">América/Nueva York (GMT-5)</SelectItem>
                  <SelectItem value="europe-madrid">Europa/Madrid (GMT+1)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-700">Idioma del sistema</Label>
              <Select defaultValue="es">
                <SelectTrigger className="bg-white border-[#D9D9D9]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="es">Español</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <Label htmlFor="maintenance" className="text-gray-700">
                Modo mantenimiento
              </Label>
              <Switch id="maintenance" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 bg-white shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Database className="w-5 h-5 text-[#3CA2A2]" />
              <CardTitle className="text-gray-900">Base de datos</CardTitle>
            </div>
            <CardDescription className="text-gray-600">
              Configuración de almacenamiento y respaldo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-gray-700">Respaldo automático</Label>
                <p className="text-sm text-gray-500 mt-1">Crear copia diaria a las 2:00 AM</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>
                <Label className="text-gray-700">Retención de datos</Label>
                <p className="text-sm text-gray-500 mt-1">Mantener registros por 90 días</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>
                <Label className="text-gray-700">Compresión de archivos</Label>
                <p className="text-sm text-gray-500 mt-1">Optimizar almacenamiento</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="pt-4 border-t border-gray-200">
              <Button variant="outline" className="w-full border-gray-200 text-gray-700 hover:bg-gray-50">
                Crear respaldo manual
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 bg-white shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#3CA2A2]" />
              <CardTitle className="text-gray-900">Seguridad</CardTitle>
            </div>
            <CardDescription className="text-gray-600">
              Opciones de seguridad y acceso
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-gray-700">Autenticación de dos factores</Label>
                <p className="text-sm text-gray-500 mt-1">Requerido para todos los usuarios</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>
                <Label className="text-gray-700">Cierre de sesión automático</Label>
                <p className="text-sm text-gray-500 mt-1">Después de 30 minutos de inactividad</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>
                <Label className="text-gray-700">Registro de actividad</Label>
                <p className="text-sm text-gray-500 mt-1">Guardar historial de acciones</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>
                <Label className="text-gray-700">Alertas de seguridad</Label>
                <p className="text-sm text-gray-500 mt-1">Notificar intentos fallidos</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 bg-white shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-[#3CA2A2]" />
              <CardTitle className="text-gray-900">Notificaciones</CardTitle>
            </div>
            <CardDescription className="text-gray-600">
              Preferencias de notificaciones del sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-gray-700">Notificaciones por correo</Label>
                <p className="text-sm text-gray-500 mt-1">Enviar actualizaciones importantes</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>
                <Label className="text-gray-700">Notificaciones push</Label>
                <p className="text-sm text-gray-500 mt-1">Alertas en tiempo real</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>
                <Label className="text-gray-700">Resumen semanal</Label>
                <p className="text-sm text-gray-500 mt-1">Reporte de actividad por correo</p>
              </div>
              <Switch />
            </div>

            <div className="space-y-2 pt-4 border-t border-gray-200">
              <Label className="text-gray-700">Frecuencia de notificaciones</Label>
              <Select defaultValue="immediate">
                <SelectTrigger className="bg-white border-[#D9D9D9]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Inmediata</SelectItem>
                  <SelectItem value="hourly">Cada hora</SelectItem>
                  <SelectItem value="daily">Diaria</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};
