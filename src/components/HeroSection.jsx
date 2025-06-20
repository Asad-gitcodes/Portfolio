import { motion } from "framer-motion"
import Spline from "@splinetool/react-spline"

const HeroSection = () => {
  return (
    // Changed `h-screen` to `min-h-screen pt-24` to avoid overlapping the navbar and allow for content overflow
    <section className="min-h-screen pt-24 bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
      {/* Left Section */}
      {/* Added `flex-1` to allow this div to properly share space with potential right section */}
      <div className="z-40 xl:mb-0 mb-[20%] flex-1">
        <motion.h1 
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6"
        >
          Building Fast <br /> Reliable Results
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-base leading-relaxed text-purple-200 max-w-lg space-y-4 text-justify"
        >
          Results-driven Software Engineer with 2+ years of hands-on experience building scalable mobile and web applications, focusing on real-time data integration, user experience, and cloud-native solutions.
          Skilled in full-stack development using React.js, Node.js, React Native, and MongoDB, with deployment experience on AWS (EC2, S3, Lambda) and Render. Proficient in Docker and Kubernetes, and experienced in CI/CD automation using GitHub Actions.
          Strong foundation in AI and machine learning, including TensorFlow, KNN algorithms, and real-time prediction systems for public health and accessibility. Familiar with RESTful APIs and authentication systems like Clerk.
          Known for collaborative work in multidisciplinary teams and recognized for innovative contributions, including features in CSUF research news.
        </motion.p>
      </div>

      {/*Right section */}
      <Spline className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"scene="https://prod.spline.design/IZ0PQ0voQsegMxM6/scene.splinecode" />

    </section>
  )
}

export default HeroSection
