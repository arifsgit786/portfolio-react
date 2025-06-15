import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoAngular } from "react-icons/bi";
import { BiLogoFirebase } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { motion } from "framer-motion";

const duratiionVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={duratiionVariant(2.5)}
          intial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={duratiionVariant(3)}
          intial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandReactNative className="text-7xl text-violet-700" />
        </motion.div>
        <motion.div
          variants={duratiionVariant(5)}
          intial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPostgresql className="text-7xl text-green-100" />
        </motion.div>
        <motion.div
          variants={duratiionVariant(2)}
          intial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiHtml5 className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          variants={duratiionVariant(6)}
          intial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={duratiionVariant(2.5)}
          intial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoAngular className="text-7xl text-yellow-700" />
        </motion.div>
        <motion.div
          variants={duratiionVariant(2.5)}
          intial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoCss3 className="text-7xl text-pink-700" />
        </motion.div>
        <motion.div
          variants={duratiionVariant(2.5)}
          intial="intial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoFirebase className="text-7xl text-sky-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
