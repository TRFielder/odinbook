import React, { FC, ReactElement, useEffect, useContext } from 'react';
import { UserContext } from '../../../utilities/UserContext';

const ProfileBanner: FC = (): ReactElement => {
  const { user, setUser } = useContext(UserContext);
  return (
    <section className="bg-white items-center border-none rounded-lg mt-10 mx-0 mb-0 pt-5 px-0 pb-7 w-4/5 shadow-sm text-center flex flex-col md:flex-row">
      <img src={user?.avatar_URL} className="m-4"></img>
      <div className="md:self-start">
        <h1 className="font-bold text-2xl mt-4">
          {user?.firstname} {user?.surname}
        </h1>
        <h2>### friends</h2>
      </div>
    </section>
  );
};

export default ProfileBanner;
