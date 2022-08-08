import React, { FC, ReactElement, useContext, useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { UserContext } from '../../utilities/UserContext';

// Component imports
import Feed from '../Feed/Feed';

const PostLogin: FC = (): ReactElement => {
  const { user, setUser } = useContext(UserContext);
  const id = useParams();

  useEffect(() => {
    getUser();
  }, []);

  // warm-beyond-87416.herokuapp.com

  const getUser = async () => {
    const response = await fetch(`https://warm-beyond-87416.herokuapp.com/api/user/current`, { credentials: 'include', mode: 'cors' });
    const result = await response.json();
    setUser({
      id: result._id,
      username: result.username,
      firstname: result.firstname,
      surname: result.surname,
      avatar_URL: result.avatar_URL,
    });
  };

  return user ? <Navigate to={`/profile/${user?.id}`} /> : <p>Loading</p>;
};

export default PostLogin;
