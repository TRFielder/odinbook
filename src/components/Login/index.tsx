import React, { FC, ReactElement, useEffect } from 'react';

const Login: FC = (): ReactElement => {
  useEffect(() => {
    console.log('Loaded Login component');
  }, []);

  return (
    <section className="bg-white items-center border-none rounded-lg mt-10 mx-0 mb-0 pt-5 px-0 pb-7 w-80 shadow-sm text-center">
      <a href="https://localhost:3000/api/user/auth/facebook" className="text-2xl font-bold underline text-blue-600">
        Login with Facebook
      </a>
    </section>
  );
};

export default Login;
