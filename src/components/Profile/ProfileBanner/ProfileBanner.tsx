import React, { FC, ReactElement, useEffect, useContext } from 'react';
import { UserContext } from '../../../utilities/UserContext';
import UserType from '../../../utilities/UserType';

const ProfileBanner = ({ _id, username, firstname, surname, friends, avatar_URL, about_text }: UserType) => {
  const { user, setUser } = useContext(UserContext);
  return (
    <section className="bg-white items-center border-none rounded-lg mt-10 mx-0 mb-0 pt-5 px-0 pb-7 w-4/5 shadow-sm text-center flex flex-col md:flex-row">
      <img src={avatar_URL} className="m-4"></img>
      <div className="md:self-start">
        <h1 className="font-bold text-2xl mt-4">
          {firstname} {surname}
        </h1>
        <h2>{`${friends?.length} friends`}</h2>
      </div>
      <p className="md:ml-40 italic text-sm">{about_text}</p>
    </section>
  );
};

export default ProfileBanner;
