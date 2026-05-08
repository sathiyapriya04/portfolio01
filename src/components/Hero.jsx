import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = ({ setActiveSection }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const techVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(147, 51, 234, 0.3)",
        "0 0 60px rgba(147, 51, 234, 0.3)",
        "0 0 20px rgba(147, 51, 234, 0.3)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center py-20 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #1a0533 40%, #0d1b4b 70%, #0f0c29 100%)' }}>
      {/* Glitter Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Sparkle Grid */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(167, 71, 254, 0.25) 0.5px, transparent 0.5px),
              radial-gradient(circle at 50% 70%, rgba(212, 132, 255, 0.2) 0.5px, transparent 0.5px),
              radial-gradient(circle at 90% 30%, rgba(236, 180, 254, 0.18) 0.5px, transparent 0.5px)
            `,
            backgroundSize: '120px 120px, 100px 100px, 80px 80px',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        
        {/* Animated Sparkles */}
        {[...Array(30)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-purple-300/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0], rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-fuchsia-600/30 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 50, 0], rotate: [360, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/25 to-purple-600/25 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, 80, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-3/4 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/15 to-blue-600/15 rounded-full filter blur-3xl"
        />
        
        {/* Shimmering Overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(147, 51, 234, 0.05) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '200% 200%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 backdrop-blur-sm">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-left"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block px-4 py-2 bg-purple-500/30 backdrop-blur-sm text-purple-200 rounded-full text-sm font-medium font-mono border border-purple-400/50 cursor-pointer shadow-lg shadow-purple-500/20"
              >
                Welcome to my portfolio
              </motion.span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-display font-bold mb-6 relative"
            >
              <span className="text-white">Hi, I'm </span>
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400 inline-block"
                animate={{
                  textShadow: [
                    "0 0 30px rgba(167, 71, 254, 0.8)",
                    "0 0 80px rgba(236, 72, 153, 0.7)",
                    "0 0 30px rgba(167, 71, 254, 0.8)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Sathiya Priya
              </motion.span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-display font-semibold mb-6 text-white/90"
            >
              A passionate full-stack developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 font-sans"
            >
              I'm experienced in building responsive and user-friendly applications using technologies like React, Node.js, MongoDB, and Flutter. I love turning ideas into real-world applications, learning new technologies, and solving logical problems.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="relative px-8 py-3 bg-purple-600 text-white font-medium rounded-lg transition-all duration-300 font-sans overflow-hidden group"
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ opacity: 0.5 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-purple-500 text-purple-300 font-medium rounded-lg hover:bg-purple-600/10 transition-all duration-300 font-sans"
              >
                Contact Me
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(236, 72, 153, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1OX_Xxfv9T0jjo0iNOseniCWw6F2BdrNn/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-medium rounded-lg transition-all duration-300 font-sans flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                My Resume
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4"
            >
              <span className="text-purple-300 font-medium font-sans">Connect with me:</span>
              <div className="flex space-x-3">
                {[
                  { name: "GitHub", href: "https://github.com/sathiyapriya04", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> },
                  { name: "LinkedIn", href: "https://linkedin.com/in/sathiya-priya-p-06092a328", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
                  { name: "Portfolio", href: "https://portfolio01-theta-three.vercel.app/", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg> },
                ].map(({ name, href, icon }, index) => (
                  <motion.a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={name === "Portfolio" ? "Sathiya Priya Portfolio" : name}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
                    }}
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-8 h-8 bg-purple-600/20 rounded-full border border-purple-500/30 flex items-center justify-center cursor-pointer text-purple-300 hover:text-white transition-colors"
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>

            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <motion.div
              className="relative z-10"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.01}deg) rotateX(${-mousePosition.y * 0.01}deg)`,
              }}
            >
              <motion.div
                variants={glowVariants}
                animate="animate"
                className="w-[32rem] h-[32rem] bg-gradient-to-br from-purple-700/40 to-fuchsia-700/40 shadow-2xl overflow-hidden backdrop-blur-sm border border-purple-400/40 relative rounded-full"
                style={{ boxShadow: '0 0 60px rgba(147,51,234,0.4), inset 0 0 60px rgba(147,51,234,0.1)' }}
              >
                {/* Circular Gradient Border */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.2), transparent)",
                    transform: "translateX(-100%)"
                  }}
                  animate={{
                    transform: ["translateX(-100%)", "translateX(100%)"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                
                <div className="absolute inset-0 bg-black/10 rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-white text-center p-8"
                  >
                    <motion.div className="relative inline-block">
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 rounded-full blur-xl"
                      />
                      <h3 className="relative text-4xl font-bold mb-4 font-display">
                        <motion.span
                          animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-400 bg-300% bg-clip-text text-transparent"
                        >
                          Digital Innovator
                        </motion.span>
                      </h3>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="text-lg font-sans text-white/80"
                    >
                      Crafting <motion.span
                        animate={{
                          color: ["#c084fc", "#e879f9", "#c084fc"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="font-semibold"
                      >
                        digital experiences
                      </motion.span>{" "}
                      that inspire
                    </motion.p>
                    <motion.div
                      className="mt-6 flex justify-center space-x-4"
                    >
                      {["", "", ""].map((emoji, index) => (
                        <motion.span
                          key={index}
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                            ease: "easeInOut",
                          }}
                          className="text-2xl filter drop-shadow-lg"
                        >
                          {emoji}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-6 -right-6 w-32 h-16 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 rounded-t-full shadow-lg z-0 border border-purple-500/20"
            />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [360, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-6 -left-6 w-24 h-12 bg-gradient-to-r from-fuchsia-600/20 to-purple-600/20 rounded-b-full shadow-lg z-0 border border-purple-500/20"
            />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <motion.h3 
            className="text-xl font-semibold text-purple-300 mb-6 text-center font-display"
            animate={{
              textShadow: [
                "0 0 10px rgba(147, 51, 234, 0.3)",
                "0 0 20px rgba(147, 51, 234, 0.3)",
                "0 0 10px rgba(147, 51, 234, 0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Technologies I work with
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {["React", "Node.js", "TypeScript", "Tailwind CSS"].map((tech, index) => (
              <motion.div
                key={tech}
                variants={techVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(147, 51, 234, 0.4)",
                }}
                className="group p-4 bg-purple-600/10 backdrop-blur-sm rounded-lg text-center shadow-md border border-purple-500/20 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ opacity: 0 }}
                  whileHover={{ opacity: 0.5 }}
                />
                <span className="relative z-10 text-purple-300 font-medium font-mono group-hover:text-white transition-colors duration-300">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
