import React, { FC, ReactElement, useEffect, useContext } from 'react';
import { UserContext } from '../../utilities/UserContext';
import { Link } from 'react-router-dom';

const Nav: FC = (): ReactElement => {
  const { user, setUser } = useContext(UserContext);

  return (
    <nav className="top-0 h-14 w-full flex justify-end bg-blue-600 drop-shadow-lg">
      <ul className="list-none flex flex-row items-center mr-2 md:mr-40">
        <li className="mr-4 text-white font-bold no-underline duration-300 hover:scale-125">
          <Link to="/">Home</Link>
        </li>
        <li className="mr-4 text-white font-bold no-underline duration-300 hover:scale-125">
          <Link to="/friends">Friends</Link>
        </li>
        <li className="hidden md:inline mr-4 text-white font-bold no-underline duration-300 hover:scale-125">
          <Link to={`/profile/${user?.id}`}>{user?.firstname}</Link>
        </li>
        <Link to={`/profile/${user?.id}`} className="h-14 w-14">
          <img src={user?.avatar_URL} className="rounded-full h-full"></img>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
