import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
export const Pop = ({ className, animateOn, children }) => {
  const controls = useAnimation()
  useEffect (() => {    
    controls.start({
      scale: [1.3, 1],
      transition: { type: "spring", stiffness: 400, damping: 10, duration: 0.5 }
    });

  }, [animateOn])

  return (
    <motion.div 
    animate={controls}
    className={className}>
      {children}
    </motion.div>
  )

}