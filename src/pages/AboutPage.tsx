import { motion } from 'framer-motion';

const AboutPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Hortus AI</h1>
            <p className="text-xl text-gray-600">
              Pioneering the frontier of artificial intelligence with innovation and ethics.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
              <p className="text-gray-700">
                At Hortus AI, our mission is to democratize artificial intelligence and make advanced machine learning 
                technologies accessible to businesses of all sizes. We are committed to developing solutions that 
                solve real-world problems and create tangible value for our clients and partners.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-purple-600">Our Vision</h2>
              <p className="text-gray-700">
                We envision a future where AI seamlessly integrates into all aspects of business and society, 
                enhancing human capabilities rather than replacing them. Hortus AI aims to be at the forefront 
                of this transformation, leading with ethical AI development that prioritizes transparency, 
                fairness, and human well-being.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="text-lg text-gray-700">
                Hortus AI was founded in 2020 by a group of leading AI researchers and industry veterans who saw 
                the immense potential of machine learning to transform businesses. What started as a small research 
                team has grown into a dynamic company at the cutting edge of artificial intelligence innovation.
              </p>
              
              <p className="text-lg text-gray-700">
                Our name, "Hortus," comes from the Latin word for garden – representing our belief that AI, like a 
                garden, requires careful cultivation, ethical nurturing, and patient growth to produce the best results.
              </p>
              
              <p className="text-lg text-gray-700">
                Today, we work with clients across industries – from healthcare and finance to manufacturing and retail – 
                helping them harness the power of AI to drive growth, efficiency, and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold">Dr. Jane Chen</h3>
              <p className="text-blue-600">Chief Executive Officer</p>
              <p className="text-gray-600 mt-2">
                Former AI Research Lead at Stanford University with over 15 years of experience in machine learning.
              </p>
            </motion.div>
            
            {/* Team Member 2 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold">Michael Rodriguez</h3>
              <p className="text-blue-600">Chief Technology Officer</p>
              <p className="text-gray-600 mt-2">
                Previously led engineering teams at Google AI and contributed to cutting-edge natural language processing models.
              </p>
            </motion.div>
            
            {/* Team Member 3 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-blue-600">Chief Research Officer</p>
              <p className="text-gray-600 mt-2">
                Award-winning researcher specializing in reinforcement learning and computer vision applications.
              </p>
            </motion.div>
            
            {/* Team Member 4 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold">David Kim</h3>
              <p className="text-blue-600">Chief Operating Officer</p>
              <p className="text-gray-600 mt-2">
                Former management consultant with expertise in scaling technology companies and operational excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Innovation</h3>
              <p className="text-gray-600 text-center">
                We push the boundaries of what's possible with AI, constantly exploring new approaches and technologies.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-16 w-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Ethics</h3>
              <p className="text-gray-600 text-center">
                We develop AI responsibly, with strong principles around transparency, fairness, and social impact.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Impact</h3>
              <p className="text-gray-600 text-center">
                Our ultimate measure of success is the positive impact our AI solutions have on businesses and society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
