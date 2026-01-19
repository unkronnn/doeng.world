import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  Sword, 
  BookOpen, 
  Globe, 
  Compass,
  Youtube,
  Instagram,
  ShoppingBag,
  Copy,
  X,
  Check,
  Laptop,
  Smartphone,
  Volume2,
  Package,
  Skull,
  ScrollText,
  Wheat,
  CookingPot,
  Mountain,
  Swords,
  Key,
  MapPin
} from 'lucide-react';
import { FeatureModal } from './components/FeatureModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isWikiOpen, setIsWikiOpen] = useState(false);
  const [isGuidanceOpen, setIsGuidanceOpen] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Handle copy to clipboard
  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };
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
          backgroundImage: `url('/bg-doeng-world.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
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
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="group relative flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-minecraft/90 backdrop-blur-md border border-minecraft/50 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(76,175,80,0.6)] hover:bg-minecraft overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Sword className="w-6 h-6" />
              <span>Play Now</span>
            </motion.button>

            {/* Button Row - Get Started & Wiki */}
            <div className="grid grid-cols-2 gap-3">
              <motion.button
                onClick={() => setIsGetStartedOpen(true)}
                className="group relative flex items-center justify-center gap-2 px-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-base transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <BookOpen className="w-5 h-5" />
                <span className="hidden sm:inline">Get Started</span>
                <span className="sm:hidden">Start</span>
              </motion.button>

              <motion.button
                onClick={() => setIsWikiOpen(true)}
                className="group relative flex items-center justify-center gap-2 px-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-base transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Globe className="w-5 h-5" />
                <span className="hidden sm:inline">Wiki & Forums</span>
                <span className="sm:hidden">Wiki</span>
              </motion.button>
            </div>

            {/* Server Guidance Button */}
            <motion.button
              onClick={() => setIsGuidanceOpen(true)}
              className="group relative flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-gray-900/80 backdrop-blur-md border border-gray-700/50 text-white font-medium text-lg transition-all duration-300 hover:scale-105 hover:bg-gray-800/90 hover:border-gray-600/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Compass className="w-6 h-6" />
              <span>Server Guidance</span>
            </motion.button>
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

      {/* Get Started Modal */}
      <AnimatePresence>
        <FeatureModal 
          isOpen={isGetStartedOpen} 
          onClose={() => setIsGetStartedOpen(false)}
          title="Begin Your Adventure"
        >
          <div className="space-y-12">
            {/* Crossplay System */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Crossplay Enabled</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Laptop className="w-5 h-5 text-gold" />
                    <span className="text-white font-medium">Java Edition</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Play from your PC with the full Java experience.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-gold" />
                    <span className="text-white font-medium">Bedrock Edition</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Join from mobile, console, or Windows 10/11.
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm border-l-2 border-gold pl-4">
                Majority of players are on Bedrock. Doeng World on all devices.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-white/5"></div>

            {/* Ambient & Atmosphere */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Volume2 className="w-5 h-5 text-gold" />
                <h3 className="text-xl font-semibold text-white">Immersive Soundscapes</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Experience dynamic audio that adapts to your surroundings, biome, time of day, and weather conditions. 
                Every moment in Doeng World feels alive and atmospheric.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-white/5"></div>

            {/* Adventure Mechanics */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-gold" />
                <h3 className="text-xl font-semibold text-white">Loot Balloons</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                While exploring the world, keep an eye on the sky for floating Loot Balloons. 
                Shoot them down to claim valuable treasures and rare items.
              </p>
            </div>
          </div>
        </FeatureModal>
      </AnimatePresence>

      {/* Wiki & Forums Modal */}
      <AnimatePresence>
        <FeatureModal 
          isOpen={isWikiOpen} 
          onClose={() => setIsWikiOpen(false)}
          title="Server Features"
        >
          <div className="space-y-8">
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* New Items */}
              <div className="group space-y-3 p-5 rounded-xl border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <Swords className="w-5 h-5 text-gold" />
                  <h3 className="text-base font-semibold text-white">Custom Items</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Unique weapons, tools, and accessories. Vanilla-friendly items forged or looted from challenging bosses.
                </p>
              </div>

              {/* New Mobs & Bosses */}
              <div className="group space-y-3 p-5 rounded-xl border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <Skull className="w-5 h-5 text-gold" />
                  <h3 className="text-base font-semibold text-white">Mobs & Bosses</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Face diverse enemies including Crocodiles, Bears, Goblins, and formidable Boss encounters.
                </p>
              </div>

              {/* Artifacts & Schematics */}
              <div className="group space-y-3 p-5 rounded-xl border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <ScrollText className="w-5 h-5 text-gold" />
                  <h3 className="text-base font-semibold text-white">Artifacts</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Discover ancient artifacts and Workshop Schematics in treasure chests. Identify them to unlock hidden powers.
                </p>
              </div>

              {/* Richer Farming */}
              <div className="group space-y-3 p-5 rounded-xl border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <Wheat className="w-5 h-5 text-gold" />
                  <h3 className="text-base font-semibold text-white">Advanced Farming</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Grow new crops like Tomatoes and Corn. Transform your harvest into delicious dishes.
                </p>
              </div>

              {/* Cooking */}
              <div className="group space-y-3 p-5 rounded-xl border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <CookingPot className="w-5 h-5 text-gold" />
                  <h3 className="text-base font-semibold text-white">Cooking System</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Animated Cooking Pot with 11+ recipes. Create meals with lasting potion effects.
                </p>
              </div>

              {/* World Generation */}
              <div className="group space-y-3 p-5 rounded-xl border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <Mountain className="w-5 h-5 text-gold" />
                  <h3 className="text-base font-semibold text-white">World Generation</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Explore 80+ new biomes, 50+ custom structures, and 14+ unique cave systems.
                </p>
              </div>
            </div>
          </div>
        </FeatureModal>
      </AnimatePresence>

      {/* Server Guidance Modal */}
      <AnimatePresence>
        <FeatureModal 
          isOpen={isGuidanceOpen} 
          onClose={() => setIsGuidanceOpen(false)}
          title="Dungeons & Progression"
        >
          <div className="space-y-12">
            {/* Locked Dungeons */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Key className="w-5 h-5 text-gold" />
                <h3 className="text-xl font-semibold text-white">Locked Dungeons</h3>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Accessed with Keys obtained from Mini-Bosses. These are shared arenas where you may encounter other players. 
                Progress is linear — defeat each boss to unlock the next challenge.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
                  <span className="text-white text-sm">Abandoned Mining Site</span>
                  <span className="text-xs text-gray-500">Level 1</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
                  <span className="text-white text-sm">Dracula's Manor</span>
                  <span className="text-xs text-gray-500">Level 2</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
                  <span className="text-white text-sm">Ancient Ruins</span>
                  <span className="text-xs text-gray-500">Level 3</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/5"></div>

            {/* Wilderness Dungeons */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gold" />
                <h3 className="text-xl font-semibold text-white">Wilderness Dungeons</h3>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Discovered via underground Portals. Each run is instanced (private) and procedurally generated, 
                offering a unique layout every time you enter.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
                  <span className="text-white text-sm">The Crawling Depths</span>
                </div>
                <div className="p-4 rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
                  <span className="text-white text-sm">Fungal Cavern</span>
                </div>
                <div className="p-4 rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
                  <span className="text-white text-sm">Flooded Catacombs</span>
                </div>
                <div className="p-4 rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
                  <span className="text-white text-sm">Venom Pools</span>
                </div>
                <div className="p-4 rounded-lg border border-white/5 hover:bg-white/5 transition-colors sm:col-span-2">
                  <span className="text-white text-sm">Queen's Lair</span>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="border-l-2 border-gold pl-6 space-y-3">
              <p className="text-sm text-gray-400">
                <span className="text-gold font-medium">Tip:</span> Locked Dungeons require teamwork and strategy. Bring friends for the best experience.
              </p>
              <p className="text-sm text-gray-400">
                <span className="text-gold font-medium">Tip:</span> Wilderness Dungeons reset each run, making them ideal for farming rare loot.
              </p>
            </div>
          </div>
        </FeatureModal>
      </AnimatePresence>

      {/* Play Now Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setIsModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-lg bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:rotate-90 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="bg-gradient-to-r from-minecraft/20 to-emerald-600/20 border-b border-gray-700/50 px-6 py-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-minecraft/20 rounded-xl border border-minecraft/30">
                    <Sword className="w-6 h-6 text-minecraft" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Server Connection</h2>
                    <p className="text-sm text-gray-400 mt-1">Choose your edition to connect</p>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                {/* Java Edition Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-minecraft rounded-full animate-pulse"></div>
                    <h3 className="text-lg font-bold text-white">Java Edition</h3>
                  </div>
                  
                  <div className="bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Version:</span>
                      <span className="text-white font-semibold">1.21.4</span>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400 uppercase tracking-wide">Server IP</label>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-950/50 border border-gray-700/50 rounded-lg px-4 py-3">
                          <code className="text-minecraft font-mono text-sm sm:text-base">play.doeng.world</code>
                        </div>
                        <motion.button
                          onClick={() => handleCopy('play.doeng.world', 'java')}
                          className="flex items-center gap-2 px-4 py-3 bg-minecraft/20 hover:bg-minecraft/30 border border-minecraft/30 rounded-lg text-white transition-all duration-300 hover:scale-105"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {copiedText === 'java' ? (
                            <>
                              <Check className="w-4 h-4 text-minecraft" />
                              <span className="hidden sm:inline text-sm">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span className="hidden sm:inline text-sm">Copy</span>
                            </>
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700/50"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-gray-900 px-3 text-gray-500">or</span>
                  </div>
                </div>

                {/* Bedrock Edition Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <h3 className="text-lg font-bold text-white">Bedrock Edition</h3>
                  </div>
                  
                  <div className="bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Version:</span>
                      <span className="text-white font-semibold">1.21.70</span>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs text-gray-400 uppercase tracking-wide">Server IP</label>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-950/50 border border-gray-700/50 rounded-lg px-4 py-3">
                          <code className="text-blue-400 font-mono text-sm sm:text-base">be.doeng.world</code>
                        </div>
                        <motion.button
                          onClick={() => handleCopy('be.doeng.world', 'bedrock-ip')}
                          className="flex items-center gap-2 px-4 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-white transition-all duration-300 hover:scale-105"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {copiedText === 'bedrock-ip' ? (
                            <>
                              <Check className="w-4 h-4 text-blue-400" />
                              <span className="hidden sm:inline text-sm">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span className="hidden sm:inline text-sm">Copy</span>
                            </>
                          )}
                        </motion.button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-gray-400 uppercase tracking-wide">Port</label>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-950/50 border border-gray-700/50 rounded-lg px-4 py-3">
                          <code className="text-blue-400 font-mono text-sm sm:text-base">25565</code>
                        </div>
                        <motion.button
                          onClick={() => handleCopy('25565', 'bedrock-port')}
                          className="flex items-center gap-2 px-4 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-white transition-all duration-300 hover:scale-105"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {copiedText === 'bedrock-port' ? (
                            <>
                              <Check className="w-4 h-4 text-blue-400" />
                              <span className="hidden sm:inline text-sm">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span className="hidden sm:inline text-sm">Copy</span>
                            </>
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Note */}
                <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
                  <p className="text-xs sm:text-sm text-gray-300 text-center">
                    🎮 <span className="font-semibold text-gold">Pro Tip:</span> Copy the server IP and paste it into your Minecraft multiplayer menu!
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
