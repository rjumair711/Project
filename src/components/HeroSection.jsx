import { motion } from "framer-motion";


const HeroSection = () => {
    return (

        <div
            style={{
                backgroundImage: "url('/assets/HeroBG.svg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "863px",
                width: "100%",
                position: "relative",
            }}
            className="flex justify-center items-start pt-[120px] px-6 gap-10"
        >
            <div className="flex justify-center items-center min-h-screen -mt-[30px]">
                <div className="text-center max-w-4xl">
                    <motion.h1
                        className="text-black font-bold font-satoshi w-full text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-tight mb-6 flex flex-wrap justify-center"
                        initial="hidden"
                        animate="visible"
                    >
                        {"Der Weg zum Führerschein".split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 1, rotateY: 90 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                transition={{
                                    type: "spring",
                                    duration: 0.4,
                                    bounce: 0.2,
                                    delay: 0.2 + index * 0.05, // initial 0.2 + per-character 0.05
                                }}
                                style={{ display: "inline-block" }}
                            >
                                {char === " " ? "\u00A0" : char} {/* preserve spaces */}
                            </motion.span>
                        ))}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}  // starting state: invisible, smaller, offset 50px
                        animate={{ opacity: 1, scale: 1, y: 0 }}    // final state: visible, normal size, original position
                        transition={{
                            type: "spring",   // spring animation
                            duration: 1,      // total animation time
                            bounce: 0.2,      // bounce effect
                            delay: 0.2,       // delay before starting
                        }}
                        className="text-[#3D3D3D] font-sans text-[24px] leading-relaxed mb-10 max-w-[750px] mx-auto"
                    >
                        Behalte jeden Schritt und deine Fortschritte immer im Blick, sowie Termine buchen und Nachrichten senden, alles aus einer Hand.
                    </motion.p>
                    <motion.a
                        initial={{ opacity: 0, scale: 0.5, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            duration: 0.2,
                            bounce: 0.2,
                            delay: 0.2,
                        }}
                        className="px-[16px] py-[8px] bg-[#4611F5] hover:bg-[#300CA8] cursor-pointer w-[178px] h-[46px] rounded-[10px] flex items-center justify-center mx-auto"
                    >
                        <p className="text-white text-[20px] font-satoshi whitespace-nowrap">
                            Kostenlos starten
                        </p>
                    </motion.a>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            duration: 0.6,
                            bounce: 0.2,
                            delay: 0.2,
                        }}
                        className="rounded-[15px] border border-white w-full max-w-[1280px] h-auto relative p-4 mt-20"
                    >
                        <img
                            className="w-full h-auto rounded-md"
                            src="/assets/HeroCoverImage.png"
                            alt="Hero Cover"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
