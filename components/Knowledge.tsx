"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Knowledge() {
  return (
    <section
      id="knowledge"
      className="relative flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-16"
    >
      {/* Video del avatar programando */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <video
          src="/VIDEO.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-2xl shadow-lg w-[320px] md:w-[500px]"
        />
      </motion.div>

      {/* Imagen Avatar flotante */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Image
          src="/Avatar.png"
          alt="Avatar"
          width={150}
          height={150}
          className="object-contain drop-shadow-lg"
          priority
        />
      </motion.div>

      {/* Imagen React flotante */}
      <motion.div
        className="absolute bottom-20 right-10 w-20 h-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Image
          src="/React.png"
          alt="React Logo"
          width={150}
          height={150}
          className="object-contain drop-shadow-lg"
          priority
        />
      </motion.div>
    </section>
  );
}
