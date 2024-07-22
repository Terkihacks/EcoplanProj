import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/frontend.css';

const UserRegistration = () => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [officeno, setOfficeno] = useState('');
  const [designation, setDesignation] = useState('');
  const [extensionno, setExtensionno] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      toast.error("Password and Confirm Password do not match");
      return;
    }

    try {
      const response = await fetch('http://localhost/ecoplanbackendapi/userRegistration.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, department, officeno, designation, extensionno, email, password }),
      });
      const data = await response.json();

      console.log(data);

        if (response.status === 200) {
      toast.success(data.message);
      navigate('/login'); 
    } 
    else {
        toast.warn(data.message);
    }
} catch (error) {
    console.error('Error:', error);
    toast.error('An error occurred');
}
  };

  return (
    <div className="form-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name eg John Doe"
            required
          />
        </div>
        <div>
          <label>Department</label>
          <input
            type="text"
            name="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Enter your department eg Finance"
            required
          />
        </div>
        <div>
          <label>Office Number</label>
          <input
            type="text"
            name="officeno"
            value={officeno}
            onChange={(e) => setOfficeno(e.target.value)}
            placeholder="Enter your office number eg 910"
            required
          />
        </div>
        <div>
          <label>Designation</label>
          <input
            type="text"
            name="designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="Enter your designation eg Secretary"
            required
          />
        </div>
        <div>
          <label>Extension Number</label>
          <input
            type="text"
            name="extensionno"
            value={extensionno}
            onChange={(e) => setExtensionno(e.target.value)}
            placeholder="Enter your extension number eg 333-318"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email eg johndoe.go.ke"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmpassword"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit"> Register → </button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default UserRegistration;
