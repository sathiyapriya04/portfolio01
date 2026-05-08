import { motion } from 'framer-motion';

const About = ({ setActiveSection }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const statsVariants = {
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

  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'MongoDB', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'Next.js', level: 85 },
    { name: 'GraphQL', level: 75 },
  ];

  const stats = [
    { label: 'Projects Completed', value: '5+' },
    { label: 'Technologies', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0d0a2e 0%, #160a2a 50%, #0a1535 100%)' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.07) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/25 to-fuchsia-600/25 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full filter blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-2 bg-purple-500/30 backdrop-blur-sm text-purple-200 rounded-full text-sm font-medium border border-purple-400/50 shadow-lg shadow-purple-500/20"
          >
            About Me
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-display font-bold mb-6 mt-4"
          >
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
              Sathiya Priya P • Full-Stack Explorer 🚀
            </motion.span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-sans leading-relaxed"
          >
            Hi! I'm <span className="text-purple-300 font-semibold">Sathiya Priya P</span> — a full-stack developer with a passion for crafting elegant frontends, architecting smooth backends, and solving real-world problems through code. My journey is fueled by curiosity, consistency, and a love for tech that makes a difference.
          </motion.p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 mt-12"
        >
          {/* Left Column: Stats */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={statsVariants}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-purple-500/20 backdrop-blur-sm rounded-xl border border-purple-400/30 shadow-lg shadow-purple-900/30"
                >
                  <motion.h3
                    animate={{
                      color: ["#c084fc", "#e879f9", "#c084fc"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-3xl font-bold mb-2"
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-purple-200/80">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Timeline or Additional Content */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-purple-500/20 backdrop-blur-sm rounded-xl border border-purple-400/30 shadow-lg shadow-purple-900/30"
            >
              <h3 className="text-2xl font-semibold text-purple-300 mb-4">My Journey</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-500 mr-4"></div>
                  <div>
                    <h4 className="text-white font-medium">Started Programming</h4>
                    <p className="text-purple-200/70">Discovered my passion for coding</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-500 mr-4"></div>
                  <div>
                    <h4 className="text-white font-medium">Full Stack Development</h4>
                    <p className="text-purple-200/70">Mastered both frontend and backend</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="p-6 bg-purple-600/10 backdrop-blur-sm rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-purple-300 mb-6">Skills & Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover="hover"
                    className="relative"
                  >
                  <div className="p-4 bg-purple-500/25 rounded-lg border border-purple-400/40 hover:border-purple-300/60 transition-colors">
                      <h4 className="text-white font-medium mb-2">{skill.name}</h4>
                      <div className="h-2 bg-purple-900/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Goals Section */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-purple-600/10 backdrop-blur-sm rounded-xl border border-purple-500/20"
            >
              <h3 className="text-2xl font-semibold text-purple-300 mb-4">Goals</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-white/80">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mr-2 text-purple-400"
                  >
                    ⭐
                  </motion.span>
                  Master new technologies and frameworks
                </li>
                <li className="flex items-center text-white/80">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="mr-2 text-purple-400"
                  >
                    ⭐
                  </motion.span>
                  Build impactful projects that solve real problems
                </li>
                <li className="flex items-center text-white/80">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="mr-2 text-purple-400"
                  >
                    ⭐
                  </motion.span>
                  Contribute to open-source communities
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
