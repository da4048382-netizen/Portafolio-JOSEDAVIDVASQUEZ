import Link from "next/link";
import Image from "next/image";
import { Mail, Paperclip } from "lucide-react";

import { buttonVariants } from "./ui/button";

import Container from "./shared/container";

const Introduction = () => {
    return (
        <Container>
            <div
                className="flex flex-col items-center justify-center text-center min-h-screen"
                id="home"
            >
                <h3 className="text-xl mb-3"></h3>
                <h1 className="text-4xl font-bold mb-3">
                    JOSE DAVID VASQUEZ ALCARAZ🧑🏽‍💻
                </h1>
                <h2 className="text-2xl text-gray-400">
                    Frontend Developer Y BackEnd programmer
                </h2>

                <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
                    <Link className={buttonVariants()} href="#contact">
                        <Mail className="mr-2" /> Contacta conmigo
                    </Link>

                    <Link
                        className={buttonVariants({ variant: "secondary" })}
                        href="/cv-JOSEDAVIDVASQUEZ.pdf"
                        target="_blank"
                    >
                        <Paperclip className="mr-2" /> Descargar Curriculum
                    </Link>
                </div>

                <div className="mt-10">
                    <Image
                        src="/icono.jpeg"
                        alt="Profile pic"
                        width={250}
                        height={220}
                        className="mx-auto rounded-full shadow-lg"
                    />
                </div>
            </div>
        </Container>
    );
};

export default Introduction;
