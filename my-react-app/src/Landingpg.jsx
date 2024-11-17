import React, { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom'
import weird_recipe_gen from './App/'


const FoodGeneratorLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  // const navigate = useNavigate();
  // Array of weird food combinations for the rotating display
  const weirdCombinations = [
    "Chocolate-covered pickles",
    "Banana sushi rolls",
    "Pizza ice cream",
    "Maple bacon coffee",
    "Wasabi chocolate chips",
    "Peanut butter curry"
  ];

  const [currentCombo, setCurrentCombo] = useState(0);

  // Rotate through weird combinations
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCombo((prev) => (prev + 1) % weirdCombinations.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const styles = {
    container: {
      fontFamily: "'Nunito', sans-serif",
      margin: 0,
      padding: 0,
      color: '#2D3748',
      backgroundColor: '#F7FAFC'
    },
    
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 50px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      zIndex: 1000,
      boxSizing: 'border-box'
    },

    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#6B46C1',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },

    navLinks: {
      display: 'flex',
      gap: '30px',
      '@media (max-width: 768px)': {
        display: isMenuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        position: 'absolute',
        top: '70px',
        left: 0,
        right: 0,
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }
    },

    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    },

    heroContent: {
      maxWidth: '800px',
      zIndex: 1
    },

    title: {
      fontSize: '48px',
      marginBottom: '20px',
      fontWeight: 'bold',
      '@media (max-width: 768px)': {
        fontSize: '36px'
      }
    },

    subtitle: {
      fontSize: '24px',
      marginBottom: '40px',
      opacity: 0.9,
      lineHeight: 1.6
    },

    rotatingText: {
      fontSize: '28px',
      height: '40px',
      marginBottom: '40px',
      color: '#FBD38D'
    },

    button: {
      backgroundColor: '#F6E05E',
      color: '#744210',
      padding: '15px 30px',
      border: 'none',
      borderRadius: '25px',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
      ':hover': {
        transform: 'scale(1.05)'
      }
    },

    features: {
      padding: '100px 50px',
      backgroundColor: 'white'
    },

    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      maxWidth: '1200px',
      margin: '0 auto'
    },

    featureCard: {
      padding: '30px',
      borderRadius: '15px',
      backgroundColor: '#F7FAFC',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
      ':hover': {
        transform: 'translateY(-5px)'
      }
    },

    howItWorks: {
      padding: '100px 50px',
      backgroundColor: '#F7FAFC'
    },

    stepGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto'
    },

    step: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    },

    stepNumber: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#6B46C1',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      fontSize: '20px',
      fontWeight: 'bold'
    },

    testimonials: {
      padding: '100px 50px',
      backgroundColor: 'white'
    },

    testimonialCard: {
      padding: '30px',
      borderRadius: '15px',
      backgroundColor: '#F7FAFC',
      margin: '20px auto',
      maxWidth: '600px'
    },

    footer: {
      backgroundColor: '#2D3748',
      color: 'white',
      padding: '50px',
      textAlign: 'center'
    },

    sectionTitle: {
      fontSize: '36px',
      marginBottom: '50px',
      textAlign: 'center',
      color: '#2D3748'
    }
  };
  const handleNavigation = () => {
    // navigate('/pagetwo');
    window.location.url = '/weird-recipe-gen'
  }

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.logo}>
          🧪 Weird Food Generator
        </div>
        <div style={styles.navLinks}>
          <a href="#features">How It Works</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#try">Try Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>
            Discover Unexpectedly Delicious Food Combinations
          </h1>
          <div style={styles.rotatingText}>
            {weirdCombinations[currentCombo]}
          </div>
          <p style={styles.subtitle}>
            Break free from culinary conventions! Our AI-powered generator creates 
            unique food combinations that challenge your taste buds and imagination.
          </p>
          <Link style={styles.button} to = {"/weird-recipe-gen"} >Generate!</Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={styles.features}>
        <h2 style={styles.sectionTitle}>Why Try Weird Food Generator?</h2>
        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>
            <h3>🎲 Random Combinations</h3>
            <p>Endless possibilities of unique food pairings you've never imagined!</p>
          </div>
          <div style={styles.featureCard}>
            <h3>🧪 Science-Based</h3>
            <p>Our algorithm considers flavor profiles and molecular gastronomy</p>
          </div>
          <div style={styles.featureCard}>
            <h3>🌟 User Ratings</h3>
            <p>Community-driven ratings help you find the best weird combinations</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={styles.howItWorks}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <div style={styles.stepGrid}>
          <div style={styles.step}>
            <div style={styles.stepNumber}>1</div>
            <h3>Enter Ingredients</h3>
            <p>List the ingredients you have or want to experiment with</p>
          </div>
          <div style={styles.step}>
            <div style={styles.stepNumber}>2</div>
            <h3>Choose Parameters</h3>
            <p>Select cooking method and cuisine style</p>
          </div>
          <div style={styles.step}>
            <div style={styles.stepNumber}>3</div>
            <h3>Generate & Cook</h3>
            <p>Get your unique recipe and start your culinary adventure!</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" style={styles.testimonials}>
        <h2 style={styles.sectionTitle}>What Food Adventurers Say</h2>
        <div style={styles.testimonialCard}>
          <p>"I never thought pickle-flavored ice cream could be so good! This generator 
             opened my mind to amazing new possibilities!"</p>
          <p>- Sarah, Food Blogger</p>
        </div>
        <div style={styles.testimonialCard}>
          <p>"The chocolate curry recipe was a hit at my dinner party. Everyone 
             wanted to know how I came up with it!"</p>
          <p>- Mike, Home Chef</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2024 Weird Food Generator. Changing the way you think about food!</p>
      </footer>
    </div>
  );
};

export default FoodGeneratorLanding;