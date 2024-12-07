import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EnrolledInternships.css";

const EnrolledInternships = () => {
  const [enrolledInternships, setEnrolledInternships] = useState([]); // Holds enrolled internships
  const [tasks, setTasks] = useState([]); // Holds tasks for a specific internship
  const [showTasksModal, setShowTasksModal] = useState(false); // Controls task modal visibility
  const [selectedInternship, setSelectedInternship] = useState(null); // Holds the selected internship

  // Fetch enrolled internships for a specific user
  useEffect(() => {
    const userId = 1; // Replace with actual logged-in user ID from context/state
    axios
      .get(`http://localhost:8080/api/enrollments/user/${userId}`)
      .then((response) => {
        console.log("Enrolled Internships Response:", response.data); // Debugging
        setEnrolledInternships(response.data);
      })
      .catch((error) => {
        console.error("Error fetching enrolled internships:", error);
      });
  }, []);

  // Fetch tasks for a specific internship
  const handleTaskClick = (internshipId) => {
    if (!internshipId) {
      console.error("Invalid internship ID:", internshipId);
      alert("Invalid internship ID. Please try again.");
      return;
    }

    const cleanedInternshipId = internshipId.toString().trim(); // Sanitize the internship ID
    console.log("Internship ID received:", cleanedInternshipId); // Debugging

    setSelectedInternship(cleanedInternshipId); // Set selected internship

    axios
      .get(`http://localhost:8080/api/tasks/internship/${cleanedInternshipId}`)
      .then((response) => {
        console.log("Tasks fetched:", response.data);
        setTasks(response.data);
        setShowTasksModal(true);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error.response || error.message);
        alert("Failed to fetch tasks. Please try again.");
      });
  };

  // Close the tasks modal
  const closeTasksModal = () => {
    setShowTasksModal(false);
    setTasks([]);
  };

  return (
    <div className="enrolled-internships-container">
      <h2 className="page-title">Enrolled Internships</h2>
      <div className="enrolled-internship-table-container">
        <table className="enrolled-internship-table">
          <thead>
            <tr>
              <th>Serial No</th> {/* Serial number column */}
              <th>Internship Name</th>
              <th>Enrolled Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {enrolledInternships.length > 0 ? (
              enrolledInternships.map((internship, index) => (
                <tr key={internship.id || internship.internshipId}> {/* Use correct key */}
                  <td>{index + 1}</td>
                  <td>{internship.title}</td>
                  <td>
                    {new Date(internship.enrolledDate).toLocaleDateString()}
                  </td>
                  <td>
                    <button
                      className="tasks-btn"
                      onClick={() =>
                        handleTaskClick(internship.id || internship.internshipId)
                      } // Ensure correct key
                    >
                      Tasks
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No enrolled internships available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Tasks Modal */}
      {/* Tasks Modal */}
{showTasksModal && (
  <div className="tasks-modal">
    <h3>Tasks for Internship ID: {selectedInternship}</h3>
    <ul>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <li key={task.id}>
            <strong>Question:</strong> {task.question} <br />
            <strong>URL:</strong> <a href={task.url} target="_blank" rel="noopener noreferrer">{task.url}</a>
          </li>
        ))
      ) : (
        <li>No tasks available for this internship.</li>
      )}
    </ul>
    <button className="close-modal-btn" onClick={closeTasksModal}>
      Close
    </button>
  </div>
)}

    </div>
  );
};

export default EnrolledInternships;
