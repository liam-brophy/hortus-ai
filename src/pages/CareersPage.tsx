import { motion } from 'framer-motion';

// Sample job listings
const jobListings = [
  {
    id: 1,
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'We are looking for a Senior AI Engineer to help us build cutting-edge machine learning models and systems.',
    requirements: [
      'Ph.D. or Master's degree in Computer Science, Machine Learning, or related field',
      'At least 5 years of experience developing ML models for production systems',
      'Expertise in deep learning frameworks like PyTorch or TensorFlow',
      'Strong programming skills in Python and familiarity with cloud platforms',
      'Experience with natural language processing or computer vision is a plus'
    ]
  },
  {
    id: 2,
    title: 'ML Infrastructure Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our team to build scalable and efficient infrastructure for training and deploying machine learning models.',
    requirements: [
      'B.S. or M.S. in Computer Science or related field',
      '3+ years of experience with infrastructure and cloud services',
      'Strong programming skills in Go, Python, or Java',
      'Experience with containerization technologies like Docker and Kubernetes',
      'Familiar with MLOps practices and tools'
    ]
  },
  {
    id: 3,
    title: 'AI Product Manager',
    department: 'Product',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'We are seeking an AI Product Manager to help define the vision and roadmap for our AI-powered products.',
    requirements: [
      'B.S. or M.S. in a technical field, MBA is a plus',
      '4+ years of experience in product management, preferably in AI/ML products',
      'Strong understanding of machine learning concepts and applications',
      'Excellent communication and stakeholder management skills',
      'Experience with agile development methodologies'
    ]
  },
  {
    id: 4,
    title: 'AI Research Scientist',
    department: 'Research',
    location: 'Boston, MA',
    type: 'Full-time',
    description: 'Join our research team to explore and develop novel AI algorithms and approaches.',
    requirements: [
      'Ph.D. in Computer Science, Machine Learning, or related field',
      'Strong publication record in top-tier ML conferences',
      'Expertise in one or more areas: reinforcement learning, NLP, computer vision',
      'Experience implementing and testing research ideas in code',
      'Passion for advancing the state of the art in artificial intelligence'
    ]
  },
  {
    id: 5,
    title: 'Data Scientist',
    department: 'Data',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help us uncover insights from complex data and develop data-driven ML solutions.',
    requirements: [
      'M.S. or Ph.D. in a quantitative field (CS, Statistics, Mathematics, etc.)',
      '3+ years of experience in data science or related roles',
      'Strong programming skills in Python and experience with data analysis libraries',
      'Knowledge of statistical methods and machine learning algorithms',
      'Experience with large datasets and distributed computing'
    ]
  }
];

const CareersPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-600">
              Help us build the future of artificial intelligence and make a difference.
            </p>
          </div>
        </div>
      </section>
      
      {/* Why Join Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Join Hortus AI?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Impactful Work</h3>
              <p className="text-gray-600">
                Work on AI solutions that solve real-world problems and create value for businesses and society.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Amazing Team</h3>
              <p className="text-gray-600">
                Collaborate with talented, diverse, and passionate individuals who are leaders in their fields.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">
                Develop your skills and advance your career in a fast-growing company at the forefront of AI innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefits & Perks</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Competitive Compensation</h3>
                  <p className="text-gray-600">Salary, equity, and performance bonuses to reward your contributions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Health & Wellness</h3>
                  <p className="text-gray-600">Comprehensive healthcare, dental, and vision coverage for you and your family.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Flexible Work</h3>
                  <p className="text-gray-600">Remote and hybrid options with flexible hours to fit your lifestyle.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Learning & Development</h3>
                  <p className="text-gray-600">Budget for conferences, courses, and learning resources to help you grow.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Generous PTO</h3>
                  <p className="text-gray-600">Paid time off, holidays, and parental leave to ensure work-life balance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">401(k) Matching</h3>
                  <p className="text-gray-600">Retirement savings plan with generous company matching.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Job Listings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">All Departments</button>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition">Engineering</button>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition">Product</button>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition">Research</button>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition">Data</button>
              </div>
            </div>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {jobListings.map((job) => (
                <motion.div 
                  key={job.id} 
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition duration-200"
                  variants={itemVariants}
                >
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-1">
                        <span className="inline-flex items-center text-sm text-gray-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {job.department}
                        </span>
                        <span className="inline-flex items-center text-sm text-gray-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="inline-flex items-center text-sm text-gray-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 px-4 rounded-lg transition">
                      Apply Now
                    </button>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <div>
                    <h4 className="font-medium mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Don't See a Job That Fits?</h2>
            <p className="text-xl mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute!
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg transition duration-300">
              Send General Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Explicitly export the component
export default CareersPage;
