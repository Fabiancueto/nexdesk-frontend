import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full py-4 text-center text-sm text-gray-500 bg-gray-50 dark:bg-[#1E1E1E] dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
      © {new Date().getFullYear()} NexDesk — Todos los derechos reservados
    </footer>
  );
};
