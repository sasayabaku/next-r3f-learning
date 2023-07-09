"use client"

import React, { useRef, useEffect } from "react"
import { motion, useTransform, useScroll, useMotionValueEvent } from "framer-motion"
// import "../style.css"

export default function Page() {
  const ref = useRef()
  const { scrollY, scrollYProgress } = useScroll({ target: ref })

  return (
    <>
      <h2>framer motion animation test</h2>
      <motion.div
        style={{ width: "100px", height: "100px", y: "104vh", x: 50, background: "cyan" }}
        variants={{
          offscreen: {
            opacity: 0,
          },
          onscreen: {
            opacity: 1,
            transition: {
              duration: 1.5,
            },
          },
        }}
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: false }}
        ref={ref}
      >
        <h1>Start</h1>
      </motion.div>
    </>
  )
}
