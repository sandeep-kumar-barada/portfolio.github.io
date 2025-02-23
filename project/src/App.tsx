import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Brain, Database, LineChart, BookOpen, Award, Code2 } from 'lucide-react';

function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillCardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  };

  const timelineVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-gray-900 text-white">
      {/* Hero Section */}
      <header className="min-h-screen relative overflow-hidden bg-gradient-to-br from-violet-600 via-indigo-800 to-purple-900">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptLTE2IDBjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnptOCA4YzAtMS4xLjktMiAyLTIgMS4xIDAgMiAuOSAyIDIgMCAxLjEtLjkgMi0yIDItMS4xIDAtMi0uOS0yLTJ6bTAtMTZjMC0xLjEuOS0yIDItMiAxLjEgMCAyIC45IDIgMiAwIDEuMS0uOSAyLTIgMi0xLjEgMC0yLS45LTItMnoiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1vcGFjaXR5PSIuMiIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              variants={fadeIn}
              className="inline-block"
            >
              <span className="inline-flex items-center px-6 py-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 text-indigo-200 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
                Machine Learning Engineer & Data Scientist
              </span>
            </motion.div>
            <motion.h1 
              variants={fadeIn}
              className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400"
            >
              Sandeep Kumar Barada
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-indigo-200 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Crafting intelligent solutions through advanced machine learning algorithms and data-driven insights
            </motion.p>
            <motion.div 
              variants={staggerContainer}
              className="flex justify-center gap-6 mb-12"
            >
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
                >
                  <item.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
            <motion.div 
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-4 text-sm"
            >
              {[
                "Deep Learning",
                "Computer Vision",
                "Natural Language Processing",
                "Data Analytics"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Skills Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-indigo-900/30"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16"
          >
            Areas of Expertise
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Machine Learning",
                description: "Deep Learning, Neural Networks, Computer Vision, NLP"
              },
              {
                icon: Database,
                title: "Data Science",
                description: "Data Analysis, Statistical Modeling, Big Data Processing"
              },
              {
                icon: LineChart,
                title: "Data Visualization",
                description: "Matplotlib, Seaborn, Plotly, Dashboard Development"
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={skillCardVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-indigo-800/30 p-8 rounded-lg backdrop-blur-sm"
              >
                <skill.icon className="w-12 h-12 mb-4 text-indigo-400" />
                <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                <p className="text-gray-300">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16"
          >
            Professional Journey
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {[
              {
                period: "2023 - Present",
                title: "Senior Machine Learning Engineer",
                description: "Leading AI initiatives and developing cutting-edge ML solutions for real-world problems."
              },
              {
                period: "2021 - 2023",
                title: "Data Scientist",
                description: "Implemented predictive models and analytics solutions for business optimization."
              },
              {
                period: "2019 - 2021",
                title: "ML Research Assistant",
                description: "Conducted research in deep learning and published papers in top conferences."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={timelineVariants}
                className={`relative pl-8 ${index !== 2 ? 'pb-12' : ''} border-l-2 border-indigo-500`}
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-indigo-500 rounded-full"></div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-indigo-800/30 p-6 rounded-lg"
                >
                  <span className="text-indigo-400 font-semibold">{item.period}</span>
                  <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-indigo-900/30"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Brain,
                title: "Computer Vision AI",
                description: "Developed a real-time object detection system using YOLOv5 achieving 95% accuracy on custom datasets.",
                tech: "Technologies: PyTorch, OpenCV, TensorFlow",
                tags: ["Deep Learning", "Computer Vision", "PyTorch"]
              },
              {
                icon: LineChart,
                title: "Predictive Analytics Platform",
                description: "Built an end-to-end analytics platform for time series forecasting using LSTM networks.",
                tech: "Technologies: Python, Keras, FastAPI",
                tags: ["Time Series", "LSTM", "FastAPI"]
              },
              {
                icon: Code2,
                title: "NLP Sentiment Analyzer",
                description: "Created a sentiment analysis model using BERT achieving 92% accuracy on multi-language texts.",
                tech: "Technologies: Transformers, HuggingFace, Flask",
                tags: ["NLP", "BERT", "Flask"]
              },
              {
                icon: Database,
                title: "Big Data Pipeline",
                description: "Designed and implemented a scalable data processing pipeline handling 1TB+ daily data.",
                tech: "Technologies: Apache Spark, Kafka, Airflow",
                tags: ["Big Data", "Spark", "Airflow"]
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={skillCardVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-indigo-800/30 p-8 rounded-lg backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  <project.icon className="w-8 h-8 text-indigo-400 mr-3" />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  {project.description}
                  <br />
                  {project.tech}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-indigo-700/50 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
                >
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeIn}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
            <p className="text-gray-300 mb-8">
              I'm always interested in collaborating on innovative ML/AI projects or discussing data science opportunities.
            </p>
            <motion.a 
              href="mailto:contact@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Get In Touch
              <Mail className="ml-2 w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 Sandeep Kumar Barada. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;