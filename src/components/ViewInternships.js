import React, { useState, useEffect } from 'react';
import './ViewInternships.css';
import axios from 'axios';

const ViewInternships = () => {
  const [internships, setInternships] = useState([]);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [tasks, setTasks] = useState([]); // State to hold tasks for the selected internship
  const [showTasksModal, setShowTasksModal] = useState(false); // State to control tasks modal visibility

  // Fetch all internships
  useEffect(() => {
    axios
      .get('http://localhost:8080/api/internships')
      .then((response) => {
        setInternships(response.data);
      })
      .catch((error) => {
        console.error('Error fetching internships:', error);
      });
  }, []);

  // Fetch internship details
  const fetchDetails = (id) => {
    axios
      .get(`http://localhost:8080/api/internships/${id}`)
      .then((response) => {
        setSelectedInternship(response.data);
        setTasks([]); // Clear tasks when a new internship is selected
      })
      .catch((error) => {
        console.error('Error fetching internship details:', error);
        alert('Failed to fetch details. Please try again.');
      });
  };

  // Fetch tasks for the selected internship
  const fetchTasks = (internshipId) => {
    axios
      .get(`http://localhost:8080/api/tasks/internship/${internshipId}`)
      .then((response) => {
        setTasks(response.data); // Set the fetched tasks into state
        setShowTasksModal(true); // Show the tasks modal
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
        alert('Failed to fetch tasks. Please try again.');
      });
  };

  // Close the tasks modal
  const closeTasksModal = () => {
    setShowTasksModal(false); // Hide the tasks modal
    setTasks([]); // Optionally clear tasks when closing
  };

  return (
    <div className="view-internships-container">
      <h2 className="view-internships-header">Internships:</h2>
      <table className="internships-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {internships.map((internship) => (
            <tr key={internship.id}>
              <td>{internship.title}</td>
              <td>
                <button
                  className="view-details-button"
                  onClick={() => fetchDetails(internship.id)}
                >
                  View Details
                </button>
                <button
                  className="manage-tasks-button"
                  onClick={() => fetchTasks(internship.id)}
                >
                  Manage Tasks
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Internship Details Modal */}
      {selectedInternship && (
        <div className="internship-details-modal">
          <h3>Internship Details</h3>
          <p><strong>Title:</strong> {selectedInternship.title}</p>
          <p><strong>Company:</strong> {selectedInternship.company}</p>
          <p><strong>Description:</strong> {selectedInternship.description}</p>
          <p><strong>Location:</strong> {selectedInternship.location}</p>
          <p><strong>Duration:</strong> {selectedInternship.duration}</p>
          <p><strong>Start Date:</strong> {selectedInternship.startDate}</p>
          <p><strong>End Date:</strong> {selectedInternship.endDate}</p>
          <p><strong>Stipend:</strong> {selectedInternship.stipend}</p>
          <button
            className="close-modal-button"
            onClick={() => setSelectedInternship(null)}
          >
            Close
          </button>
        </div>
      )}

      {/* Tasks List Modal */}
      {showTasksModal && (
        <div className="tasks-list-modal">
          <h3>Tasks for Internship: {selectedInternship?.title}</h3>
          <ul className="tasks-list">
            {tasks.map((task) => (
              <li key={task.id}>
                <p><strong>Question:</strong> {task.question}</p>
                <p><strong>URL:</strong> {task.url}</p>
              </li>
            ))}
          </ul>
          <button
            className="close-modal-button"
            onClick={closeTasksModal} // Close the tasks modal
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewInternships;
