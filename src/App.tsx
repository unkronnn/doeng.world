import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Sword, 
  BookOpen, 
  Globe, 
  Compass,
  Youtube,
  Instagram,
  ShoppingBag
} from 'lucide-react';

function App() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=2574&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div 
          className="w-full max-w-md space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo & Title Section */}
          <motion.div 
            className="text-center space-y-3"
            variants={itemVariants}
          >
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-wider text-white drop-shadow-2xl"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              DOENG WORLD
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-gold tracking-widest uppercase drop-shadow-lg">
              Minecraft RPG Adventure
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="space-y-3 sm:space-y-4"
            variants={itemVariants}
          >
            {/* Discord Button */}
            <motion.a
              href="https://discord.gg/yourserver"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-discord/90 backdrop-blur-md border border-discord/50 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(88,101,242,0.6)] hover:bg-discord overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <MessageCircle className="w-6 h-6" />
              <span>Join Our Discord</span>
            </motion.a>

            {/* Play Now Button */}
            <motion.a
              href="#play"
              className="group relative flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-minecraft/90 backdrop-blur-md border border-minecraft/50 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(76,175,80,0.6)] hover:bg-minecraft overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Sword className="w-6 h-6" />
              <span>Play Now</span>
            </motion.a>

            {/* Button Row - Get Started & Wiki */}
            <div className="grid grid-cols-2 gap-3">
              <motion.a
                href="#guide"
                className="group relative flex items-center justify-center gap-2 px-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-base transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <BookOpen className="w-5 h-5" />
                <span className="hidden sm:inline">Get Started</span>
                <span className="sm:hidden">Start</span>
              </motion.a>

              <motion.a
                href="#wiki"
                className="group relative flex items-center justify-center gap-2 px-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-base transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Globe className="w-5 h-5" />
                <span className="hidden sm:inline">Wiki & Forums</span>
                <span className="sm:hidden">Wiki</span>
              </motion.a>
            </div>

            {/* Server Guidance Button */}
            <motion.a
              href="#guidance"
              className="group relative flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-gray-900/80 backdrop-blur-md border border-gray-700/50 text-white font-medium text-lg transition-all duration-300 hover:scale-105 hover:bg-gray-800/90 hover:border-gray-600/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Compass className="w-6 h-6" />
              <span>Server Guidance</span>
            </motion.a>
          </motion.div>

          {/* Social Icons & Footer */}
          <motion.div 
            className="space-y-6 pt-4"
            variants={itemVariants}
          >
            {/* Social Icons Row */}
            <div className="flex items-center justify-center gap-4">
              <motion.a
                href="https://youtube.com/@yourserver"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:scale-110 hover:bg-red-600 hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Youtube className="w-6 h-6" />
              </motion.a>

              <motion.a
                href="https://instagram.com/yourserver"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-6 h-6" />
              </motion.a>

              <motion.a
                href="#store"
                className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:scale-110 hover:bg-gold hover:border-gold hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:text-gray-900"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingBag className="w-6 h-6" />
              </motion.a>
            </div>

            {/* Copyright Text */}
            <p className="text-center text-xs sm:text-sm text-gray-400/80">
              © 2026 Doeng World. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
