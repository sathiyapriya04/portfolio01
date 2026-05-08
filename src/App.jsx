import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animation variants for page transitions
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #1a0533 40%, #0d1b4b 70%, #0f0c29 100%)' }}>
      {/* Global Glitter Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Bright Sparkle Grid */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(147, 51, 234, 0.3) 1.2px, transparent 1.2px),
              radial-gradient(circle at 50% 70%, rgba(192, 132, 252, 0.35) 1.2px, transparent 1.2px),
              radial-gradient(circle at 90% 30%, rgba(216, 180, 254, 0.3) 1.2px, transparent 1.2px),
              radial-gradient(circle at 30% 50%, rgba(147, 51, 234, 0.25) 2px, transparent 2px),
              radial-gradient(circle at 70% 90%, rgba(192, 132, 252, 0.25) 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px, 80px 80px, 70px 70px, 100px 100px, 120px 120px',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        
        {/* Bright Animated Sparkles */}
        {[...Array(60)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-gradient-to-br from-purple-300/60 to-fuchsia-300/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 200}%`,
              filter: "blur(0.5px) drop-shadow(0 0 2px rgba(147, 51, 234, 0.5))",
            }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 1, 0],
              top: [`${Math.random() * 200}%`, `${Math.random() * 100 - 100}%`],
            }}
            transition={{
              duration: 2.5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Bright Floating Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="fixed top-1/4 right-1/4 w-[45rem] h-[45rem] bg-gradient-to-r from-purple-500/25 to-fuchsia-500/25 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="fixed bottom-1/4 left-1/4 w-[50rem] h-[50rem] bg-gradient-to-r from-violet-500/25 to-purple-500/25 rounded-full filter blur-3xl"
        />
        
        {/* Enhanced Shimmering Overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, transparent 20%, rgba(147, 51, 234, 0.15) 40%, rgba(192, 132, 252, 0.15) 60%, transparent 80%)',
            backgroundSize: '250% 250%',
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

        {/* Additional Bright Stars */}
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={`star-${index}`}
            className="absolute w-3 h-3"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <div className="w-full h-full bg-purple-300/50 rounded-full blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-fuchsia-400/30 rounded-full transform rotate-45" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50"
              style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #1a0533 50%, #0d1b4b 100%)' }}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0" 
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(147, 51, 234, 0.07) 1px, transparent 0)',
                  backgroundSize: '40px 40px',
                }}
              />
              
              {/* Gradient Orbs */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-fuchsia-600/30 rounded-full filter blur-3xl"
              />
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
              }}
              transition={{ 
                delay: 0.2,
                duration: 0.8,
                ease: "easeOut"
              }}
              className="relative z-10 text-center"
            >
              <motion.div
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-400 bg-300% bg-clip-text text-transparent mb-4"
              >
                Welcome
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center justify-center space-x-2"
              >
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400 shadow-lg shadow-purple-500/50"
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative"
          >
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
            <main>
              <Hero setActiveSection={setActiveSection} />
              <About setActiveSection={setActiveSection} />
              <Projects setActiveSection={setActiveSection} />
              <Contact setActiveSection={setActiveSection} />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
