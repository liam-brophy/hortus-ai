import { useState } from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from 'formik'; // Import FormikHelpers as a type
import * as Yup from 'yup';
import styles from './HomePage.module.css'; // Import CSS module
import TreeAnimation from '../components/TreeAnimation';
import HortusIllustration from '../assets/Hortus_Illustration.png'; // Import the illustration

// Define an interface for form values
interface FormValues {
  name: string;
  email: string;
  company: string;
  message: string;
}

const HomePage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const initialValues: FormValues = { // Use the interface here
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

  // Add types for values and FormikHelpers
  const handleSubmit = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    // In a real application, you would submit the form data to a server
    console.log('Form values:', values);
    setSubmitError(''); // Clear previous errors
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      // throw new Error("Simulated server error"); // Uncomment to test error handling
      setFormSubmitted(true);
      resetForm();
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.homePageContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        {/* Container for text content, will be on the left */}
        <div className={styles.heroTextContent}>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Integrating AI, by and for the people.
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            hortus (Latin): the garden
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#contact"
              className={styles.ctaButton}
            >
              Get Started
            </a>
          </motion.div>
        </div>
        {/* Container for the TreeAnimation, will be on the right */}
        <div className={styles.heroIllustrationContainer}>
          <TreeAnimation /> {/* TreeAnimation without className */}
        </div>
      </section>

      {/* Secondary Content Section */}
      <section className={styles.secondaryContentSection}>
        <div className="container"> {/* Using global .container class */}
          {/* Removed "Why Choose Hortus AI?" heading and subtitle */}

          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <div className={`${styles.cardIconContainer} ${styles.iconInnovative}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Innovative Solutions</h3>
              <p className={styles.cardText}>
                Our advanced AI algorithms provide cutting-edge solutions to complex business challenges.
              </p>
            </div>
            
            <div className={styles.card}>
              <div className={`${styles.cardIconContainer} ${styles.iconExpert}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Expert Team</h3>
              <p className={styles.cardText}>
                Our team consists of world-class researchers and engineers with deep expertise in AI and machine learning.
              </p>
            </div>
            
            <div className={styles.card}>
              <div className={`${styles.cardIconContainer} ${styles.iconSecure}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Secure & Reliable</h3>
              <p className={styles.cardText}>
                We prioritize data security and build reliable systems that you can trust with your most sensitive information.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section - Reverted to original structure */}
      <section id="contact" className={styles.contactFormSection}>
        <div className="container"> {/* Using global .container class */}
          <div className={styles.contactLayoutContainer}> {/* Original: image left, form right */}
            <div className={styles.contactImageContainer}>
              <img src={HortusIllustration} alt="Hortus AI Illustration" className={styles.contactIllustration} />
            </div>
            <div className={styles.formContainer}>
              <div className="text-center mb-8"> {/* Original: text-center */}
                <h2 className={styles.sectionTitle}>Get in Touch</h2>
                <p className={styles.sectionSubtitle}>
                  Have questions or ready to start your AI journey? Reach out to our team.
                </p>
              </div>

              {formSubmitted ? (
                <div className={styles.formSuccessMessage}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className={styles.formSuccessTitle}>Thank you!</h3>
                  <p className={styles.formSuccessText}>Your message has been received. We'll get back to you shortly.</p>
                </div>
              ) : (
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.formLabel}>Name</label>
                        <Field
                          type="text"
                          name="name"
                          id="name"
                          className={styles.formInput}
                          placeholder="Your name"
                        />
                        <ErrorMessage name="name" component="div" className={styles.formErrorMessage} />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>Email</label>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          className={styles.formInput}
                          placeholder="your.email@example.com"
                        />
                        <ErrorMessage name="email" component="div" className={styles.formErrorMessage} />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="company" className={styles.formLabel}>Company</label>
                        <Field
                          type="text"
                          name="company"
                          id="company"
                          className={styles.formInput}
                          placeholder="Your company"
                        />
                        <ErrorMessage name="company" component="div" className={styles.formErrorMessage} />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.formLabel}>Message</label>
                        <Field
                          as="textarea"
                          name="message"
                          id="message"
                          rows={5}
                          className={styles.formTextarea}
                          placeholder="Your message"
                        />
                        <ErrorMessage name="message" component="div" className={styles.formErrorMessage} />
                      </div>
                      
                      {submitError && (
                        <div className={styles.formSubmitError}>
                          {submitError}
                        </div>
                      )}
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={styles.submitButton}
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
