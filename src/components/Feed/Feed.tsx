import React, { FC, ReactElement, useEffect, useContext } from 'react';
import { UserContext } from '../../utilities/UserContext';

const Feed: FC = (): ReactElement => {
  return (
    <section className="bg-white items-center border-none rounded-lg mt-10 mx-0 mb-0 pt-5 px-0 pb-7 w-4/5 shadow-sm text-center">
      <p>This is where my posts would go... if I had any</p>
    </section>
  );
};

export default Feed;
