import React from 'react';
import './ManageApplications.css'; // Add custom styles for tables and buttons

const ManageApplications = () => {
    const submissions = [
        {
            user_id: 1,
            user_name: 'Ashu',
            internship_name: 'Data Science',
            submitted_file: '/uploads/chethana.pdf',
        },
        {
            user_id: 1,
            user_name: 'Ashu',
            internship_name: 'Artificial Intelligence',
            submitted_file: '/uploads/Home_Assignments_12_(1)[1].pdf',
        },
        {
            user_id: 1,
            user_name: 'Ashu',
            internship_name: 'Networking',
            submitted_file: '/uploads/NET LAB EXAM EXECUTION satya.pdf',
        },
        {
            user_id: 1,
            user_name: 'Ashu',
            internship_name: 'Cloud Internship',
            submitted_file: '/uploads/NET Lab Exam Execution.pdf',
        },
    ];

    const handleFileOpen = (filePath) => {
        // Open the PDF file in a new browser tab
        window.open(filePath, '_blank');  
    };

    return (
        <div className="manage-applications">
            <h1>Submissions</h1>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>Internship Name</th>
                        <th>Submitted File</th>
                    </tr>
                </thead>
                <tbody>
                    {submissions.map((submission, index) => (
                        <tr key={index}>
                            <td>{submission.user_id}</td>
                            <td>{submission.user_name}</td>
                            <td>{submission.internship_name}</td>
                            <td>
                                <button onClick={() => handleFileOpen(submission.submitted_file)}>
                                    Open PDF
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageApplications;
