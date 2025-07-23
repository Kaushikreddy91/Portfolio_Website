import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kaushik_profile3.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-25">
            <div className="flex flex-wrap px-4">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Kaushik Reddy</motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-1 max-w-xl py-3 font-light tracking-tighter">
                        <a
                            href="https://drive.google.com/file/d/1LdmpclLggSxBLkCTjAj3LvPd5xDjrXfl/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[16px] px-5 py-3 font-medium rounded-md border border-neutral-700 bg-white text-neutral-700 transition-colors duration-300 hover:bg-black hover:text-white"
                        >
                            Resume
                        </a></motion.p>
                    </div>
                </div>
                <div className="w-full py-5 lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            className="w-110 h-110 object-cover rounded-full"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic} alt="profilepic" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
