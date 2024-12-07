import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SubmitTask.css";

const SubmitTask = () => {
  const [enrolledInternships, setEnrolledInternships] = useState([]); // Internships list
  const [selectedInternship, setSelectedInternship] = useState(""); // Selected internship
  const [file, setFile] = useState(null); // File to upload
  const [showForm, setShowForm] = useState(false); // Toggle form visibility

  // Fetch enrolled internships for the logged-in user
  useEffect(() => {
    const userId = 1; // Replace with logged-in user's ID
    axios
      .get(`http://localhost:8080/api/enrollments/user/${userId}`)
      .then((response) => {
        console.log("Fetched Enrolled Internships:", response.data);
        setEnrolledInternships(response.data);
      })
      .catch((error) => console.error("Error fetching internships:", error));
  }, []);

  // Set the selected internship and show the file upload form
  const handleInternshipSelect = (internshipId) => {
    console.log("Selected Internship ID:", internshipId);
    setSelectedInternship(internshipId);
    setShowForm(true); // Show form once internship is selected
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a task submission
    console.log("Task submitted:", { file, selectedInternship });

    // Show success message
    alert("Task submitted successfully!");

    // Close the form after submission
    setShowForm(false);
  };

  return (
    <div className="submit-task-container">
      <h2>Submit Task</h2>
      <table className="internship-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Internship</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {enrolledInternships.map((internship, index) => (
            <tr key={internship.id}>
              <td>{index + 1}</td>
              <td>{internship.title}</td>
              <td>
                <button onClick={() => handleInternshipSelect(internship.id)}>
                  Submit Task
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <h3>Upload File</h3>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default SubmitTask;
