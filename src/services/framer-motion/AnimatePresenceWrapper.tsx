'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export const AnimatePresenceWrapper = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div key={path}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
          exit={{ opacity: 0 }}
          style={{ opacity: 0, display: 'flex' }}
        >
          {children}
        </motion.div>
        <motion.div
          className="fixed top-0 left-0 bottom-0 right-0 w-full h-dvh bg-[#c9c3b4] dark:bg-[#111111]"
          initial={{ scaleX: 1, originX: 'right' }}
          animate={{ scaleX: 0, transition: { duration: 0.75, ease: 'circOut' } }}
          exit={{ scaleX: 1, originX: 'left', transition: { duration: 0.75, ease: 'circIn' } }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
