import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Asegúrate de tenerlo instalado

export default function ConfirmacionMatricula() {
  const navigate = useNavigate();

  const volverInicio = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white flex items-center justify-center">
      <motion.div
        className="bg-white p-10 rounded-2xl shadow-2xl text-center space-y-6 max-w-lg w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>

        <h2 className="text-3xl font-extrabold text-green-700">¡Matrícula completada!</h2>
        <p className="text-gray-600 text-lg">
           Registro de Matricula Completa.
        </p>

        <motion.button
          onClick={volverInicio}
          whileHover={{ scale: 1.05 }}
          className="mt-4 bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition-all"
        >
          Volver al inicio
        </motion.button>
      </motion.div>
    </div>
  );
}
