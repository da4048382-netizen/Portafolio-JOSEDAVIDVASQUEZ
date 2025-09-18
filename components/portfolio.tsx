import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Portfolio = () => {
  return (
    <section className="p-6 md:py-24 max-w-6xl mx-auto" id="portfolio">
      <Title title="Portfolio" subtitle="Trabajos recientes 💼" />

      <div className="grid gap-10 mt-10 sm:grid-cols-2 md:grid-cols-3">
        {dataPortfolio.map((data) => (
          <div
            key={data.id}
            className="rounded-2xl shadow-md border border-gray-200 dark:border-slate-700 dark:bg-slate-800 overflow-hidden hover:shadow-xl transition-all flex flex-col"
          >
            {/* Imagen */}
            <Image
              src={data.image}
              alt={data.title}
              width={400}
              height={300}
              className="w-full h-56 object-cover"
            />

            {/* Contenido */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-3 text-center">
                {data.title}
              </h3>

              <div className="mt-auto flex justify-center gap-4">
                <Link
                  className={buttonVariants({ variant: "outline" })}
                  href={data.urlGithub}
                  target="_blank"
                >
                  Github
                </Link>

                <Link
                  className={buttonVariants()}
                  href={data.urlDemo}
                  target="_blank"
                >
                  Live demo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
