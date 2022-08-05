import React, { FC, ReactElement, useEffect, useContext } from 'react';
import { UserContext } from '../../utilities/UserContext';
import { Link } from 'react-router-dom';

const Nav: FC = (): ReactElement => {
  const { user, setUser } = useContext(UserContext);

  return (
    <nav className="top-0 h-16 w-full flex justify-end">
      <ul className="list-none flex flex-row items-center mr-5 md:mr-40">
        <li className="mr-1 text-blue-600 font-bold no-underline">
          <Link to="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="mr-1 text-blue-600 font-bold no-underline">
          <Link to="/friends">
            <a>Friends</a>
          </Link>
        </li>
        <li className="mr-1 text-blue-600 font-bold no-underline">
          <Link to="/profile">
            <a>{user?.firstname}</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
