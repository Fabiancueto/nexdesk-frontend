import React from 'react';
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Users, Clock, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ticketsByStatus = [
  { name: 'Abiertos', value: 12, color: '#3B82F6' },
  { name: 'En proceso', value: 8, color: '#3CA2A2' },
  { name: 'Cerrados', value: 24, color: '#6B7280' },
];

const monthlyData = [
  { name: 'Ene', abiertos: 15, resueltos: 12 },
  { name: 'Feb', abiertos: 22, resueltos: 18 },
  { name: 'Mar', abiertos: 18, resueltos: 20 },
  { name: 'Abr', abiertos: 25, resueltos: 22 },
  { name: 'May', abiertos: 20, resueltos: 24 },
  { name: 'Jun', abiertos: 28, resueltos: 26 },
];

const responseTimeData = [
  { name: 'Lun', horas: 2.4 },
  { name: 'Mar', horas: 3.1 },
  { name: 'Mié', horas: 2.8 },
  { name: 'Jue', horas: 2.2 },
  { name: 'Vie', horas: 2.9 },
  { name: 'Sáb', horas: 3.5 },
  { name: 'Dom', horas: 4.1 },
];

const topPerformers = [
  { name: 'Juan Pérez', resolved: 24, avgTime: '2.1h' },
  { name: 'María García', resolved: 22, avgTime: '2.3h' },
  { name: 'Carlos López', resolved: 18, avgTime: '2.8h' },
];

const stats = [
  { label: 'Tickets totales', value: '44', icon: BarChart3, change: '+12%', color: 'from-[#3CA2A2] to-[#00285F]' },
  { label: 'Tiempo promedio', value: '2.8h', icon: Clock, change: '-8%', color: 'from-blue-500 to-[#3CA2A2]' },
  { label: 'Tasa resolución', value: '94%', icon: TrendingUp, change: '+5%', color: 'from-[#3CA2A2] to-blue-500' },
  { label: 'Usuarios activos', value: '18', icon: Users, change: '+3%', color: 'from-gray-500 to-gray-600' },
];

export const Dashboards = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-gray-900 dark:text-white mb-2">Dashboards</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Visualiza estadísticas y métricas de rendimiento
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: [0.4, 0.0, 0.2, 1] }}
            >
              <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className={`text-sm ${stat.change.startsWith('+') ? 'text-[#3CA2A2]' : 'text-blue-500'}`}>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                  <h3 className="text-gray-900 dark:text-white mt-1">{stat.value}</h3>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E]">
          <CardHeader>
            <div className="flex items-center gap-3">
              <BarChart3 className="w-5 h-5 text-[#3CA2A2]" />
              <CardTitle className="text-gray-900 dark:text-white">Tickets por estatus</CardTitle>
            </div>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Distribución actual de tickets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={ticketsByStatus}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {ticketsByStatus.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1E1E1E',
                    border: '1px solid #333',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E]">
          <CardHeader>
            <div className="flex items-center gap-3">
              <BarChart3 className="w-5 h-5 text-[#3CA2A2]" />
              <CardTitle className="text-gray-900 dark:text-white">Tickets mensuales</CardTitle>
            </div>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Tickets abiertos vs resueltos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.1} />
                <XAxis dataKey="name" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1E1E1E',
                    border: '1px solid #333',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Bar dataKey="abiertos" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                <Bar dataKey="resueltos" fill="#3CA2A2" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E] lg:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#3CA2A2]" />
              <CardTitle className="text-gray-900 dark:text-white">Tiempo promedio de respuesta</CardTitle>
            </div>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Tiempo de respuesta por día (en horas)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={responseTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.1} />
                <XAxis dataKey="name" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1E1E1E',
                    border: '1px solid #333',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="horas"
                  stroke="#3CA2A2"
                  strokeWidth={3}
                  dot={{ fill: '#3CA2A2', r: 6 }}
                  activeDot={{ r: 8 }}
                  name="Horas"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E]">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#3CA2A2]" />
              <CardTitle className="text-gray-900 dark:text-white">Top performers</CardTitle>
            </div>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Usuarios con más tickets resueltos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformers.map((user, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#181818] border border-gray-200 dark:border-gray-800"
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-xl ${
                      index === 0
                        ? 'bg-gradient-to-br from-[#3CA2A2] to-[#00285F]'
                        : index === 1
                        ? 'bg-gradient-to-br from-blue-500 to-[#3CA2A2]'
                        : 'bg-gradient-to-br from-gray-500 to-gray-600'
                    }`}
                  >
                    <span className="text-white">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 dark:text-white">{user.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {user.resolved} tickets • {user.avgTime}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};
