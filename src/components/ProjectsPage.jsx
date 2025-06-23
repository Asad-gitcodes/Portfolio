import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Research Project: Full-Stack Mobile & Web Application Development',
    technologies: [
      'Machine Learning', 'AI', 'React.js', 'Node.js', 'AWS', 'React Native', 'Expo',
      'Clerk', 'Render', 'MongoDB', 'Express', 'RESTful APIs', 'KNN Algorithm'
    ],
    bullets: [
      'Developed and deployed a full-stack mobile and web application using React.js, Node.js, and MongoDB, improving data management and user experience by 30%.',
      'Deployed the web application on AWS using EC2, S3, and Lambda, increasing scalability and uptime by 25%.',
      'Deployed the mobile app on Render, reducing loading times by 40% and optimizing performance.',
      'Designed RESTful APIs for research data exchange, improving response times by 20%.',
      'Implemented KNN and optimization algorithms to determine best depot locations, improving prediction accuracy by 15%.'
    ]
  },
  {
    title: 'Real-Time Sign Language Detection App',
    technologies: ['React.js', 'TensorFlow.js', 'Deep Learning', 'MongoDB', 'Express', 'RESTful APIs'],
    bullets: [
      'Developed a deep learning model for gesture recognition via webcam, improving accuracy by 25%.',
      'Implemented real-time image processing to interpret ASL gestures with 90% detection accuracy.',
      'Enhanced UI/UX, boosting user engagement by 40%.',
      'Optimized TensorFlow.js model for low-latency real-time recognition.',
      'Improved model accuracy by 35% through diverse dataset training.'
    ]
  },
  {
    title: 'Full Stack Mobile App with React Native & Expo',
    technologies: ['React Native', 'Expo', 'Clerk', 'Express', 'Postgres', 'Redis'],
    bullets: [
      'Built a cross-platform mobile app with React Native & Expo for iOS and Android.',
      'Integrated Clerk for secure authentication and email verification.',
      'Developed a financial tracker feature with live balance updates.',
      'Used Express.js for backend with Neon Postgres and Redis for rate limiting.',
      'Deployed cloud-based backend accessible from mobile without Mac requirements.'
    ]
  }
];

const bulletVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export default function ProjectsPage() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-black via-[#1a002f] to-black px-6 py-20 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-5xl font-extrabold text-violet-300 mb-16 drop-shadow-md"
      >
        Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="relative group bg-gradient-to-br from-violet-800/20 to-white/5 border border-violet-500/20 p-8 rounded-3xl shadow-2xl backdrop-blur-xl hover:shadow-violet-600/40 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 m-4 px-2 py-1 text-xs bg-violet-700/30 border border-violet-500 rounded-full text-violet-100">
              Project #{index + 1}
            </div>
            <h3 className="text-2xl font-bold text-violet-200 mb-3 group-hover:text-white transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-purple-300 mb-4">
              <span className="font-semibold text-white">Technologies:</span> {project.technologies.join(', ')}
            </p>
            <ul className="list-disc list-inside text-purple-100 text-sm space-y-1 pl-2">
              {project.bullets.map((point, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={bulletVariant}
                  className="relative pl-2 before:absolute before:left-0 before:top-1.5 before:w-1 before:h-1 before:bg-violet-400 before:rounded-full"
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
