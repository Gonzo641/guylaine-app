"use client";

import Image from "next/image";
import { motion } from 'framer-motion'
import PolygonBackground from "@/components/PolygonBackground";


export default function ReflexologiePage() {
  return (
    <section className='py-12'>
      {/* <Image
        src="/image/ReflexologieCraintFacial/craintfacial1.jpeg"
        fill
        alt="image"
        className="-z-10 object-cover"
      /> */}
      <PolygonBackground />
      <div className='container'>
        <motion.h1 
          className='mb-12 text-3xl sm:text-6xl font-bold bg-gradient-to-r 
                  from-[#0a98a7] via-[#0bada0] to-[#8df6fa] text-transparent bg-clip-text'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          LA RÉFLEXOLOGIE
        </motion.h1>
        <div className="flex flex-col xl:flex-row">
          <motion.h2 
            className='mb-12 text-xl sm:text-3xl font-bold'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            La réflexologie craint faciale
          </motion.h2>
          <motion.h2 
            className='mb-12 text-xl sm:text-3xl font-bold ml-auto'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            La réflexologie plantaire
          </motion.h2>
        </div>
        {/* <motion.p 
        className='max-w-lg pb-4'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
        Le Chi Nei Tsang est un massage profond du ventre, qui permet de prendre conscience des tensions physiques nichées dans 
        l’abdomen et des charges émotionnelles qui leur sont liées. 
        Il détoxifie les organes interne et facilite leur fonctionnement. Il allège les tensions et facilite l’élimination. 
        </motion.p>
        <motion.p 
        className='max-w-lg pb-4'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
        Le Chi Nei Tsang est une approche viscérale et holistique. Ce massage à la fois très doux mais également profond et 
        dynamique, va aider les organes internes du corps à fonctionner plus facilement. Mais il va également permettre de se 
        reconnecter à son corps, de dénouer tensions et douleurs périphériques, de retrouver vitalité et bien-être. 
        Il permet d’agir à la fois sur le plan physique mais également de libérer les tensions émotionnelles. 
        </motion.p>
        <motion.p 
        className='max-w-lg'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
        La séance va commencer par un moment de détente, de respiration afin de détendre le ventre et le préparer à recevoir 
        le massage. Elle se poursuit sur le ventre avec de l’huile. 
        </motion.p> */}
      </div>
    </section>
  )
}