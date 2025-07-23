import React from 'react';
import { motion } from "framer-motion";
import { FaJava } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import { FaAngular } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { FaAws } from "react-icons/fa";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Technologies</motion.h1>
            <motion.div whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -150 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
                    role="img"
                    aria-label="Java logo"
                >
                    <FaJava className="text-7xl text-blue-400" />
                    <span className="mt-2 text-lg font-semibold  text-blue-400">Java</span>
                </motion.div>
                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSpringboot className="text-7xl text-green-400" />
                    <span className="mt-2 text-lg font-semibold  text-green-400">Spring Boot</span>
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
                    <FaAws className="text-7xl" />
                    <span className="mt-2 text-lg font-semibold ">AWS</span>
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                    <span className="mt-2 text-lg font-semibold  text-cyan-400">React</span>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-400" />
                    <span className="mt-2 text-lg font-semibold  text-green-400">Node.Js</span>
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
                    <FaAngular className="text-7xl text-red-400" />
                    <span className="mt-2 text-lg font-semibold  text-red-400">Angular</span>
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className="text-7xl text-cyan-400" />
                    <span className="mt-2 text-lg font-semibold  text-cyan-400">MySQL</span>
                </motion.div>
            </motion.div>
        </div>
    )
}
export default Technologies
