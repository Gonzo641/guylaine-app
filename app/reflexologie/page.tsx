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
        <motion.h1 
          className='mb-12 px-4 lg:px-40 text-2xl sm:text-6xl font-bold bg-gradient-to-r 
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
        <div className="grid grid-cols-1 xl:grid-cols-2">

          <div className="flex flex-col px-4 lg:px-20">
            <motion.h2 
              className='mb-12 text-xl sm:text-3xl font-bold dark:text-[#09ba9d]'
              initial={{ opacity: 0, y: 100}}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              Plantaire
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 100}}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01]
              }}>
            La Réflexologie plantaire est une science ancestrale de pressions sur certaines zones ou points réflexes 
            situés sur la voûte plantaire, la plante des pieds et les orteils.
            </motion.p>
            <br />
            <motion.p              
              initial={{ opacity: 0, y: 100}}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0, 0.71, 0.2, 1.01]
              }}>
              La stimulation de ces zones favorise la relaxation.
            </motion.p>
            <br />
            <motion.p              
              initial={{ opacity: 0, y: 100}}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.4,
                ease: [0, 0.71, 0.2, 1.01]
              }}>
            Les pieds sont liés aux organes par une multitude de terminaisons nerveuses, c’est pourquoi 
            les masser permet d’agir directement<br /> sur l’équilibre du reste du corps, d’améliorer la circulation, 
            de relâcher les tensions et donc d’aider le corps à rétablir l’homéostasie.
            </motion.p>
            <div className="flex flex-col md:flex-row justify-center items-center m-10 gap-4">
              <motion.div className="w-64 sm:w-72 h-96"
                          initial={{ opacity: 0, y: 100}}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 1,
                            delay: 1.6,
                            ease: [0, 0.71, 0.2, 1.01]
                          }}
              >
                <img src="/image/ReflexologiePlantaire/reflexoplantaire2.jpeg" 
                     alt="image"
                     className="w-64 sm:w-72 h-96 object-cover rounded-xl" 
                />
              </motion.div>
              <motion.div className="w-64 sm:w-72 h-96"
                          initial={{ opacity: 0, y: 100}}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 1,
                            delay: 1.8,
                            ease: [0, 0.71, 0.2, 1.01]
                          }}
              >
                <img src="/image/ReflexologiePlantaire/reflexoplantaire3.jpeg" 
                     alt="image"
                     className="w-64 sm:w-72 h-96 object-cover rounded-xl" 
                />
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col px-4 lg:px-20 pt-8 xl:pt-0">
            <motion.h2 
              className='mb-12 text-xl sm:text-3xl font-bold dark:text-[#09ba9d]'
              initial={{ opacity: 0, y: 100}}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              Cranio-faciale
            </motion.h2>
            <motion.p              
              initial={{ opacity: 0, y: 100}}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01]
              }}>
              La Réflexologie faciale et crânienne consiste à stimuler des points et zones réflexes 
              situées sur le haut du corps.
            </motion.p>
            <br />
            <motion.p              
              initial={{ opacity: 0, y: 100}}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0, 0.71, 0.2, 1.01]
              }}>
              La tête possède de multiples terminaisons nerveuses et abrite 
              des glandes essentielles et indispensables au fonctionnement physiologique et émotionnel 
              de la personne.
            </motion.p>
            <br /> 
            <motion.p              
              initial={{ opacity: 0, y: 100}}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.4,
                ease: [0, 0.71, 0.2, 1.01]
              }}> 
              C’est pourquoi le massage de cette partie du corps apporte une détente 
              profonde physique et psychique, une libération émotionnelle et une sensation de bien être générale. 
            </motion.p>
            <div className="flex flex-col md:flex-row justify-center items-center m-10 gap-4 mt-16">
              <motion.div className="w-64 sm:w-72 h-96"
                          initial={{ opacity: 0, y: 100}}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 1,
                            delay: 1.6,
                            ease: [0, 0.71, 0.2, 1.01]
                          }}
              >
                <img src="/image/ReflexologieCraintFacial/craintfacial2.jpeg" 
                     alt="image"
                     className="w-64 sm:w-72 h-96 object-cover rounded-xl" 
                />
              </motion.div>
              <motion.div className="w-64 sm:w-72 h-96"
                          initial={{ opacity: 0, y: 100}}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 1,
                            delay: 1.8,
                            ease: [0, 0.71, 0.2, 1.01]
                          }}
              >
                <img src="/image/ReflexologieCraintFacial/craintfacial3.jpeg" 
                     alt="image"
                     className="w-64 sm:w-72 h-96 object-cover rounded-xl" 
                />
              </motion.div>
            </div>
          </div>
        </div>
    </section>
  )
}