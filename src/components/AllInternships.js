import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllInternships.css";

const AllInternships = () => {
  const [internships, setInternships] = useState([]); // Holds all internships
  const [selectedInternship, setSelectedInternship] = useState(null); // Holds the selected internship details
  const [message, setMessage] = useState(""); // Success/error messages for applying to internships

  // Fetch all internships from the backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/internships") // Adjust the URL if needed
      .then((response) => {
        setInternships(response.data); // Set fetched internships in state
      })
      .catch((error) => {
        console.error("Error fetching internships:", error);
      });
  }, []);

  // Fetch internship details by ID
  const fetchInternshipDetails = (id) => {
    axios
      .get(`http://localhost:8080/api/internships/${id}`) // Adjust the endpoint
      .then((response) => {
        setSelectedInternship(response.data); // Set the selected internship details
      })
      .catch((error) => {
        console.error("Error fetching internship details:", error);
      });
  };

  const applyForInternship = (id) => {
    const confirmApply = window.confirm("Do you want to apply for this internship?");
    if (confirmApply) {
      const userId = 1; // Replace with actual logged-in user ID from context/state
      axios
        .post("http://localhost:8080/api/enrollments", { internshipId: id, userId })
        .then((response) => {
          // Check for success message from backend
          if (response.status === 200) {
            setMessage("Successfully applied for the internship!");
          }
        })
        .catch((error) => {
          console.error("Error applying for internship:", error);
          if (error.response && error.response.status === 400) {
            // Display specific error if already enrolled
            setMessage(error.response.data); // "You are already enrolled in this internship."
          } else {
            setMessage("Failed to apply for the internship. Please try again.");
          }
        });
      setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
    }
  };

  return (
    <div className="internship-container">
      <h2 className="page-title">All Internships</h2>
      {message && <div className="message-box">{message}</div>} {/* Display success/error messages */}
      <div className="internship-table-container">
        <table className="internship-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {internships.length > 0 ? (
              internships.map((internship) => (
                <tr key={internship.id}>
                  <td>{internship.id}</td>
                  <td>{internship.title}</td>
                  <td>
                    <button
                      className="details-btn"
                      onClick={() => fetchInternshipDetails(internship.id)}
                    >
                      Details
                    </button>
                    <button
                      className="apply-btn"
                      onClick={() => applyForInternship(internship.id)}
                    >
                      Apply
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No internships available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Show selected internship details */}
      {selectedInternship && (
        <div className="details-container">
          <h3>Internship Details</h3>
          <div className="details-card">
            <p><strong>ID:</strong> {selectedInternship.id}</p>
            <p><strong>Title:</strong> {selectedInternship.title}</p>
            <p><strong>Company:</strong> {selectedInternship.company}</p>
            <p><strong>Location:</strong> {selectedInternship.location}</p>
            <p><strong>Description:</strong> {selectedInternship.description}</p>
            <p><strong>Start Date:</strong> {new Date(selectedInternship.startDate).toLocaleDateString()}</p>
            <p><strong>End Date:</strong> {new Date(selectedInternship.endDate).toLocaleDateString()}</p>
            <p><strong>Stipend:</strong> {selectedInternship.stipend}</p>
            <button className="close-btn" onClick={() => setSelectedInternship(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllInternships;
