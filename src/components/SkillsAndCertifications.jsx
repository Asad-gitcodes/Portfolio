import { motion } from 'framer-motion';
import awsLogo from '../assets/AWS-logo.png'; // Make sure this image exists in your assets folder

const skillsData = [
  {
    title: 'Languages',
    items: ['Java', 'TypeScript', 'Python', 'SQL', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks & Tools',
    items: [
      'React.js', 'Next.js', 'Node.js', 'Express.js', 'Spring Boot',
      'Flask', 'FastAPI', 'WordPress', 'Expo', 'Jupyter Notebook', 'Maven',
    ],
  },
  {
    title: 'Databases & Cloud',
    items: [
      'MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'AWS', 'Render', 'Vercel', 'Streamlit', 'Neon'
    ],
  },
  {
    title: 'Testing & Security',
    items: ['Postman', 'Swagger', 'Cypress', 'JUnit', 'OAuth 2.0', 'JWT', 'Clerk'],
  },
  {
    title: 'Mobile & Platforms',
    items: ['React Native', 'Flutter', 'Android Studio', 'Xcode'],
  },
  {
    title: 'Operating Systems',
    items: ['Linux', 'Windows', 'MacOS'],
  },
  {
    title: 'Certifications',
    items: ['AWS Certified Developer'],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function SkillsShowcase() {
  return (
    <section className="relative min-h-screen w-full px-6 py-20 bg-gradient-to-br from-[#1b0036] via-[#12002a] to-black overflow-hidden">
      {/* Glowing Background Layer */}
      <div className="absolute top-[-10%] left-[-10%] w-[200%] h-[200%] bg-gradient-radial from-violet-700/20 to-transparent blur-3xl z-0 animate-pulse" />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-5xl font-extrabold text-violet-200 mb-16 drop-shadow-lg tracking-wide"
      >
        Skills & Certifications
      </motion.h2>

      {/* Skills Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {skillsData.map((group, index) => (
          <motion.div
            key={group.title}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-shadow duration-300 group"
          >
            <h3 className="text-xl font-semibold text-violet-300 mb-4 group-hover:text-white transition-colors duration-200">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2 text-sm text-purple-100">
              {group.items.map((item) => (
                <motion.li
                  key={item}
                  className="px-3 py-1 bg-violet-900/30 border border-violet-500/30 rounded-full hover:bg-violet-600/40 hover:text-white transition-all backdrop-blur-sm shadow-sm flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item === 'AWS Certified Developer' && (
                    <img src={awsLogo} alt="AWS Certification" className="w-25 h-20" />
                  )}
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Particle-like floating dots (optional aesthetic) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-violet-400 rounded-full opacity-20 animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
