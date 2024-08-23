'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export const OnTopButton = () => {
  const [pageYPosition, setPageYPosition] = useState<number>(0)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setPageYPosition(window.scrollY)
    })
  }, [])

  return (
    <AnimatePresence>
      {pageYPosition > 650 && (
        <motion.button
          className="w-12 sm:w-14 h-12 sm:h-14 p-3 border border-light dark:border-dark bg-dark dark:bg-light rounded-xl fixed bottom-16 sm:bottom-5 right-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75 }}
          onClick={() => {
            window.scroll({ top: 0 })
          }}
        >
          <svg width="100%" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-light dark:fill-dark" d="M15 0.5L0 25.5H30L15 0.5Z" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
