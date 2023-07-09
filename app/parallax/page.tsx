"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion, useTransform, useScroll, useMotionValueEvent } from "framer-motion"
import "./style.css"

export default function Page() {
  const ref = useRef()
  const { scrollY, scrollYProgress } = useScroll()

  const [visible, setVisible] = useState(
    <Landing
      local_onClick={() => {
        sw_profile()
      }}
    />,
  )

  const sw_profile = () => {
    setVisible(<Profile />)
  }

  // useEffect(() => {
  //   console.log("visibleが変更されました")
  // }, [visible.current])

  return (
    <>
      {/* 背景画像 */}
      <div id='bg_image'></div>

      <div className='container'>
        {/* {visible} */}
        <Profile />
      </div>
    </>
  )
}

const Landing = (props) => {
  const { local_onClick } = props

  return (
    <>
      {/* ランディングタイトル */}
      <LandingTitle />

      {/* 関連リンク */}
      <OutLinks />

      {/* Enter the entrance */}
      <EnterButton
        local_onClick={() => {
          local_onClick()
        }}
      />
    </>
  )
}

const LandingTitle = () => {
  return (
    <motion.div
      style={{ width: "100%", y: "30vh", display: "flex", justifyContent: "center" }}
      variants={{
        offscreen: {
          opacity: 0,
          paddingTop: "60px",
        },
        onscreen: {
          opacity: 1,
          paddingTop: "0px",
          transition: {
            duration: 2,
            ease: "easeInOut",
          },
        },
      }}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: false }}
    >
      <div className='title'>
        <h1>SAUL LEITER</h1>
        <h2>Origins in Color</h2>
        <h3>ソールライターの原点　ニューヨークの色</h3>
      </div>
    </motion.div>
  )
}

const OutLinks = () => {
  return (
    <motion.div
      style={{ width: "100%", y: "30vh", display: "flex", justifyContent: "center", color: "white" }}
      variants={{
        offscreen: {
          opacity: 0,
          paddingLeft: "60px",
        },
        onscreen: {
          opacity: 1,
          paddingLeft: "0px",
          transition: {
            delay: 2,
            duration: 2,
            ease: "easeInOut",
          },
        },
      }}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: false }}
    >
      <div className='links'>
        <div>
          <a href='#'>DOORへ　→</a>
        </div>
        <div>
          <a href='#'>展覧会公式サイト　→</a>
        </div>
      </div>
    </motion.div>
  )
}

const EnterButton = (props) => {
  const { local_onClick } = props

  return (
    <motion.div
      style={{ width: "100%", y: "40vh", display: "flex", justifyContent: "center", color: "white" }}
      variants={{
        offscreen: {
          opacity: 0,
        },
        onscreen: {
          opacity: 1,
          transition: {
            delay: 4,
            duration: 1,
            ease: "easeInOut",
          },
        },
      }}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: false }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
          lineHeight: "200px",
          borderRadius: "50%",
          border: "2px solid white",
          display: "flex",
          justifyContent: "center",
        }}
        onClick={() => {
          local_onClick()
        }}
      >
        <div>ENTER THE ENTRANCE</div>
      </div>
    </motion.div>
  )
}

const Profile = () => {
  return (
    <>
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#000000aa",
        }}
        variants={{
          offscreen: {
            opacity: 0,
          },
          onscreen: {
            opacity: 1,
            transition: {
              duration: 2,
              ease: "easeInOut",
            },
          },
        }}
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true }}
      >
        <div className='title local-white'>
          <h1>About</h1>
          <h1>SAUL LEITER</h1>
        </div>
      </motion.div>
    </>
  )
}
