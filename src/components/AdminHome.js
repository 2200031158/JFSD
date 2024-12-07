import React, { useState, useEffect } from "react";
import './AdminHome.css'; // Make sure to add appropriate styles here

const AdminHome = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://www.shutterstock.com/image-photo/internship-experience-skills-paid-adn-260nw-2020369409.jpg",
    "https://careerguidance.vjrc.ac.in/wp-content/uploads/2023/12/rsz_1paid_or_unpaid_internship.jpg"
  ];

  const descriptions = [
    {
      title: "Internship Experience: Skills & Paid Opportunities",
      description: "Internships provide invaluable hands-on experience, where you can learn skills that are highly sought after in the job market. A paid internship can help you gain real-world experience while supporting your financial needs."
    },
    {
      title: "Professional Background & Growth",
      description: "Building a professional background is crucial for career growth. This professional environment helps you learn and adapt while creating a path for future career opportunities."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, [images.length]);

  return (
    <div className="admin-home-container">
      <h1 className="admin-home-header">Admin Dashboard</h1>
      
      {/* Slideshow */}
      <div className="slideshow-container">
        <img src={images[currentImage]} alt="Slideshow" className="slideshow-image" />
      </div>

      {/* Information about Images */}
      <div className="info-card">
        <div>
          <h3>{descriptions[currentImage].title}</h3>
          <p>{descriptions[currentImage].description}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
