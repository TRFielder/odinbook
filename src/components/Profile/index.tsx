import React, { FC, ReactElement, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../utilities/UserContext';
import UserType from '../../utilities/UserType';

// Component imports
import Feed from '../Feed/Feed';
import ProfileBanner from './ProfileBanner/ProfileBanner';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const params = useParams();
  const [profile, setProfile] = useState<UserType>({
    _id: '',
    username: '',
    firstname: '',
    surname: '',
    friends: [],
    avatar_URL: '',
    about_text: '',
  });

  useEffect(() => {
    getProfileData();
  }, [params]);

  // warm-beyond-87416.herokuapp.com

  const getProfileData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/user/${params.id}`, { credentials: 'include', mode: 'cors' });
    const result = await response.json();
    setProfile({
      _id: result._id,
      username: result.username,
      firstname: result.firstname,
      surname: result.surname,
      friends: result.friends,
      avatar_URL: result.avatar_URL,
      about_text: result.about_text,
    });
  };

  return (
    <main className="mt-4 w-4/5 flex flex-col items-center">
      <ProfileBanner {...profile} />
      <Feed />
    </main>
  );
};

export default Profile;
