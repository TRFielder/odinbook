import React, { FC, ReactElement, useContext, useEffect } from 'react';
import { UserContext } from '../../utilities/UserContext';

// Component imports
import Feed from '../Feed/Feed';
import ProfileBanner from './ProfileBanner/ProfileBanner';

const Profile: FC = (): ReactElement => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    authenticate();
  }, []);

  const reportUser = () => {
    console.log(`My name is ${user?.firstname} ${user?.surname}`);
  };
  // warm-beyond-87416.herokuapp.com

  const authenticate = async () => {
    const response = await fetch('https://warm-beyond-87416.herokuapp.com/api/user/current', { credentials: 'include', mode: 'cors' });
    const result = await response.json();
    setUser({
      id: result._id,
      username: result.username,
      firstname: result.firstname,
      surname: result.surname,
      avatar_URL: result.avatar_URL,
    });
  };

  return (
    <main className="mt-4 w-4/5 flex flex-col items-center">
      <ProfileBanner />
      <Feed />
    </main>
  );
};

export default Profile;
