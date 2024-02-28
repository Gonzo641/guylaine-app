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



export default function ShiatsuPage() {
  return (
    <section className='py-12'>
      {/* <Image
        src="/image/Shiatsu/shiatsu1.jpeg"
        fill
        alt="image"
        className="-z-10 object-cover"
      /> */}
      <PolygonBackground />
      <div className='container flex flex-col xl:flex-row sm:space-x-12'>
        <div>
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
            LE SHIATSU
          </motion.h1>
          <motion.p 
          className='max-w-3xl pb-4'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
          <span className="font-bold">Littéralement, « Shiatsu » signifie « pression des doigts ».</span>
          <br /><br /> C’est un art traditionnel japonais 
          (fondé sur les principes de la médecine orientale) qui a une action préventive sur la santé et le bien-être, qui harmonise 
          et revitalise le corps.<br /><br /> Il détend corps et esprit et procure un calme tonique. Véritable anti-stress, le Shiatsu libère 
          les tensions.
          </motion.p>
          <motion.p 
          className='max-w-2xl pb-4'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
          C’est une technique simple et puissante dont l’objectif est de rendre à l’organisme, grâce à un travail
          de pressions stables et précises (effectuées avec les mains, les pouces, les doigts) le long des méridiens, 
          toute sa vitalité et toute sa capacité d’auto-guérison.<br /><br /> Ainsi, il permet d'agir sur le plan physiologique et sur 
          le plan émotionnel. Il est excellent pour lutter contre toutes les causes du stress, contre les douleurs, troubles, 
          états d’épuisement physique ou émotionnel…
          </motion.p>
          <motion.p 
          className='max-w-lg pb-4'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.4,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
          Le Shiatsu favorise la relaxation profonde, calme l'esprit et permet ainsi la reconnexion à soi-même.
          </motion.p>
          <motion.p 
          className='max-w-lg'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.6,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
          Il se pratique, traditionnellement, sur les vêtements, en position couchée ou assise (sur un futon).
          </motion.p>
        </div>
        <div className="flex justify-center items-center px-8">
          <Carousel className="max-w-[400px] pt-12">
            <CarouselContent>
              <CarouselItem>
              <Image
                src="/image/Shiatsu/shiatsu1.jpeg"
                width={500}
                height={200}
                alt="image"
                className="object-cover rounded-xl"
              />
              </CarouselItem>
              <CarouselItem>
              <Image
                src="/image/Shiatsu/shiatsu2.jpeg"
                width={500}
                height={200}
                alt="image"
                className="object-cover rounded-xl"
              />
              </CarouselItem>
              <CarouselItem>
              <Image
                src="/image/Shiatsu/shiatsu3.jpeg"
                width={500}
                height={200}
                alt="image"
                className="object-cover rounded-xl"
              />
              </CarouselItem>
              <CarouselItem>
              <Image
                src="/image/Shiatsu/shiatsu4.jpeg"
                width={500}
                height={200}
                alt="image"
                className="object-cover rounded-xl"
              />
              </CarouselItem>
              <CarouselItem>
              <Image
                src="/image/Shiatsu/shiatsu5.jpeg"
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