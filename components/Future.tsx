import Title from "./shared/title";

const Future = () => {
  return (
    <div className="p-6 md:px-12 md:py-24 max-w-5xl mx-auto" id="future">
      <Title title="Proyecciones a futuro 🚀" subtitle="Mis metas y aspiraciones" />
      <ul className="mt-6 space-y-4 text-lg text-gray-600 dark:text-gray-300">
        <li>🌍 Especializarme en desarrollo backend y arquitecturas escalables</li>
        <li>💻 Trabajar en proyectos de alto impacto social y tecnológico</li>
        <li>☁️ Dominar tecnologías cloud y microservicios</li>
      </ul>
    </div>
  );
};

export default Future;
