import { dataExperience } from "@/data";
import Title from "./shared/title";
import { BadgeCheck } from "lucide-react";
import { Progress } from "./ui/progress";

const Experience = () => {
  return (
    <section
      id="experience"
      className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto"
    >
      <Title title="Experiencia" subtitle="Skills que tengo" />

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {dataExperience.map((data) => (
          <div
            key={data.id}
            className="p-6 rounded-xl border border-gray-300 dark:border-slate-700 shadow-md bg-white/50 dark:bg-slate-800/50"
          >
            {/* Título de la categoría */}
            <h3 className="text-center text-xl font-semibold mb-6 text-primary">
              {data.title}
            </h3>

            {/* Grid de skills */}
            <div className="grid md:grid-cols-2 gap-6">
              {data.experience.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center text-center"
                >
                  <p className="flex items-center gap-2 font-medium mb-1">
                    <BadgeCheck className="text-green-500" size={18} />
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-sm mb-3">{item.subtitle}</p>

                  {/* Barra de progreso centrada */}
                  <div className="w-full flex justify-center">
                    <Progress value={item.value} className="w-4/5" />
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{item.value}%</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
