export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-primary/5 to-white text-center px-6">
      <h1 className="text-5xl font-bold text-primary mb-4">
        NexDesk
      </h1>
      <p className="text-lg text-dark/70 mb-8">
        Plataforma de tickets y soporte desarrollada por <span className="font-semibold text-accent">NexDevCode</span>.
      </p>
      <button className="px-6 py-3 bg-primary text-white rounded-xl shadow hover:bg-primary/90 transition">
        Iniciar sesión
      </button>
    </div>
  );
}
