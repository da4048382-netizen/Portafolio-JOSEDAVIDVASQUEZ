import { Phone } from "lucide-react";
import { dataAboutMe, dataSlider } from "@/data";
import Title from "./shared/title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto text-center"
    >
      {/* Título centrado */}
      <Title title="Sobre mí" subtitle="Conóceme" />

      <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
        {/* Columna 1: Carrusel */}
        <div className="flex justify-center">
          <Carousel
            opts={{ align: "start" }}
            orientation="vertical"
            className="w-full max-w-xs h-fit"
          >
            <CarouselContent className="-mt-1 h-[200px]">
              {dataSlider.map((data) => (
                <CarouselItem key={data.id}>
                  <div className="flex items-center justify-center">
                    <Image
                      src={data.url}
                      alt="Image"
                      width={250}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Columna 2: Info + texto */}
        <div>
          {/* Tarjetas "Sobre mí" */}
          <div className="grid md:grid-cols-3 gap-4 mt-7 text-center">
            {dataAboutMe.map((data) => (
              <div
                key={data.id}
                className="border border-white/10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800 flex flex-col items-center"
              >
                <div className="text-primary mb-2">{data.icon}</div>
                <p className="font-semibold">{data.name}</p>
                <p className="text-gray-400 text-sm">{data.description}</p>

                {data.logos && (
                  <div className="flex gap-2 mt-2 justify-center">
                    {data.logos.map((logo, index) => (
                      <Image
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        width={40}
                        height={40}
                        className="rounded-md"
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Texto centrado */}
          <p className="my-8 text-justify leading-relaxed">
            Soy un desarrollador apasionado que encuentra su mayor inspiración
            entre líneas de código y algoritmos desafiantes. Cuando no estoy
            inmerso en la programación, disfruto del aire libre y el deporte,
            creyendo firmemente en mantener un equilibrio entre mente y cuerpo.
            Además, soy un ávido lector, encontrando en los libros una fuente
            inagotable de conocimiento y crecimiento personal. Desde los momentos
            de estudio en la media técnica y el semillero Quipux, comparto mi
            pasión por la programación, creando contenido inspirador y educativo
            para conectar con otros apasionados del desarrollo de software.
          </p>

          {/* Botón centrado */}
          <div className="flex justify-center">
            <Button>
              <Phone size={20} className="mr-2" /> Hablamos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
