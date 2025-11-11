import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
      className="w-full"
    >
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="flex justify-center mb-8">
          <Logo height="48px" />
        </div>

        <div className="text-center mb-8">
          <h2 className="text-gray-900 mb-2">Recuperar contraseña</h2>
          <p className="text-gray-600">Ingresa tu correo para restablecer tu contraseña</p>
        </div>

        {!submitted ? (
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

            <Button
              type="submit"
              className="w-full bg-[#3CA2A2] text-white hover:bg-[#358f8f] transition-all duration-200"
            >
              Enviar enlace
            </Button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6"
          >
            <CheckCircle className="w-16 h-16 text-[#3CA2A2] mx-auto mb-4" />
            <p className="text-gray-900 mb-2">¡Enlace enviado!</p>
            <p className="text-sm text-gray-600">
              Revisa tu correo para restablecer tu contraseña
            </p>
          </motion.div>
        )}

        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#3CA2A2] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio de sesión
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
