import React, { FC, ReactElement, useContext, useEffect } from 'react';
import { UserContext } from '../../utilities/UserContext';

const Profile: FC = (): ReactElement => {
  useEffect(() => {
    console.log('Loaded profile component');
  }, []);

  return (
    <div>
      <h2>Profile component</h2>
    </div>
  );
};

export default Profile;
