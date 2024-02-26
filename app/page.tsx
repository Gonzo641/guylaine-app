"use client";

import Image from "next/image";
import { motion } from 'framer-motion'
import ImageGrid from "@/components/ImageGrid";


export default function Home() {
  return (
    <section className='py-12'>
      {/* <Image
        src="/image/GuylaineProfil/guylaine2.jpeg"
        fill
        alt="image"
        className="-z-10 object-cover"
      /> */}
      <div className='container flex space-x-6'>
        <div>
          <motion.h1 
            className='mb-12 text-6xl font-bold text-white'
            initial={{ opacity: 0, x: 100}}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            Bonjour et<br/> bienvenue
          </motion.h1>
          <motion.p 
          className='max-w-3xl pb-4 text-white'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
            Envie de vous offrir une parenthèse de douceur ? Ou de l’offrir à une personne chère ? 
            <br />Je vous invite à découvrir les différents soins que je propose. 
          </motion.p>
          <motion.p 
          className='max-w-3xl text-white'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
            Le point commun entre tous est de procurer une profonde relaxation du corps et de l’esprit et un éveil 
            du corps.<br /><br /> Ils invitent à se reconnecter au corps afin de lui permettre de retrouver sa vitalité, 
            et donc de le libérer des tensions, douleurs, fatigue, épuisement… 
          </motion.p>
        </div>
        <ImageGrid />  
      </div>
    </section>
  )
}