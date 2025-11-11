import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Ticket,
  Search,
  Filter,
  Edit,
  Trash2,
  UserCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  Circle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

const initialTickets = [
  { id: 1, title: "Error en el módulo de usuarios", status: "open", assignedTo: "Juan Pérez", lastUpdate: "Hace 2 horas", priority: "high" },
  { id: 2, title: "Solicitud de nuevo alias de correo", status: "in-progress", assignedTo: "María García", lastUpdate: "Hace 5 horas", priority: "medium" },
  { id: 3, title: "Actualización de dashboard requerida", status: "in-progress", assignedTo: "Carlos López", lastUpdate: "Hace 8 horas", priority: "low" },
  { id: 4, title: "Problema con autenticación 2FA", status: "open", assignedTo: "Ana Martínez", lastUpdate: "Hace 1 día", priority: "high" },
  { id: 5, title: "Configuración de notificaciones", status: "closed", assignedTo: "Luis Rodríguez", lastUpdate: "Hace 2 días", priority: "low" },
  { id: 6, title: "Reporte de estadísticas mensual", status: "closed", assignedTo: "Juan Pérez", lastUpdate: "Hace 3 días", priority: "medium" },
  { id: 7, title: "Integración con API externa", status: "in-progress", assignedTo: "María García", lastUpdate: "Hace 4 horas", priority: "high" },
  { id: 8, title: "Optimización de rendimiento", status: "open", assignedTo: "Carlos López", lastUpdate: "Hace 6 horas", priority: "medium" },
];

const getStatusIcon = (status) => {
  switch (status) {
    case "open":
      return <Circle className="w-4 h-4" />;
    case "in-progress":
      return <AlertCircle className="w-4 h-4" />;
    case "closed":
      return <CheckCircle2 className="w-4 h-4" />;
    default:
      return <Circle className="w-4 h-4" />;
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case "open":
      return "bg-blue-500/10 text-blue-600 border-blue-200";
    case "in-progress":
      return "bg-[#3CA2A2]/10 text-[#3CA2A2] border-[#3CA2A2]/30";
    case "closed":
      return "bg-gray-400/10 text-gray-500 border-gray-200";
    default:
      return "bg-gray-500/10 text-gray-500 border-gray-200";
  }
};

const getStatusLabel = (status) => {
  switch (status) {
    case "open":
      return "Abierto";
    case "in-progress":
      return "En proceso";
    case "closed":
      return "Cerrado";
    default:
      return status;
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case "high":
      return "bg-red-500/10 text-red-600";
    case "medium":
      return "bg-[#3CA2A2]/10 text-[#3CA2A2]";
    case "low":
      return "bg-blue-500/10 text-blue-600";
    default:
      return "bg-gray-500/10 text-gray-500";
  }
};

export const Dashboard = () => {
  const [tickets, setTickets] = useState(initialTickets);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [userFilter, setUserFilter] = useState("all");

  const users = Array.from(new Set(tickets.map((t) => t.assignedTo)));

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.assignedTo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || ticket.status === statusFilter;
    const matchesUser = userFilter === "all" || ticket.assignedTo === userFilter;
    return matchesSearch && matchesStatus && matchesUser;
  });

  const stats = [
    { label: "Total tickets", value: tickets.length, icon: Ticket, color: "bg-[#3CA2A2]" },
    { label: "Abiertos", value: tickets.filter((t) => t.status === "open").length, icon: Circle, color: "bg-blue-500" },
    { label: "En proceso", value: tickets.filter((t) => t.status === "in-progress").length, icon: AlertCircle, color: "bg-[#3CA2A2]" },
    { label: "Cerrados", value: tickets.filter((t) => t.status === "closed").length, icon: CheckCircle2, color: "bg-gray-500" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <h1 className="text-gray-900 mb-2 font-semibold">Tickets</h1>
        <p className="text-gray-600">Gestiona y da seguimiento a todos los tickets</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <Card className="border-gray-200 bg-white shadow-sm">
              <CardContent className="p-6 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <h3 className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</h3>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <Card className="border-gray-200 bg-white shadow-sm">
        <CardHeader>
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <div>
              <CardTitle className="text-gray-900">Inbox de tickets</CardTitle>
              <CardDescription className="text-gray-600 mt-1">
                {filteredTickets.length} tickets encontrados
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar tickets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border-gray-200"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40 bg-white border-gray-200">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="open">Abierto</SelectItem>
                  <SelectItem value="in-progress">En proceso</SelectItem>
                  <SelectItem value="closed">Cerrado</SelectItem>
                </SelectContent>
              </Select>
              <Select value={userFilter} onValueChange={setUserFilter}>
                <SelectTrigger className="w-full sm:w-40 bg-white border-gray-200">
                  <SelectValue placeholder="Usuario" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  {users.map((user) => (
                    <SelectItem key={user} value={user}>
                      {user}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {filteredTickets.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              No se encontraron tickets con los filtros aplicados.
            </div>
          ) : (
            <div className="space-y-3">
              {filteredTickets.map((ticket, i) => (
                <motion.div
                  key={ticket.id}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white border border-gray-200 hover:border-[#3CA2A2] hover:shadow-md transition-all"
                >
                  <div className={`p-2 rounded-lg ${getStatusColor(ticket.status)}`}>
                    {getStatusIcon(ticket.status)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-gray-900 font-medium mb-1 truncate max-w-[200px] sm:max-w-none">
                      {ticket.title}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
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

                  <div className="flex items-center gap-2">
                    <Badge className={`${getStatusColor(ticket.status)} border`}>
                      {getStatusLabel(ticket.status)}
                    </Badge>
                    <Badge className={`${getPriorityColor(ticket.priority)} border`}>
                      {ticket.priority === "high"
                        ? "Alta"
                        : ticket.priority === "medium"
                        ? "Media"
                        : "Baja"}
                    </Badge>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="flex-shrink-0">
                        <Filter className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white border-gray-200">
                      <DropdownMenuItem className="text-gray-700">
                        <Edit className="w-4 h-4 mr-2" />
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-gray-700">
                        <UserCircle className="w-4 h-4 mr-2" />
                        Reasignar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Eliminar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </motion.div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
