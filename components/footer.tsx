import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="max-w-5xl mx-auto px-6 py-10">
      {/* Título centrado */}
      <h4 className="text-2xl font-bold text-center mb-6">
        Portafolio — Jose David Vasquez Alcaraz
      </h4>

      {/* Navegación */}
      <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm font-medium">
        <Link href="#about-me" className="hover:text-primary transition-colors">
          Sobre mí
        </Link>
        <Link href="#skills" className="hover:text-primary transition-colors">
          Skills
        </Link>
        <Link href="#services" className="hover:text-primary transition-colors">
          Servicios
        </Link>
        <Link href="#portfolio" className="hover:text-primary transition-colors">
          Portfolio
        </Link>
        <Link href="#contact" className="hover:text-primary transition-colors">
          Contacto
        </Link>
      </div>

      <Separator className="my-6" />

      {/* Créditos */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} | Landing Page by{" "}
        <span className="font-semibold">Jose David Vasquez Alcaraz</span>
      </div>
    </footer>
  );
};

export default Footer;
