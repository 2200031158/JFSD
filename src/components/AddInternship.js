import React, { useState } from 'react';
import './AddInternship.css';
import axios from 'axios'; // Import axios for making API requests

const AddInternship = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    description: '',
    location: '',
    duration: '',
    startDate: '',
    endDate: '',
    stipend: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to save internship data
      const response = await axios.post('http://localhost:8080/api/internships', formData);
      console.log('Server Response:', response.data);
      alert('Internship Added Successfully!');
      
      // Reset form after successful submission
      setFormData({
        title: '',
        company: '',
        description: '',
        location: '',
        duration: '',
        startDate: '',
        endDate: '',
        stipend: '',
      });
    } catch (error) {
      console.error('Error adding internship:', error);
      alert('Failed to add internship. Please try again.');
    }
  };

  return (
    <div className="add-internship-container">
      <h2 className="add-internship-header">Add New Internship</h2>
      <form className="add-internship-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter Internship Title"
        />

        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Enter Company Name"
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter Description"
        ></textarea>

        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter Location"
        />

        <label htmlFor="duration">Duration</label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="Enter Duration (e.g., 3 months)"
        />

        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />

        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />

        <label htmlFor="stipend">Stipend</label>
        <input
          type="number"
          id="stipend"
          name="stipend"
          value={formData.stipend}
          onChange={handleChange}
          placeholder="Enter Stipend Amount"
        />

        <button type="submit">Add Internship</button>
      </form>
    </div>
  );
};

export default AddInternship;
