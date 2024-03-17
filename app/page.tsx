"use client";

import Image from "next/image";
import { motion } from 'framer-motion'
import ImageGrid from "@/components/ImageGrid";
import PolygonBackground from "@/components/PolygonBackground";


export default function Home() {
  return (
    <section className='sm:py-20 py-8'>
      {/* <Image
        src="/image/GuylaineProfil/guylaine2.jpeg"
        fill
        alt="image"
        className="-z-10 object-cover"
      /> */}
      <PolygonBackground />
      <div className='container flex flex-col xl:flex-row md:space-x-6'>
        <div className="mb-12 xl:mb-0">
          <div className="flex justify-center items-center">
            <Image
              src="/image/Logo/Logo_Guylaine1.png"
              width={300}
              height={100}
              alt="image"
              className="object-cover" 
            />
          </div>
          {/* <div className="flex justify-center items-center">
            <motion.h1 
              className='mb-12 sm:text-6xl text-4xl font-bold text-center'
              initial={{ opacity: 0, x: 100}}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              Bonjour et bienvenue
            </motion.h1>
          </div> */}
          <div className="flex justify-center items-center mt-4">
            <motion.p 
            className='max-w-3xl pb-4 text-center font-semibold px-2 sm:px-0'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            >
              <span className="text-xl">Envie de vous offrir une parenthèse de douceur ?</span>
              <br /><br /> 
              <span className="text-xl">Ou de l’offrir à une personne chère ?</span> 
              <br /><br />Je vous invite à découvrir les différents soins que je propose. 
            </motion.p>
          </div>
          <div className="flex justify-center items-center mt-2">
            <motion.p 
            className='max-w-3xl xl:mx-4 text-center font-semibold'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            >
              Le point commun entre tous est de procurer une <span className="text-[#0a98a7]">profonde relaxation du corps</span>  et de l’esprit et un éveil 
              du corps.<br /><br /> Ils invitent à se <span className="text-[#0a98a7]">reconnecter au corps</span>  afin de lui permettre de retrouver sa vitalité, 
              et donc de le libérer des tensions, douleurs, fatigue, épuisement… 
            </motion.p>
          </div>
        </div>
        <ImageGrid />
        <div className="flex justify-center items-center">
          <Image 
            src="/image/Shiatsu/shiatsu3.jpeg"
            width={400}
            height={200}
            alt="image"
            className="object-cover lg:hidden rounded-lg"
          />
        </div>  
      </div>
    </section>
  )
}