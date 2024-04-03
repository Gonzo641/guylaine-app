"use client";

import Image from "next/image";
import { motion } from 'framer-motion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import PolygonBackground from "@/components/PolygonBackground";


export default function ChiNeiTsangPage() {
  return (
    <section className='py-12'>
      {/* <Image
        src="/image/ChiNeiTsang/chineitsang1.jpeg"
        fill
        alt="image"
        className="-z-10 object-cover"
      /> */}
      <PolygonBackground />
      <div className='container flex flex-col xl:flex-row sm:space-x-12'>
        <div className="lg:px-36">
          <motion.h1 
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
            LE CHI NEI TSANG
          </motion.h1>
          <motion.p 
          className='max-w-lg pb-4'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
          Le <span className="font-semibold text-[#0a98a7]">Chi Nei Tsang</span> est un massage profond du ventre, qui permet de prendre conscience des tensions physiques nichées dans 
          l’abdomen et des charges émotionnelles qui leur sont liées. <br /><br />
          Il <span className="text-[#0a98a7]">détoxifie</span>  les organes interne et facilite leur fonctionnement.<br /> Il allège les tensions et facilite l’élimination. 
          </motion.p>
          <motion.p 
          className='max-w-lg pb-4'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.1,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
          Le Chi Nei Tsang est une approche viscérale et holistique.<br /><br /> Ce massage à la fois très doux mais également profond et 
          dynamique,<br /> va aider les organes internes du corps à fonctionner plus facilement.<br /><br /> Mais il va également permettre de se 
          <span className="text-[#0a98a7]"> reconnecter à son corps</span>, de dénouer tensions et douleurs périphériques, de retrouver vitalité et bien-être. <br />
          Il permet d’agir à la fois sur le plan physique mais également de libérer les <span className="text-[#0a98a7]">tensions émotionnelles.</span>  
          </motion.p>
          <motion.p 
          className='max-w-lg'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
          La séance va commencer par un moment de détente, de respiration afin de détendre le ventre et le préparer à recevoir 
          le massage.<br /> Elle se poursuit sur le ventre avec de l’huile. 
          </motion.p>
        </div>
        <div className="flex justify-center items-center px-8">
          <Carousel className="max-w-[400px] pt-12 lg:pt-[7rem]">
            <CarouselContent>
              {/* <CarouselItem>
              <Image
                src="/image/ChiNeiTsang/chineitsang1.jpeg"
                width={500}
                height={200}
                alt="image"
                className="object-cover rounded-xl"
              />
              </CarouselItem> */}
              <CarouselItem>
              <Image
                src="/image/ChiNeiTsang/chineitsang2.jpeg"
                width={500}
                height={200}
                alt="image"
                className="object-cover rounded-xl"
              />
              </CarouselItem>
              <CarouselItem>
              <Image
                src="/image/ChiNeiTsang/chineitsang3.jpeg"
                width={500}
                height={200}
                alt="image"
                className="object-cover rounded-xl"
              />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}