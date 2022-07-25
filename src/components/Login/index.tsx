import React, { FC, ReactElement, useEffect } from 'react';

const Login: FC = (): ReactElement => {
  useEffect(() => {
    console.log('Loaded Login component');
  }, []);

  return <a href="https://localhost:3000/api/user/auth/facebook">Login with Facebook</a>;
};

export default Login;
