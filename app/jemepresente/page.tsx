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
      <div className='container flex flex-col xl:flex-row xl:space-x-12'>
        <div>
          {/* <motion.h1 
            className='mb-12 text-4xl sm:text-6xl font-bold bg-gradient-to-r 
                    from-[#0a98a7] via-[#0bada0] to-[#8df6fa] text-transparent bg-clip-text'
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
          className='max-w-3xl pb-4 text-2xl sm:text-3xl'
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
            <Separator className="hidden xl:block" />
          </motion.div> */}
          <motion.p 
          className='max-w-3xl pb-4 xl:pt-28'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.1,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
          J’ai rencontré le <span className="font-semibold">Shiatsu</span> en 2010, année où j’ai commencé à en recevoir régulièrement et à ressentir 
          les effets bienfaisants de cette technique.<br /><br /> Le Shiatsu m’a fait tant de bien que j’ai décidé en 2015 de 
          l’apprendre afin de pouvoir à mon tour apporter du bien être autour de moi.<br /><br /> C’est ainsi que j’ai reçu 
          en 2019 la certification de l’école Iokai et en 2022 le titre de Spécialiste en Shiatsu par le SPS 
          (Syndicat Professionnel du Shiatsu).
          </motion.p>
          <motion.p 
          className='max-w-3xl pb-2'
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
          className='max-w-3xl pb-4'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
          Passionnée par le ventre, notre cerveau émotionnel, je me suis formée au Chi Nei Tsang<br />
          auprès de 
          <a href="https://www.google.com/maps/place/Massage:+Relaxation+%26+Bien-être+40+Anne+Moreau/@43.6697851,-1.3900687,17z/data=!3m1!4b1!4m6!3m5!1s0xd515b1c44a6b979:0xbbd9796f8c99de84!8m2!3d43.6697851!4d-1.3900687!16s%2Fg%2F11g_y6twz7?entry=ttu
          " className="text-[#09ba9d] hover:text-[#0c9aa4]"> Anne Moreau
          </a>.
          <br /> Son enseignement est basé sur les principes de l’école de Mantak Chia.<br /><br />
          J’ai également choisi d’apprendre la Réflexologie Cranio-faciale et Plantaire afin d’explorer 
          ces zones Yang (la tête) et Yin (les pieds) du corps. Je me suis formée à l’école Evimeria.
          </motion.p>
          <motion.p 
          className='max-w-lg'
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
        <div className="pt-10 xl:pt-28 flex justify-center items-center">
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