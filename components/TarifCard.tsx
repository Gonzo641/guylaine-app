"use client";

import { motion } from 'framer-motion'
import Link from 'next/link';

const TarifCard = () => {
  return (
    <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">

        <motion.div className="flex flex-col justify-between rounded-3xl bg-gradient-to-r 
                            from-[#0a98a7] to-[#0bada0] p-8 
                        shadow-xl ring-1 ring-gray-900/10 sm:p-10 z-50"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.7,
                        ease: [0, 0.71, 0.2, 1.01]
                      }}
        >
            <h3 className="text-base font-bold text-white">
            Les tarifs des soins sont les suivants :
            </h3>
            <ul className="mt-2 space-y-2 text-md dark:text-black">
                <li>
                Soin 60 minutes	<span className="text-white font-bold">60€</span>
                </li>
                <li>
                Soin 90 minutes	<span className="text-white font-bold">90€</span>
                </li>
                </ul>
                <span className="pt-4 font-bold text-white">
                Réflexologie uniquement :
                </span>
                <ul className="mt-2 space-y-2 text-md dark:text-black">
                <li>
                30 minutes <span className="text-white font-bold">30€</span>
                </li>
                <li>
                45 minutes <span className="text-white font-bold">45€</span>
                </li>
            </ul>
        </motion.div>

        <motion.div className="flex flex-col justify-between rounded-3xl bg-gradient-to-r 
                            from-[#0a98a7] to-[#0bada0] p-8 
                        shadow-xl ring-1 ring-gray-900/10 sm:p-10 z-50"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.9,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
        >
            <h3 className="text-base font-bold text-white">
                Pour une prise en charge suivie et régulière, un résultat profond et durable, je vous propose des cartes :
            </h3>
            <ul className="mt-4 space-y-2 text-md dark:text-black">
                <li>
                3 soins de 60 minutes	<span className="text-white font-bold">160€</span>
                </li>
                <li>
                3 soins de 90 minutes	<span className="text-white font-bold">240€</span>
                </li>
            </ul>
            <span className="pt-4 font-bold text-white">
            Réflexologie uniquement :
            </span>
            <ul className="mt-2 space-y-2 text-md dark:text-black">
                <li>
                3 soins de 30 minutes <span className="text-white font-bold">80€</span>
                </li>
                <li>
                3 soins de 45 minutes <span className="text-white font-bold">120€</span>
                </li>
            </ul>
        </motion.div>

        <motion.div className="flex flex-col justify-between rounded-3xl bg-gradient-to-r 
                            from-[#0a98a7] to-[#0bada0] p-8 
                              shadow-xl ring-1 ring-gray-900/10 sm:p-10 z-50"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 1,
                delay: 1.1,
                ease: [0, 0.71, 0.2, 1.01]
              }}
        >
          <p className='max-w-lg pt-4 text-center font-semibold'>
            Des Cartes Cadeaux sont disponible {" "}
          <Link href="image/bon-cadeau.jpeg" className="dark:text-black text-white hover:text-[#0a98a7]">
            ici
          </Link> .
          <br /> À vous de choisir le montant / 
          la durée du soin que vous souhaitez offrir et je me charge du reste.   
        </p>
        </motion.div>

        <motion.div className="flex flex-col justify-center items-center rounded-3xl bg-gradient-to-r 
                            from-[#0a98a7] to-[#0bada0] p-8 
                              shadow-xl ring-1 ring-gray-900/10 sm:p-10 z-50"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 1,
                delay: 1.3,
                ease: [0, 0.71, 0.2, 1.01]
              }}
        >
            <p className='max-w-lg pt-4 text-center font-semibold'>
                Le shiatsu et la réflexologie peuvent être pris en charge par certaines mutuelles.
            </p>
        </motion.div>

    </div>
  )
}
export default TarifCard