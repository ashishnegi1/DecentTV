import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile({ user }) {
  const navigate = useNavigate();

  if (!user) {
    return (
      <div>
        <h1>Please login to view your profile.</h1>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {user}!</h1>
    </div>
  );
}

export default Profile;
