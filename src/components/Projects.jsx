import { motion } from 'framer-motion';

const Projects = ({ setActiveSection }) => {
  const projects = [
    {
      title: "DIABETIC RETINOPATHY DETECTION SYSTEM",
      description: "AI-powered full-stack system for early diabetic retinopathy diagnosis. EfficientNet deep learning model with 95%+ accuracy, React + TypeScript frontend, Flask API backend, JWT auth, PostgreSQL, and automated email reports.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      tags: ["TensorFlow", "EfficientNet", "React", "TypeScript", "Flask", "PostgreSQL", "JWT"],
      github: "https://github.com/sathiyapriya04/diabetic-retinopathy-system",
      demo: "#",
      status: "completed"
    },
    {
      title: "SWEET SURPRISES — E-Commerce Platform",
      description: "A modern e-commerce platform for a gift shop, featuring product catalog, shopping cart, user authentication, and Razorpay payment integration. Deployed live on Vercel.",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "Redux", "Tailwind CSS", "MongoDB", "Node.js", "Express.js"],
      github: "https://github.com/Balajisix/swweet-surprises",
      demo: "https://swweet-surprises.vercel.app/",
      status: "completed"
    },
    {
      title: "MEDICOS — AI Medicine Reminder App",
      description: "Cross-platform AI-powered medicine reminder app with OCR prescription scanning, smart alerts, Firebase auth + Firestore, and ML-based reminder optimization.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
      tags: ["Flutter", "Firebase", "Dart", "ML"],
      github: "https://github.com/sathiyapriya04/MEDICOS",
      demo: "#",
      status: "ongoing"
    },
    {
      title: "INTERACTIVE QUIZ APPLICATION",
      description: "Responsive and interactive quiz web app with real-time feedback, dynamic question flow, and an engaging UI built with vanilla JavaScript.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/sathiyapriya04/quiz",
      demo: "#",
      status: "completed"
    },
  ];

  // Animation variants
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

  const imageVariants = {
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

  const tagVariants = {
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

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0a0b1e 0%, #130a2e 50%, #0a1040 100%)' }}>
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
            className="inline-block px-4 py-2 bg-purple-600/20 backdrop-blur-sm text-purple-300 rounded-full text-sm font-medium border border-purple-500/30 mb-4"
          >
            My Work
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 font-display"
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
              My Projects
            </motion.span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/80 max-w-3xl mx-auto font-sans"
          >
            Here are some of the projects I've worked on. Each one represents a unique challenge
            and learning experience.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-purple-500/20 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-400/30 shadow-xl shadow-purple-900/20 hover:shadow-purple-700/30 hover:border-purple-400/50 transition-all"
            >
              <motion.div 
                variants={imageVariants}
                className="relative h-64 overflow-hidden group"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14]/90 to-transparent" />
              </motion.div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-200 mb-2 font-display">{project.title}</h3>
                <p className="text-white/70 mb-4 font-sans">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={tagVariants}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(147, 51, 234, 0.3)",
                      }}
                      className="px-3 py-1 bg-purple-600/20 rounded-full text-sm text-purple-300 font-mono border border-purple-500/30"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <motion.span
                    variants={itemVariants}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'completed' 
                        ? 'bg-green-600/20 text-green-300 border border-green-500/30' 
                        : 'bg-yellow-600/20 text-yellow-300 border border-yellow-500/30'
                    }`}
                  >
                    {project.status === 'completed' ? 'Project Completed' : 'Ongoing Project'}
                  </motion.span>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-4 py-2 bg-purple-600/20 text-purple-300 rounded-lg border border-purple-500/30 hover:bg-purple-600/30 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
