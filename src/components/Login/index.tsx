import React, { FC, ReactElement, useEffect } from 'react';

const Login: FC = (): ReactElement => {
  useEffect(() => {
    console.log('Loaded Login component');
  }, []);

  return <input type="button">Login with Facebook</input>;
};

export default Login;
