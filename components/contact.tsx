import { dataContact } from "@/data";
import Title from "./shared/title";
import Link from "next/link";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <section
      id="contact"
      className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto text-center"
    >
      <Title
        title="Contacta conmigo"
        subtitle="Ponte en contacto conmigo 👋"
      />

      <div className="grid md:grid-cols-3 md:gap-7 mt-12 items-start">
        {/* Columna izquierda: info de contacto */}
        <div className="flex flex-col gap-5">
          {dataContact.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center text-center dark:bg-slate-800 rounded-lg shadow-md p-6"
            >
              <div className="text-primary mb-2">{data.icon}</div>
              <p className="font-semibold">{data.title}</p>
              <p className="text-gray-400 text-sm">{data.subtitle}</p>
              <Link
                href={data.link}
                target="_blank"
                className="mt-2 text-blue-500 hover:underline"
              >
                Enviar mensaje
              </Link>
            </div>
          ))}
        </div>

        {/* Columna derecha: formulario */}
        <div className="col-span-2 flex justify-center mt-8 md:mt-0">
          <div className="w-full max-w-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
