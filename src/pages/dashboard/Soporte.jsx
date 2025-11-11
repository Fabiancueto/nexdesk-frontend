import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';

export const Soporte = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
      className="space-y-8"
    >
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-gray-900 mb-3">Contacto y soporte</h1>
        <p className="text-gray-600">
          ¿Necesitas ayuda o tienes una pregunta? Envíanos un mensaje y te responderemos pronto
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="border-gray-200 bg-white shadow-sm">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-xl bg-[#3CA2A2]/10">
                <MessageSquare className="w-8 h-8 text-[#3CA2A2]" />
              </div>
            </div>
            <CardTitle className="text-gray-900">Enviar solicitud</CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              Completa el formulario y nuestro equipo te contactará
            </CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">Nombre completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="bg-white border-gray-200 h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">Correo electrónico</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="bg-white border-gray-200 h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe tu problema o pregunta..."
                    className="bg-white border-gray-200 min-h-[160px] resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-[#3CA2A2] text-white hover:bg-[#358f8f] transition-all duration-200"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar solicitud
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
                className="text-center py-16"
              >
                <CheckCircle2 className="w-20 h-20 text-[#3CA2A2] mx-auto mb-6" />
                <h3 className="text-gray-900 mb-3">¡Solicitud enviada!</h3>
                <p className="text-gray-600">
                  Gracias por contactarnos. Te responderemos lo antes posible.
                </p>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};
