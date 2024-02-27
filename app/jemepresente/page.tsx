"use client";

import Image from "next/image";
import { motion } from 'framer-motion'
import PolygonBackground from "@/components/PolygonBackground";
import { Separator } from "@/components/ui/separator";


export default function JeMePresentePage() {
  return (
    <section className='py-12'>
      {/* <Image
        src="/image/GuylaineProfil/guylaine1.jpeg"
        fill
        alt="image"
        className="-z-10 object-cover"
      /> */}
      <PolygonBackground />
      <div className='container flex space-x-12'>
        <div>
          <motion.h1 
            className='mb-12 text-6xl font-bold text-white'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            JE ME PRÉSENTE
          </motion.h1>
          <motion.h2 
          className='max-w-3xl pb-4 text-3xl text-white'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
          Je m’appelle Guylaine et j’ai 47 ans. 
          </motion.h2>
          <motion.div className="pb-8 w-full"
                      initial={{ opacity: 0, y: 100}}
                      animate={{ opacity: 1, y: 0 }}
                     transition={{
                       duration: 0.8,
                       delay: 0.9,
                       ease: [0, 0.71, 0.2, 1.01]
                     }}           
          >
            <Separator />
          </motion.div>
          <motion.p 
          className='max-w-3xl pb-4 text-white'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.1,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
          J’ai rencontré le Shiatsu en 2010, année où j’ai commencé à en recevoir régulièrement et à ressentir 
          les effets bienfaisants de cette technique.<br /><br /> Le Shiatsu m’a fait tant de bien que j’ai décidé en 2015 de 
          l’apprendre afin de pouvoir à mon tour apporter du bien être autour de moi.<br /><br /> C’est ainsi que j’ai reçu 
          en 2019 la certification de l’école Iokai et en 2022 le titre de Spécialiste en Shiatsu par le SPS 
          (Syndicat Professionnel du Shiatsu).
          </motion.p>
          <motion.p 
          className='max-w-3xl pb-2 text-white'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
          Le Shiatsu m’a amené à m’intéresser à des zones très spécifiques du corps, où l’on stocke particulièrement 
          les tensions, et à approfondir ma pratique en découvrant de nouvelles techniques.<br /><br />
          </motion.p>
          <motion.p 
          className='max-w-3xl pb-4 text-white'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
          La première zone a été le ventre et je me suis formée au Tchi Nei Tsang auprès de Anne Moreau. 
          La seconde a été la crâne, la nuque, les épaules au travers de la Réflexologie cranio-faciale que j’ai appris 
          à l’école Evimeria.<br />
          Enfin je me suis intéressée au pieds et à la Réflexologie plantaire que j’ai également appris à Evimeria.
          </motion.p>
          <motion.p 
          className='max-w-lg text-white'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.7,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
          Ces pratiques très complémentaires me permettent aujourd’hui de proposer des séances adaptées aux besoins 
          spécifiques de chacun. 
          </motion.p>
        </div>
        <div className="pt-28">
          <Image
            src="/image/GuylaineProfil/guylaine2.jpeg"
            width={500}
            height={200}
            alt="image"
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}