import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SimpleCareerPage from './pages/SimpleCareerPage';

function TestApp() {
  const headerStyle = {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '1rem'
  };
  
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  };
  
  const footerStyle = {
    backgroundColor: '#f3f4f6',
    padding: '1rem',
    marginTop: '2rem'
  };

  return (
    <Router>
      <div>
        <header style={headerStyle}>
          <div style={containerStyle}>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Hortus AI</h1>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={
              <div style={containerStyle}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', marginTop: '1rem' }}>
                  Home Page
                </h1>
                <p>Welcome to Hortus AI</p>
                <div style={{ marginTop: '20px' }}>
                  <Link to="/careers" style={{ color: '#2563eb', textDecoration: 'underline' }}>Go to Careers</Link>
                </div>
              </div>
            } />
            <Route path="/careers" element={<SimpleCareerPage />} />
          </Routes>
        </main>

        <footer style={footerStyle}>
          <div style={containerStyle}>
            <p>© 2025 Hortus AI. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default TestApp;
