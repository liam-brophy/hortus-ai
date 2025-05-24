import { useState } from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const HomePage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const initialValues = {
    name: '',
    email: '',
    company: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    company: Yup.string().required('Company is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    // In a real application, you would submit the form data to a server
    console.log('Form values:', values);
    
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      resetForm();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Pioneering the Future with Intelligent Solutions
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Transforming businesses through cutting-edge artificial intelligence and machine learning solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a 
                href="#contact" 
                className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Get Started
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Secondary Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Hortus AI?</h2>
            <p className="text-gray-600 text-lg">
              We deliver innovative AI solutions that drive growth and create value for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
              <p className="text-gray-600">
                Our advanced AI algorithms provide cutting-edge solutions to complex business challenges.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our team consists of world-class researchers and engineers with deep expertise in AI and machine learning.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">
                We prioritize data security and build reliable systems that you can trust with your most sensitive information.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600 text-lg">
                Have questions or ready to start your AI journey? Reach out to our team.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              {formSubmitted ? (
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <svg className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-medium text-green-800 mb-2">Thank you!</h3>
                  <p className="text-green-700">Your message has been received. We'll get back to you shortly.</p>
                </div>
              ) : (
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <Field
                          type="text"
                          name="name"
                          id="name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Your name"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-500 mt-1 text-sm" />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="your.email@example.com"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 mt-1 text-sm" />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company</label>
                        <Field
                          type="text"
                          name="company"
                          id="company"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Your company"
                        />
                        <ErrorMessage name="company" component="div" className="text-red-500 mt-1 text-sm" />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                        <Field
                          as="textarea"
                          name="message"
                          id="message"
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Your message"
                        />
                        <ErrorMessage name="message" component="div" className="text-red-500 mt-1 text-sm" />
                      </div>
                      
                      {submitError && (
                        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded">
                          {submitError}
                        </div>
                      )}
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </Form>
                  )}
                </Formik>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
