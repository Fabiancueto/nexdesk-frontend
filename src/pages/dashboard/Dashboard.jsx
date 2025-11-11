import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Ticket, Search, Filter, Edit, Trash2, UserCircle, Clock, CheckCircle2, AlertCircle, Circle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

const initialTickets = [
  { id: 1, title: 'Error en el módulo de usuarios', status: 'open', assignedTo: 'Juan Pérez', lastUpdate: 'Hace 2 horas', priority: 'high' },
  { id: 2, title: 'Solicitud de nuevo alias de correo', status: 'in-progress', assignedTo: 'María García', lastUpdate: 'Hace 5 horas', priority: 'medium' },
  { id: 3, title: 'Actualización de dashboard requerida', status: 'in-progress', assignedTo: 'Carlos López', lastUpdate: 'Hace 8 horas', priority: 'low' },
  { id: 4, title: 'Problema con autenticación 2FA', status: 'open', assignedTo: 'Ana Martínez', lastUpdate: 'Hace 1 día', priority: 'high' },
  { id: 5, title: 'Configuración de notificaciones', status: 'closed', assignedTo: 'Luis Rodríguez', lastUpdate: 'Hace 2 días', priority: 'low' },
  { id: 6, title: 'Reporte de estadísticas mensual', status: 'closed', assignedTo: 'Juan Pérez', lastUpdate: 'Hace 3 días', priority: 'medium' },
  { id: 7, title: 'Integración con API externa', status: 'in-progress', assignedTo: 'María García', lastUpdate: 'Hace 4 horas', priority: 'high' },
  { id: 8, title: 'Optimización de rendimiento', status: 'open', assignedTo: 'Carlos López', lastUpdate: 'Hace 6 horas', priority: 'medium' },
];

const getStatusIcon = (status) => {
  switch (status) {
    case 'open':
      return <Circle className="w-4 h-4" />;
    case 'in-progress':
      return <AlertCircle className="w-4 h-4" />;
    case 'closed':
      return <CheckCircle2 className="w-4 h-4" />;
    default:
      return <Circle className="w-4 h-4" />;
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 'open':
      return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
    case 'in-progress':
      return 'bg-[#3CA2A2]/10 text-[#3CA2A2] border-[#3CA2A2]/20';
    case 'closed':
      return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    default:
      return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
  }
};

const getStatusLabel = (status) => {
  switch (status) {
    case 'open':
      return 'Abierto';
    case 'in-progress':
      return 'En proceso';
    case 'closed':
      return 'Cerrado';
    default:
      return status;
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'high':
      return 'bg-red-500/10 text-red-500';
    case 'medium':
      return 'bg-[#3CA2A2]/10 text-[#3CA2A2]';
    case 'low':
      return 'bg-blue-500/10 text-blue-500';
    default:
      return 'bg-gray-500/10 text-gray-500';
  }
};

export const Dashboard = () => {
  const [tickets, setTickets] = useState(initialTickets);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [userFilter, setUserFilter] = useState('all');

  const users = Array.from(new Set(tickets.map(t => t.assignedTo)));

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.assignedTo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
    const matchesUser = userFilter === 'all' || ticket.assignedTo === userFilter;
    
    return matchesSearch && matchesStatus && matchesUser;
  });

  const stats = [
    { label: 'Total tickets', value: tickets.length, icon: Ticket, color: 'from-[#3CA2A2] to-[#00285F]' },
    { label: 'Abiertos', value: tickets.filter(t => t.status === 'open').length, icon: Circle, color: 'from-blue-500 to-[#3CA2A2]' },
    { label: 'En proceso', value: tickets.filter(t => t.status === 'in-progress').length, icon: AlertCircle, color: 'from-[#3CA2A2] to-blue-500' },
    { label: 'Cerrados', value: tickets.filter(t => t.status === 'closed').length, icon: CheckCircle2, color: 'from-gray-500 to-gray-600' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2">Tickets</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Gestiona y da seguimiento a todos los tickets
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                    <h3 className="text-gray-900 dark:text-white mt-2">{stat.value}</h3>
                  </div>
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Filters & Search */}
      <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E]">
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <CardTitle className="text-gray-900 dark:text-white">Inbox de tickets</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
                {filteredTickets.length} tickets encontrados
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar tickets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-50 dark:bg-[#181818] border-gray-200 dark:border-gray-800"
                />
              </div>
              
              {/* Status Filter */}
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40 bg-gray-50 dark:bg-[#181818] border-gray-200 dark:border-gray-800">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="open">Abierto</SelectItem>
                  <SelectItem value="in-progress">En proceso</SelectItem>
                  <SelectItem value="closed">Cerrado</SelectItem>
                </SelectContent>
              </Select>

              {/* User Filter */}
              <Select value={userFilter} onValueChange={setUserFilter}>
                <SelectTrigger className="w-full sm:w-40 bg-gray-50 dark:bg-[#181818] border-gray-200 dark:border-gray-800">
                  <SelectValue placeholder="Usuario" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  {users.map(user => (
                    <SelectItem key={user} value={user}>{user}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Tickets List */}
          <div className="space-y-3">
            {filteredTickets.map((ticket, index) => (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.03, ease: [0.4, 0.0, 0.2, 1] }}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-gray-800 hover:border-[#3CA2A2]/30 transition-all duration-200"
              >
                {/* Status Icon */}
                <div className={`p-2 rounded-lg ${getStatusColor(ticket.status)}`}>
                  {getStatusIcon(ticket.status)}
                </div>

                {/* Ticket Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-gray-900 dark:text-white mb-1">{ticket.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <UserCircle className="w-4 h-4" />
                      <span>{ticket.assignedTo}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{ticket.lastUpdate}</span>
                    </div>
                  </div>
                </div>

                {/* Status & Priority Badges */}
                <div className="flex items-center gap-2">
                  <Badge className={`${getStatusColor(ticket.status)} border`}>
                    {getStatusLabel(ticket.status)}
                  </Badge>
                </div>

                {/* Actions */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="flex-shrink-0">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white dark:bg-[#1E1E1E] border-gray-200 dark:border-gray-800">
                    <DropdownMenuItem className="text-gray-700 dark:text-gray-300">
                      <Edit className="w-4 h-4 mr-2" />
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-gray-700 dark:text-gray-300">
                      <UserCircle className="w-4 h-4 mr-2" />
                      Reasignar
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600 dark:text-red-400">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Eliminar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
