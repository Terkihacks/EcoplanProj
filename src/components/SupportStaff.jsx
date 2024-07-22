import React from 'react'
import './frontend.css'; 

const SupportStaff = () => {
  return (
    <>
   <div class="container">
        <div class="sidebar">
            <div class="profile-info">
                <img src="" alt="Profile Picture" class="profile-picture"/>
                <h2>Welcome</h2>
                <p>Barrack Obama</p>
                <p>john.doe@example.com</p>
                <p>Support Staff</p>
                <button class="submit">Update Profile</button>

            </div>
            <div class="report-analytics">
                <h3>Report Analytics</h3>
                <div class="report-options">
                    <button onclick="downloadReport()">Download Report</button>
                    <button onclick="printReport()">Print Report</button>
                </div>
            </div>
        </div>
        <div class="main-content">
            <div class="tasks">
                <h3>Task Management</h3>
                <div class="task-list table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Task Description</th>
                                <th>Department</th>
                                <th>Office.No</th>
                                <th>Date_Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Fix network issue</td>
                                <td>Human Resource</td>
                                <td>836</td>
                                <td>10-6-24  12:35</td>
                            </tr>
                            <tr>
                                <td>Fix network issue</td>
                                <td>Human Resource</td>
                                <td>836</td>
                                <td>10-6-24  12:35</td>
                            </tr>
                            <tr>
                                <td>Fix network issue</td>
                                <td>Human Resource</td>
                                <td>836</td>
                                <td>10-6-24  12:35</td>
                            </tr>
{/*                            
                            <!-- Add more rows for additional tasks --> */}
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="tickets">
                <h3>Ticket Management</h3>
                <div class="ticket-list table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Ticket ID</th>
                                <th>Department</th>
                                <th>Subject</th>
                                <th>Office Number</th>
                                <th>Date_Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#12345</td>
                                    <td>Human Resource</td>
                                <td>Server Maintenance</td>
                                <td>836</td>
                                <td>10-6-24  12:36</td>
                                <td><button class="update-ticket">Update Ticket</button></td>
                            </tr>
                           
                            {/* <!-- Add more rows for additional tickets --> */}
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="escalations">
                <div class="escalated-tickets table-container">
                    <h3>Escalated Tickets</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Ticket</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ticket #456: Security breach</td>
                                <td>Escalated</td>
                                <td><button class="admin">Admin</button></td>
                            </tr>
                           
                            {/* <!-- Add more rows for additional escalated tickets --> Using PHP backend*/}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SupportStaff
