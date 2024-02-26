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


export default function ChiNeiTsangPage() {
  return (
    <section className='py-12'>
      {/* <Image
        src="/image/ChiNeiTsang/chineitsang1.jpeg"
        fill
        alt="image"
        className="-z-10 object-cover"
      /> */}
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
            LE CHI NEI TSANG
          </motion.h1>
          <motion.p 
          className='max-w-3xl pb-4 text-white'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
          Le Chi Nei Tsang est un massage profond du ventre, qui permet de prendre conscience des tensions physiques nichées dans 
          l’abdomen et des charges émotionnelles qui leur sont liées. <br />
          Il détoxifie les organes interne et facilite leur fonctionnement. Il allège les tensions et facilite l’élimination. 
          </motion.p>
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
          Le Chi Nei Tsang est une approche viscérale et holistique.<br /><br /> Ce massage à la fois très doux mais également profond et 
          dynamique, va aider les organes internes du corps à fonctionner plus facilement.<br /><br /> Mais il va également permettre de se 
          reconnecter à son corps, de dénouer tensions et douleurs périphériques, de retrouver vitalité et bien-être. 
          Il permet d’agir à la fois sur le plan physique mais également de libérer les tensions émotionnelles. 
          </motion.p>
          <motion.p 
          className='max-w-lg text-white'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
          La séance va commencer par un moment de détente, de respiration afin de détendre le ventre et le préparer à recevoir 
          le massage. Elle se poursuit sur le ventre avec de l’huile. 
          </motion.p>
        </div>
        <div>
          <Carousel className="w-[400px]">
            <CarouselContent>
              <CarouselItem>
              <Image
                src="/image/ChiNeiTsang/chineitsang1.jpeg"
                width={500}
                height={200}
                alt="image"
                className="object-cover rounded-xl"
              />
              </CarouselItem>
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