import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Users, UserPlus, Search, MoreVertical, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Switch } from '../../components/ui/switch';
import { Badge } from '../../components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';

const initialUsers = [
  { id: 1, name: 'Juan Pérez', email: 'juan@poolandchill.com.mx', role: 'Admin', active: true, lastAccess: '2 horas' },
  { id: 2, name: 'María García', email: 'maria@poolandchill.com.mx', role: 'Editor', active: true, lastAccess: '5 horas' },
  { id: 3, name: 'Carlos López', email: 'carlos@poolandchill.com.mx', role: 'Viewer', active: true, lastAccess: '1 día' },
  { id: 4, name: 'Ana Martínez', email: 'ana@poolandchill.com.mx', role: 'Editor', active: false, lastAccess: '3 días' },
  { id: 5, name: 'Luis Rodríguez', email: 'luis@poolandchill.com.mx', role: 'Viewer', active: true, lastAccess: '6 horas' },
];

export const Usuarios = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleUserStatus = (id) => {
    setUsers(users.map((user) =>
      user.id === id ? { ...user, active: !user.active } : user
    ));
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case 'Admin':
        return 'bg-[#3CA2A2] text-white';
      case 'Editor':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
      className="space-y-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">Usuarios permitidos</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Administra los usuarios y sus permisos
          </p>
        </div>
        <Button className="bg-[#3CA2A2] text-white hover:bg-[#358f8f] transition-all duration-200">
          <UserPlus className="w-4 h-4 mr-2" />
          Agregar usuario
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border-gray-200 bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[#3CA2A2]/10">
                <Users className="w-6 h-6 text-[#3CA2A2]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total usuarios</p>
                <h3 className="text-gray-900 mt-1">{users.length}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-gray-200 bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[#3CA2A2]/10">
                <Users className="w-6 h-6 text-[#3CA2A2]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Activos</p>
                <h3 className="text-gray-900 mt-1">
                  {users.filter((u) => u.active).length}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-gray-200 bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-gray-500/10">
                <Users className="w-6 h-6 text-[#666666]" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Inactivos</p>
                <h3 className="text-gray-900 mt-1">
                  {users.filter((u) => !u.active).length}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E]">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-gray-900 dark:text-white">Lista de usuarios</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                {filteredUsers.length} usuarios encontrados
              </CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar usuarios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-50 dark:bg-[#181818] border-gray-200 dark:border-gray-800"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-200 dark:border-gray-800">
                  <TableHead className="text-gray-700 dark:text-gray-300">Nombre</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Correo</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Rol</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Último acceso</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300">Estado</TableHead>
                  <TableHead className="text-gray-700 dark:text-gray-300"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id} className="border-gray-200 dark:border-gray-800">
                    <TableCell className="text-gray-900 dark:text-white">{user.name}</TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-400">{user.email}</TableCell>
                    <TableCell>
                      <Badge className={getRoleBadgeColor(user.role)}>
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-400">Hace {user.lastAccess}</TableCell>
                    <TableCell>
                      <Switch
                        checked={user.active}
                        onCheckedChange={() => toggleUserStatus(user.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white dark:bg-[#1E1E1E] border-gray-200 dark:border-gray-800">
                          <DropdownMenuItem className="text-gray-700 dark:text-gray-300">
                            <Edit className="w-4 h-4 mr-2" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600 dark:text-red-400">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Eliminar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
