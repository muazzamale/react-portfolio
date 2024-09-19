// import { HERO_CONTENT } from "../constants";
// import profilePic from "../assets/muazzamaliprofile.jpg"
// const Hero = () => {
//   return (
//    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
//     <div className="flex flex-wrap">
//         <div className="w-full lg:w1/2">
        // <div className="felx flex-col items-center lg:items-start">
        //     <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 
        //     lg:text-8xl">Kevin Rush</h1>
        //     <span className="bg-gradient-to-r from-pink-300 via-slate-500
        //     to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
        //         Full Stack Developer
        //     </span>
        //     <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
        //         {HERO_CONTENT}
        //     </p>
        //     <div className="flex justify-center">
        //     <img src={profilePic} alt="Kevin Rush" />
        // </div>
//         </div>
//         </div>
//         <div className="w-full lg:w-1/2 lg:p-8">
//         {/* <div className="flex justify-center">
//             <img src={profilePic} alt="Kevin Rush" />
//         </div> */}
//         </div>
//     </div>
//    </div>
//   );
// };

// export default Hero

import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/muazzamaliprofile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x:0,
        opacity:1,
        transition: { duration: 0.5, delay: delay  },
    }

})


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-14">
                <div className="felx flex-col items-center lg:items-start">
            <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"

             className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 
            lg:text-8xl">
                Muazzam Ali
            </motion.h1>
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
             className="bg-gradient-to-r from-pink-300 via-slate-500
            to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                Full Stack Developer
            </motion.span>
          
       
        </div>


        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
          
            </div>
            <div className="w-full ">
            <div className="flex justify-center lg:justify-start w-full">
                <motion.p 
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl ">
                    {HERO_CONTENT}
                </motion.p>
                <motion.img
                initial={{ x:100, opacity:0 }}
                animate={{ x:0, opacity:1 }}
                transition={{duration: 1, delay:1.2}}
                 className="rounded-2xl lg:w-70 ml-10 h-88" src={profilePic} alt="about" />

            </div>
          
            </div>
        </div>
    </div>
  )
}

export default Hero
