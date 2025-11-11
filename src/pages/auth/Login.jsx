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
      transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
      className="w-full"
    >
      <div className="bg-white/5 dark:bg-[#1E1E1E] backdrop-blur-xl rounded-[20px] shadow-2xl border border-white/10 dark:border-gray-800 p-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo height="48px" />
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-[#FAFAFA] dark:text-[#FAFAFA] mb-2">Inicia sesión en NexDesk</h2>
          <p className="text-gray-400">Gestiona tu plataforma con elegancia</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">Correo electrónico</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#3CA2A2] focus:ring-[#3CA2A2]"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">Contraseña</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#3CA2A2] focus:ring-[#3CA2A2]"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#3CA2A2] to-[#00285F] hover:shadow-lg hover:shadow-[#3CA2A2]/50 transition-all duration-300 group"
          >
            Iniciar sesión
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>

        {/* Links */}
        <div className="mt-6 space-y-3 text-center">
          <Link
            to="/forgot-password"
            className="block text-sm text-gray-400 hover:text-[#3CA2A2] transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <div className="text-sm text-gray-400">
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
