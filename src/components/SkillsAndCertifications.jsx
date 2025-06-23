import { motion } from 'framer-motion';
import awsLogo from '../assets/AWS-logo.png';

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

const experienceData = [
  {
    role: 'Research Assistant (Research & Development)',
    company: 'Computer Science Department, California State University, Fullerton',
    location: 'Fullerton, CA',
    duration: 'Jan 2024 – May 2025',
    details: [
      'Developed and deployed full-stack mobile and web applications to support research focused on public health emergencies, utilizing technologies like React.js, Next.js, Node.js, and MongoDB.',
      'Contributed to machine learning models using Python and TensorFlow to predict and manage public health crises.',
      'Integrated optimization algorithms using NumPy and Scikit-learn to improve disaster management strategies.',
      'Analyzed datasets with PostgreSQL and MongoDB to uncover key insights.',
      'Contributed to academic papers and reports through documentation and presentations.'
    ]
  },
  {
    role: 'IT Assistant',
    company: 'Computer Science Department, California State University, Fullerton',
    location: 'Fullerton, CA',
    duration: 'May 2024 – May 2025',
    details: [
      'Managed lab software using Linux, Docker, and Kubernetes to ensure system reliability and security.',
      'Utilized Putty and Linux commands for deployment, troubleshooting, and configuration management.',
      'Provided technical support and resolved hardware/software issues efficiently.',
      'Documented and reported technical issues to streamline future troubleshooting.',
      'Implemented improvements to reduce recurring challenges in lab operations.'
    ]
  },
  {
    role: 'Full Stack Intern',
    company: 'Global Spark Tek',
    location: 'Hyderabad, India',
    duration: 'Jan 2023 – Jul 2023',
    details: [
      'Assisted in developing a cross-platform mobile application using React Native and Expo.',
      'Integrated RESTful APIs for data management and core functionalities.',
      'Collaborated with design and development teams to meet delivery timelines.',
      'Worked with CI/CD automation using GitHub Actions and learned Kubernetes deployment.'
    ]
  }
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
    <section className="relative min-h-screen w-full px-6 py-20 bg-gradient-to-br from-[#1b0036] via-[#12002a] to-black overflow-hidden text-white">
      <div className="absolute top-[-20%] left-[-20%] w-[150%] h-[150%] bg-gradient-radial from-violet-600/20 to-transparent blur-2xl z-0 animate-pulse" />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-5xl font-extrabold text-violet-300 mb-16 drop-shadow-lg tracking-wide"
      >
        Skills & Certifications
      </motion.h2>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {skillsData.map((group, index) => (
          <motion.div
            key={group.title}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-gradient-to-tr from-white/10 to-violet-900/10 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-6 shadow-lg hover:shadow-violet-600/30 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-violet-300 mb-4 border-b border-violet-500 pb-2">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2 text-sm">
              {group.items.map((item) => (
                <motion.li
                  key={item}
                  className="px-3 py-1 bg-violet-700/30 rounded-full border border-violet-400/20 hover:bg-violet-600/40 hover:text-white transition flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item === 'AWS Certified Developer' && (
                    <img src={awsLogo} alt="AWS Logo" className="w-25 h-20" />
                  )}
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-5xl font-extrabold text-violet-300 mb-16 drop-shadow-lg tracking-wide"
      >
        Experience
      </motion.h2>

      <div className="relative z-10 max-w-4xl mx-auto border-l-2 border-violet-500/30 pl-6 space-y-16">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="relative before:absolute before:-left-[11px] before:top-3 before:w-5 before:h-5 before:rounded-full before:bg-violet-400 before:ring-4 before:ring-violet-700/20"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-sm text-purple-400 italic mt-1 md:mt-0">{exp.duration}</p>
              </div>
              <p className="text-sm text-purple-300 mb-3">{exp.company} — {exp.location}</p>
              <ul className="list-disc list-inside text-purple-100 text-sm space-y-1">
                {exp.details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

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
