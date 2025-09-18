import Title from "./shared/title";

const WhyMe = () => {
  return (
    <div className="p-6 md:px-12 md:py-24 max-w-5xl mx-auto" id="whyme">
      <Title title="Por qué rendiría muy bien 💡" subtitle="Lo que me diferencia" />
      <ul className="mt-6 space-y-4 text-lg text-gray-600 dark:text-gray-300">
        <li>🔥  capacidad de adaptación a nuevas tecnologías</li>
        <li>🔥 Compromiso y disciplina en el cumplimiento de objetivos</li>
        <li>🔥 Habilidades de trabajo en equipo y liderazgo</li>
        <li>🔥 Pasión por el aprendizaje constante</li>
      </ul>
    </div>
  );
};

export default WhyMe;
