"use client";

// import Image from "next/image";
import { motion } from 'framer-motion'
import { toast } from "react-hot-toast";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

import PolygonBackground from "@/components/PolygonBackground";
import SubmitBtn from '@/components/SubmitBtn';
import { sendEmail } from '@/actions/sendEmail';


export default function ContactPage() {
  return (
    <section className='py-12 w[min(100%,38rem)]'>
      {/* <Image
        src="/image/Shiatsu/shiatsu2.jpeg"
        fill
        alt="image"
        className="-z-10 object-cover"
      /> */}
      <PolygonBackground />
      <div className='container'>
        {/* <motion.h1 
          className='mb-12 text-6xl font-bold bg-gradient-to-r from-[#0a98a7] 
                   via-[#0bada0] to-[#8df6fa] text-transparent bg-clip-text uppercase'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          Contact
        </motion.h1> */}

        <div className="flex justify-center pt-8">
          <motion.p 
          className='max-w-lg pb-4 text-center'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          >
            Merci de me contacter par e-mail à{" "} 
            <a className="underline" href="mailto:guylaineshiatsu@gmail.com">
              guylaineshiatsu@gmail.com
            </a>{" "}
            ou via ce formulaire :
          </motion.p>
        </div>

          <form 
              className="mt-10 flex flex-col dark:text-black lg:px-56 xl:px-96"
              action={async (formData) => {
                  const { data, error } = await sendEmail(formData);

                  if (error) {
                      toast.error(error);
                      return;
                  }

                  toast.success("Email envoyé !")
              }}    
          >
              <input 
                  className="h-14 px-4 rounded-lg border border-gray-500
                          dark:bg-white dark:bg-opacity-80
                            dark:focus:bg-opacity-100 transition-all
                            dark:outline-none"
                  name="senderEmail" 
                  type="email"
                  required
                  maxLength={500}
                  placeholder="Votre email" 
              />
              <textarea 
                  className="h-52 my-3 rounded-lg border border-gray-500 p-4
                          dark:bg-white dark:bg-opacity-80
                            dark:focus:bg-opacity-100 transition-all
                            dark:outline-none"
                  name="message"
                  placeholder="Votre message"
                  required
                  maxLength={5000} 
          />
          <SubmitBtn />
          </form>


        <motion.h3 
          className='max-w-lg text-3xl mt-12'
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          Actualité et liens :
        </motion.h3>
        <div className=''>
          <motion.p 
            className='max-w-lg mt-4 mb-2'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.4,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            Suivez moi sur Instagram et Facebook
          </motion.p>

          <motion.div 
              className='flex gap-2'
              initial={{ opacity: 0, y: 100}}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.6,
                ease: [0, 0.71, 0.2, 1.01]
              }}
          >
            <a 
              href="https://www.instagram.com" 
              target="_blank"
              className='text-xl hover:scale-[1.15] transition'
            >
            <FaInstagram />
            </a>
            <a 
              href="https://www.facebook.com" 
              target="_blank"
              className='text-xl hover:scale-[1.15] transition'
            >
            <FaFacebook />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}