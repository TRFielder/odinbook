import React, { FC, ReactElement, useEffect } from 'react';

const Login: FC = (): ReactElement => {
  useEffect(() => {
    console.log('Loaded Login component');
  }, []);

  return (
    <section>
      <a href="https://localhost:3000/api/user/auth/facebook" className="text-2xl font-bold underline">
        Login with Facebook
      </a>
    </section>
  );
};

export default Login;
