// "use client";

// import Image from "next/image";
// import { motion } from 'framer-motion'
// import PolygonBackground from "@/components/PolygonBackground";



// export default function CommentCaSePassePage() {
//   return (
//     <section className='py-12'>
//       {/* <Image
//         src="/image/ReflexologieCraintFacial/craintfacial3.jpeg"
//         fill
//         alt="image"
//         className="-z-10 object-cover"
//       /> */}
//       <PolygonBackground />
//       <div className='container'>
//         <motion.h1 
//           className='mb-12 text-6xl font-bold text-white'
//           initial={{ opacity: 0, y: 100}}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 0.8,
//             delay: 0.7,
//             ease: [0, 0.71, 0.2, 1.01]
//           }}
//         >
//           COMMENT ÇA SE PASSE ?
//         </motion.h1>
//         <motion.p 
//         className=' pb-4 text-white'
//         initial={{ opacity: 0, y: 100}}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           duration: 0.8,
//           delay: 0.9,
//           ease: [0, 0.71, 0.2, 1.01]
//         }}
//         >
//         Contactez-moi et je répondrai à toutes les interrogations que vous pourriez avoir et nous pourrons 
//         convenir ensemble d’un rendez-vous pour le soin que vous souhaitez. 
//         </motion.p>
//         <motion.p 
//         className='max-w-lg pb-4 text-white'
//         initial={{ opacity: 0, y: 100}}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           duration: 0.8,
//           delay: 1.1,
//           ease: [0, 0.71, 0.2, 1.01]
//         }}
//         >
//         Je peux vous recevoir chez moi ou me déplacer à votre domicile.
//         </motion.p>
//         <motion.p 
//         className='max-w-lg pb-4 text-white'
//         initial={{ opacity: 0, y: 100}}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           duration: 0.8,
//           delay: 1.3,
//           ease: [0, 0.71, 0.2, 1.01]
//         }}
//         >
//         Les tarifs des soins (quels qu’ils soient) sont les suivants: <br />
//         Soin 60 minutes	60€<br />
//         Soin 90 minutes	90€<br /><br />
//         Réflexologie uniquement<br /> 	
//         30 minutes		30€<br />
//         45 minutes		45€
//         </motion.p>
//         <motion.p 
//         className='max-w-lg pb-4 text-white'
//         initial={{ opacity: 0, y: 100}}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           duration: 0.8,
//           delay: 1.5,
//           ease: [0, 0.71, 0.2, 1.01]
//         }}
//         >
//         Pour une prise en charge suivie et régulière, un résultat profond et durable, je vous propose des cartes:<br />
//         3 soins de 60 minutes 		160€<br />
//         3 soins de 90 minutes		240€<br /><br />
//         Réflexologie uniquement <br />
//         3 soins de 30 minutes		80€<br />
//         3 soins de 45 minutes		120€
//         </motion.p>
//         <motion.p 
//         className='max-w-lg pb-4 text-white'
//         initial={{ opacity: 0, y: 100}}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           duration: 0.8,
//           delay: 1.7,
//           ease: [0, 0.71, 0.2, 1.01]
//         }}
//         >
//         Comptez un supplément de 5€ pour un déplacement à domicile.  
//         </motion.p>
//       </div>
//     </section>
//   )
// }


"use client";

import Image from "next/image";
import { motion } from 'framer-motion'
import PolygonBackground from "@/components/PolygonBackground";
import TarifCard from "@/components/TarifCard";
import Link from "next/link";



export default function CommentCaSePassePage() {
  return (
    <section className='py-12'>
      {/* <Image
        src="/image/ReflexologieCraintFacial/craintfacial3.jpeg"
        fill
        alt="image"
        className="-z-10 object-cover"
      /> */}
      <PolygonBackground />
      <div className='flex flex-col justify-center items-center mx-8'>
        {/* <motion.h1 
          className='mb-12 text-4xl sm:text-6xl font-bold text-center bg-gradient-to-r 
                  from-[#0a98a7] via-[#0bada0] to-[#8df6fa] text-transparent bg-clip-text'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          COMMENT ÇA SE PASSE ?
        </motion.h1> */}
        <motion.p 
          className='pb-4 text-center font-semibold text-xl'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          Contactez-moi et je répondrai à toutes les interrogations que vous pourriez avoir.
        </motion.p>
        <motion.p 
          className='pb-4 text-center font-semibold'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.1,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          Nous pourrons convenir ensemble d’un rendez-vous pour le soin que vous souhaitez. 
        </motion.p>
        <motion.p 
          className='max-w-lg pb-12 text-center font-semibold'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
        Je peux vous recevoir chez moi ou me déplacer à votre domicile.
        </motion.p>

        <TarifCard />

        {/* <motion.p 
          className='max-w-lg pt-4 text-center font-semibold'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.7,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          Des Cartes Cadeaux sont disponible {" "}
          <Link href="image/bon-cadeau.jpeg" className="text-[#09ba9d] hover:text-[#0a98a7]">
            ici
          </Link> .
          <br /> À vous de choisir le montant / 
          la durée du soin que vous souhaitez offrir et je me charge du reste.   
        </motion.p> */}
        {/* <motion.div className="w-96 h-[34rem] mt-6"
                    initial={{ opacity: 0, y: 100}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.9,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
        >
          <Link href="image/bon-cadeau.jpeg">
            <img 
              src="/image/bon-cadeau.jpeg" 
              alt="image"
              className="w-96 h-[34rem] rounded-xl object-cover"
            />
          </Link>
        </motion.div> */}

        <motion.p 
          className='max-w-lg text-xs pt-10 text-center font-semibold'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
        Comptez un supplément de 5€ pour un déplacement à domicile.  
        </motion.p>
      </div>
    </section>
  )
}