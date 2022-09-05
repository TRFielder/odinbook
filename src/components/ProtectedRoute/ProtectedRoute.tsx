import { Navigate, Route, RouteProps } from 'react-router';
import UserType from '../../utilities/UserType';
import { useContext } from 'react';
import { UserContext } from '../../utilities/UserContext';

export type ProtectedRouteProps = {
  authenticationPath: string;
  outlet: JSX.Element;
};

const getUser = async () => {
  const { user, setUser } = useContext(UserContext);

  const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/user/current`, { credentials: 'include', mode: 'cors' });
  const result = await response.json();
  if (response.status !== 403) {
    setUser({
      _id: result._id,
      username: result.username,
      firstname: result.firstname,
      surname: result.surname,
      avatar_URL: result.avatar_URL,
    });
    return true;
  } else return false;
};

export default function ProtectedRoute({ authenticationPath, outlet }: ProtectedRouteProps) {
  const { user, setUser } = useContext(UserContext);
  if (user) {
    return outlet;
  } else {
    let authStatus;
    getUser().then((value) => (authStatus = value));
    if (user) return outlet;
    else return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
