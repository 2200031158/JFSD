import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import About from './About';
import Help from './Help';

const Home = () => {
    const navigate = useNavigate();

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            img: "https://media.istockphoto.com/id/1393379238/photo/work-performance-is-influenced-by-skills-abilities-and-competence-the-concept-of-the.jpg?s=612x612&w=0&k=20&c=JmF3ow_Nn1jLVsjVWSmrCgBpJhJ3FnxX2rVIxWlO68Q=",
            title: "Efficient Management",
            description: "Streamline internship processes with an easy-to-use platform for both administrators and users."
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGlldMyFkcr8L76FWuunZ4RKImQCxDCKKWqA&s",
            title: "Seamless Collaboration",
            description: "Enable smooth teamwork between interns and mentors through a unified platform."
        },
        {
            img: "https://thumbs.dreamstime.com/b/man-developer-coding-support-computer-screen-office-testing-web-application-troubleshooting-programming-employee-345382431.jpg",
            title: "Reliable Support",
            description: "Our dedicated support team ensures you have a seamless experience with quick resolutions to any issues."
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="home-page">
            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="navbar-left">
                    <h1 className="navbar-title">INTERNPATH</h1>
                </div>
                <div className="navbar-right">
                    <button className="navbar-btn" onClick={() => handleScroll('about')}>About</button>
                    <button className="navbar-btn" onClick={() => handleScroll('help')}>Help</button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero-section">
                <h2 className="hero-title">Welcome to INTERNPATH</h2>
                <p className="hero-subtitle">Make your dream career a reality.</p>
                <div className="hero-buttons">
                    <button className="hero-btn" onClick={() => navigate('/admin-login')}>Admin</button>
                    <button className="hero-btn" onClick={() => navigate('/user-login')}>User</button>
                </div>
            </header>

            {/* Why INTERNPATH Section (Slideshow) */}
            <section className="why-section">
                <h2 className="why-title">Why INTERNPATH?</h2>
                <div className="slideshow">
                    <button className="slideshow-btn" onClick={prevSlide}>&lt;</button>
                    <div className="slide">
                        <img src={slides[currentSlide].img} alt="Slide" className="slide-img" />
                        <h3 className="slide-title">{slides[currentSlide].title}</h3>
                        <p className="slide-desc">{slides[currentSlide].description}</p>
                    </div>
                    <button className="slideshow-btn" onClick={nextSlide}>&gt;</button>
                </div>
            </section>

            {/* About and Help Sections */}
            <div id="about">
                <About />
            </div>
            <div id="help">
                <Help />
            </div>
        </div>
    );
};

export default Home;
