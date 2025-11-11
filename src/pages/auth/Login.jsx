import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
      className="w-full"
    >
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="flex justify-center mb-8">
          <Logo height="48px" />
        </div>

        <div className="text-center mb-8">
          <h2 className="text-gray-900 mb-2">Inicia sesión en NexDesk</h2>
          <p className="text-gray-600">Gestiona tu plataforma con elegancia</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">Correo electrónico</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="pl-10 bg-white border-[#D9D9D9] text-gray-900 placeholder:text-[#888888] focus:border-[#3CA2A2] focus:ring-1 focus:ring-[#3CA2A2]/20 focus:shadow-inner transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">Contraseña</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="pl-10 bg-white border-[#D9D9D9] text-gray-900 placeholder:text-[#888888] focus:border-[#3CA2A2] focus:ring-1 focus:ring-[#3CA2A2]/20 focus:shadow-inner transition-all"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#3CA2A2] text-white hover:bg-[#358f8f] transition-all duration-200"
          >
            Iniciar sesión
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </form>

        <div className="mt-6 space-y-3 text-center">
          <Link
            to="/forgot-password"
            className="block text-sm text-gray-600 hover:text-[#3CA2A2] transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <div className="text-sm text-gray-600">
            ¿No tienes cuenta?{' '}
            <Link
              to="/register"
              className="text-[#3CA2A2] hover:underline"
            >
              Regístrate
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
