import { Navigate, Route, RouteProps } from 'react-router';
import UserType from '../../utilities/UserType';
import { useContext } from 'react';
import { UserContext } from '../../utilities/UserContext';

export type ProtectedRouteProps = {
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({ authenticationPath, outlet }: ProtectedRouteProps) {
  const { user, setUser } = useContext(UserContext);
  if (user) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
