'use client'

import { motion } from 'framer-motion'

export default function Animate({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // exit={{ y: 100, opacity: 0 }}
      transition={{ ease: 'linear', duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}