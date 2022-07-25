import React, { FC, ReactElement, useEffect } from 'react';

const Profile: FC = (): ReactElement => {
  useEffect(() => {
    console.log('Loaded profile component');
  }, []);

  return <p>Hello Profile component</p>;
};

export default Profile;
