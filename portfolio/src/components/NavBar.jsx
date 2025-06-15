import logo from "../assets/assets/projects/hacker.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-1 w-10" src={logo} alt="logo"></img>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
          whileHover={{ scale: 1.5 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: "easeInOut",
          }}
          href="https://www.linkedin.com/in/mohammad-arif-shaik-232289190/"
          target="_blank"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: "easeInOut",
          }}
          href="https://github.com/dashboard"
          target="_blank"
        >
          <FaGithub />
        </motion.a>
        {/* <motion.a
          whileHover={{ scale: 1.5 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: "easeInOut",
          }}
          href="https://github.com/arifsgit786"
          target="_blank"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: "easeInOut",
          }}
          href="https://www.linkedin.com/in/mohammad-arif-shaik-932214285/"
          target="_blank"
        >
          <FaSquareXTwitter />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.5 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: "easeInOut",
          }}
          href="https://www.linkedin.com/in/mohammad-arif-shaik-932214285/"
          target="_blank"
        >
          <FaInstagram />
        </motion.a> */}
      </div>
    </nav>
  );
};

export default NavBar;
