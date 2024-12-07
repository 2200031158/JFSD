import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageInternships = () => {
    const [internships, setInternships] = useState([]); // State to store internships
    const [url, setUrl] = useState('');
    const [question, setQuestion] = useState('');
    const [selectedInternship, setSelectedInternship] = useState(''); // Track selected internship
  
    // Fetch internships from backend when component mounts
    useEffect(() => {
      const fetchInternships = async () => {
        try {
          const response = await axios.get('/api/internships'); // Fetch internships
          setInternships(response.data); // The response should now contain `id` and `title`
        } catch (error) {
          console.error('Error fetching internships', error);
        }
      };
  
      fetchInternships();
    }, []);
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Form data to be submitted
      const taskData = {
        url,
        question,
        internshipId: selectedInternship, // Use selected internship ID
      };
  
      try {
        await axios.post('/api/tasks', taskData); // Send task data to backend
        alert('Task created successfully!');
      } catch (error) {
        console.error('Error creating task', error);
        alert('Failed to create task.');
      }
    };
  
    return (
      <div className="add-internship-container">
        <h2 className="add-internship-header">Manage Internships</h2>
        <form className="add-internship-form" onSubmit={handleSubmit}>
          <label htmlFor="internship">Select Internship</label>
          <select
            id="internship"
            name="internship"
            value={selectedInternship}
            onChange={(e) => setSelectedInternship(e.target.value)}
          >
            <option value="">Select an internship</option>
            {internships.map((internship) => (
              <option key={internship.id} value={internship.id}>
                {internship.title} {/* Use title here */}
              </option>
            ))}
          </select>
  
          <label htmlFor="url">URL</label>
          <input
            type="text"
            id="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
  
          <label htmlFor="question">Question/Description</label>
          <textarea
            id="question"
            name="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
  
          <button type="submit">Save Task</button>
        </form>
      </div>
    );
  };
  
  export default ManageInternships;
  