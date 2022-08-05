import React, { FC, ReactElement, useEffect, useContext } from 'react';
import { UserContext } from '../../utilities/UserContext';
import { Link } from 'react-router-dom';

const Nav: FC = (): ReactElement => {
  const { user, setUser } = useContext(UserContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/friends">
            <a>Friends</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/profile">
            <a>{user?.firstname}</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
