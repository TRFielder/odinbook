import React, { FC, ReactElement, useContext, useEffect } from 'react';
import { UserContext } from '../../utilities/UserContext';

// Component imports
import Nav from '../Nav';

const Profile: FC = (): ReactElement => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    console.log('Loaded Login component');
    authenticate();
  }, []);

  const reportUser = () => {
    console.log(`My name is ${user?.firstname} ${user?.surname}`);
  };

  const authenticate = async () => {
    const response = await fetch('https://localhost:3000/api/user/current', { credentials: 'include', mode: 'cors' });
    const result = await response.json();
    console.log(result);
    setUser({
      id: result._id,
      username: result.username,
      firstname: result.firstname,
      surname: result.surname,
      avatar_URL: result.avatar_URL,
    });
  };

  return (
    <>
      <Nav />
      <main className="top-4">
        {user !== null ? <p>Hello, {user.firstname}</p> : <p>Hello</p>}
        <img src={user?.avatar_URL}></img>
        <button onClick={() => reportUser()}>Who am i</button>
      </main>
    </>
  );
};

export default Profile;
