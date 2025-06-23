import { motion } from 'framer-motion';
import csufLogo from '../assets/csuf-logo1.png';
import newspaperIcon from '../assets/daily-logo.png';

export default function EducationAndLeadership() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-black via-[#1a002f] to-black px-6 py-20 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-5xl font-extrabold text-violet-300 mb-16 drop-shadow-md"
      >
        Education & Leadership
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 p-6 rounded-3xl shadow-lg backdrop-blur-xl"
        >
          <h3 className="text-2xl font-bold text-violet-200 mb-4 flex items-center gap-3">
            Education
          </h3>
          <div className="flex items-center gap-4">
            <motion.img 
              src={csufLogo} 
              alt="CSUF Logo" 
              className="w-10 h-10 object-contain rounded-md shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            <p className="text-purple-100 text-sm">
              <strong>California State University, Fullerton</strong>, California<br />
              Master of Science in Computer Science | <span className="text-purple-400">GPA: 3.66 / 4.0</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 border border-white/10 p-6 rounded-3xl shadow-lg backdrop-blur-xl"
        >
          <h3 className="text-2xl font-bold text-violet-200 mb-4 flex items-center gap-3">
            Activities & Leadership
          </h3>
          <p className="text-purple-300 text-sm italic mb-3">August 2023 – May 2025</p>
          <ul className="text-purple-100 text-sm space-y-3">
            <li className="leading-relaxed flex gap-3 items-center">
              <motion.img 
                src={newspaperIcon} 
                alt="News Icon" 
                className="w-6 h-6 object-contain rounded shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              <span>
                Featured in <a href="https://news.fullerton.edu/2025/02/faculty-student-researchers-use-machine-learning-models-to-manage-public-disasters-and-health-emergencies/" target="_blank" rel="noopener noreferrer" className="underline text-white hover:text-violet-300">CSUF Newspaper</a> for research contributions, highlighting work under Professor Akwafuo Sampson in public health and tech-driven solutions.
              </span>
            </li>
            <li className="leading-relaxed list-disc list-inside ml-8">
              Actively participated in academic research and collaborated with faculty in data analysis and machine learning to advance the department's scholarly impact.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
