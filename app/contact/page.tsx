"use client";

import Image from "next/image";
import { motion } from 'framer-motion'
import PolygonBackground from "@/components/PolygonBackground";


export default function ContactPage() {
  return (
    <section className='py-12'>
      {/* <Image
        src="/image/Shiatsu/shiatsu2.jpeg"
        fill
        alt="image"
        className="-z-10 object-cover"
      /> */}
      <PolygonBackground />
      <div className='container'>
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
          Contact
        </motion.h1>
        <motion.p 
        className='max-w-lg pb-4 text-white'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
          Formulaire contact
        </motion.p>
        <motion.p 
        className='max-w-lg text-white'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
          Actualité et liens (insta/fb) 
        </motion.p>
      </div>
    </section>
  )
}