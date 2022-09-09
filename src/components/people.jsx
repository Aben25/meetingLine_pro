import React from 'react';
import { useAuth } from '../hooks/useAuth';
const People = () => {

  const {user} = useAuth();
  return (
    <div>
      <h1>People</h1>
    </div>
  );
}

export default People;
