import { motion } from 'framer-motion';

// Sample news articles
const newsArticles = [
  {
    id: 1,
    title: 'Hortus AI Announces New Computer Vision Platform',
    date: 'May 22, 2025',
    excerpt: 'Our new platform enables businesses to implement advanced computer vision solutions without extensive ML expertise.',
    category: 'Product Release',
    image: 'news-1'
  },
  {
    id: 2,
    title: 'Partnering with Stanford University for AI Research',
    date: 'May 15, 2025',
    excerpt: 'Hortus AI is excited to announce a new research partnership with Stanford University\'s AI department.',
    category: 'Partnership',
    image: 'news-2'
  },
  {
    id: 3,
    title: 'How AI is Transforming the Healthcare Industry',
    date: 'May 10, 2025',
    excerpt: 'Our latest case study explores how AI is being used to improve patient outcomes and reduce operational costs.',
    category: 'Case Study',
    image: 'news-3'
  },
  {
    id: 4,
    title: 'Hortus AI Recognized in Gartner Magic Quadrant',
    date: 'May 5, 2025',
    excerpt: 'We\'re proud to be recognized as a visionary in Gartner\'s Magic Quadrant for AI platforms.',
    category: 'Recognition',
    image: 'news-4'
  },
  {
    id: 5,
    title: 'Introducing AutoML for Small Businesses',
    date: 'April 28, 2025',
    excerpt: 'Our new AutoML solution makes machine learning accessible to small and medium enterprises.',
    category: 'Product Release',
    image: 'news-5'
  },
  {
    id: 6,
    title: 'The Future of Natural Language Processing',
    date: 'April 20, 2025',
    excerpt: 'Our research team explores the latest advancements in NLP and what they mean for business applications.',
    category: 'Research',
    image: 'news-6'
  },
];

const NewsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="news-page">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Insights</h1>
            <p className="text-xl text-gray-600">
              Stay updated with the latest news, research, and developments from Hortus AI.
            </p>
          </div>
        </div>
      </section>
      
      {/* News Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {newsArticles.map(article => (
              <motion.div 
                key={article.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden"
                variants={itemVariants}
              >
                <div className="bg-gray-200 h-48"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition duration-200">
                    Read more →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Newsletter Signup */}
          <div className="mt-16 max-w-3xl mx-auto bg-blue-600 text-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
              <p className="text-blue-100">Get the latest updates, insights, and AI news delivered to your inbox.</p>
            </div>
            
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Archive Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Archives</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200">
                2025
              </button>
              <button className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200">
                2024
              </button>
              <button className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200">
                2023
              </button>
              <button className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200">
                2022
              </button>
            </div>
            
            <div className="mt-8 text-center">
              <button className="text-blue-600 font-medium hover:text-blue-800 transition duration-200">
                View all archives →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
