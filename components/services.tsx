import { dataServices } from "@/data";
import Title from "./shared/title";
import { Check } from "lucide-react";

const Services = () => {
  return (
    <section
      className="p-6 md:px-12 md:py-24 max-w-6xl mx-auto"
      id="services"
    >
      <Title title="Servicios" subtitle="Lo que ofrezco 🚀" />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {dataServices.map((service) => (
          <div
            key={service.id}
            className="rounded-2xl border border-gray-200 dark:border-slate-700 dark:bg-slate-800 shadow-md hover:shadow-xl transition-all p-6 flex flex-col"
          >
            {/* Título */}
            <div className="flex items-center gap-3 mb-6">
              <span className="p-3 rounded-full bg-blue-100 dark:bg-slate-700">
                {service.icon}
              </span>
              <h4 className="text-xl font-semibold">{service.title}</h4>
            </div>

            {/* Lista de features */}
            <ul className="space-y-3 flex-grow">
              {service.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <Check
                    size={20}
                    className="text-green-600 dark:text-green-400 mt-1"
                  />
                  <span>{feature.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
