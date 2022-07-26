import React, { FC, ReactElement, useEffect, useContext } from 'react';
import { UserContext } from '../../utilities/UserContext';

const Login: FC = (): ReactElement => {
  const { user, setUser } = useContext(UserContext);

  return (
    <section className="bg-white items-center border-none rounded-lg mt-10 mx-0 mb-0 pt-5 px-0 pb-7 w-80 shadow-sm text-center">
      <a href={`${process.env.REACT_APP_API_ENDPOINT}/api/user/auth/facebook`} className="text-2xl font-bold underline text-blue-600">
        Login with Facebook
      </a>
    </section>
  );
};

export default Login;
