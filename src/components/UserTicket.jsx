import React from 'react'
import '../styles/frontend.css';
const UserTicket = () => {
  return (
    <>
       <div className="ticket-card">
        <div class="ticket-header">
            <h2>Ticket ID: 12345</h2>
        </div>
        <div class="ticket-body">
            <p><strong>Name:</strong> John Baraka</p>
            <p><strong>Department:</strong> IT Support</p>
            <p><strong>Office No:</strong> 101</p>
            <p><strong>Problem Description:</strong> Unable to access the company network.</p>
        </div>
        <div class="ticket-footer">
            <button class="assign-btn">Assign</button>
        </div>
    </div>
    </>
  )
}

export default UserTicket
