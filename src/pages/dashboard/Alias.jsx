import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Mail, Plus, Copy, Check, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

const initialAliases = [
  {
    id: 1,
    email: 'team@poolandchill.com.mx',
    description: 'Equipo general',
    forwardTo: ['juan@poolandchill.com.mx', 'maria@poolandchill.com.mx'],
    active: true,
  },
  {
    id: 2,
    email: 'support@poolandchill.com.mx',
    description: 'Soporte técnico',
    forwardTo: ['carlos@poolandchill.com.mx'],
    active: true,
  },
  {
    id: 3,
    email: 'sales@poolandchill.com.mx',
    description: 'Ventas y comercial',
    forwardTo: ['ana@poolandchill.com.mx', 'luis@poolandchill.com.mx'],
    active: true,
  },
  {
    id: 4,
    email: 'info@poolandchill.com.mx',
    description: 'Información general',
    forwardTo: ['team@poolandchill.com.mx'],
    active: true,
  },
];

export const Alias = () => {
  const [aliases, setAliases] = useState(initialAliases);
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (email, id) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">Alias de correo</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gestiona los alias de correo electrónico del equipo
          </p>
        </div>
        <Button className="bg-gradient-to-r from-[#3CA2A2] to-[#00285F] hover:shadow-lg hover:shadow-[#3CA2A2]/50 transition-all duration-300">
          <Plus className="w-4 h-4 mr-2" />
          Agregar alias
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E]">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#3CA2A2]/10 to-[#00285F]/10">
                <Mail className="w-6 h-6 text-[#3CA2A2]" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total alias</p>
                <h3 className="text-gray-900 dark:text-white mt-1">{aliases.length}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E]">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                <Mail className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Activos</p>
                <h3 className="text-gray-900 dark:text-white mt-1">
                  {aliases.filter(a => a.active).length}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E]">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-[#3CA2A2]/10">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Reenvíos</p>
                <h3 className="text-gray-900 dark:text-white mt-1">
                  {aliases.reduce((sum, a) => sum + a.forwardTo.length, 0)}
                </h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Aliases List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {aliases.map((alias, index) => (
          <motion.div
            key={alias.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05, ease: [0.4, 0.0, 0.2, 1] }}
          >
            <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E] hover:shadow-lg hover:shadow-[#3CA2A2]/10 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="w-5 h-5 text-[#3CA2A2]" />
                      <CardTitle className="text-gray-900 dark:text-white">{alias.email}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {alias.description}
                    </CardDescription>
                  </div>
                  <Badge className={alias.active ? 'bg-green-500/10 text-green-500' : 'bg-gray-500/10 text-gray-500'}>
                    {alias.active ? 'Activo' : 'Inactivo'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Reenviar a:</p>
                  <div className="space-y-2">
                    {alias.forwardTo.map((email, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-[#181818]"
                      >
                        <span className="text-sm text-gray-700 dark:text-gray-300">{email}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 pt-2 border-t border-gray-200 dark:border-gray-800">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => copyToClipboard(alias.email, alias.id)}
                  >
                    {copiedId === alias.id ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Copiado
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copiar
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
