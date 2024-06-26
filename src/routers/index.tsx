import DefaultLayout from '@components/layouts/Default';
import GuardLayout from '@components/layouts/GuardLayout';
import { Box, CircularProgress } from '@mui/material';
import { retrieveFromCookie, retrieveFromStorage } from '@utils/storage.util';
import { observer } from 'mobx-react';
import React, { useContext } from 'react';
import {
  Route,
  Routes,
  useNavigate,
  matchPath,
} from 'react-router-dom';
import { MenuNames } from './RouteCategoryName.enum';
import {
  CustomRoute,
  defaultRoutes,
  guardRoutes,
  publicRoutes,
} from './routes';
import { useStore } from '@/RootStoreProvider';
import { useQuery } from '@utils/api.utils';

const Router = () => {
  const { authenticationStore } = useStore();
  // const navigate = useNavigate();
  // const redirectTo = useQuery().get('redirectTo');
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const [publicRouters, setPublicRouters] = React.useState<CustomRoute[]>();

  const notGuardRoutes = guardRoutes.filter((r) => !r.isGuarded);

  const logout = async (): Promise<void> => {
    await authenticationStore.logout(history);
  };

  const checkAuth = React.useCallback(async () => {
    if (!authenticationStore.loggedUser) {
      setPublicRouters([...publicRoutes, ...notGuardRoutes]);
    } else {
      setPublicRouters(publicRoutes);
    }

    const accessToken =
      retrieveFromStorage('accessToken') || retrieveFromCookie('accessToken');
    const refreshToken =
      retrieveFromStorage('refreshToken') || retrieveFromCookie('refreshToken');
    const noAuthRoute = [
      ...defaultRoutes.filter((r) => r.name !== MenuNames.LOGIN),
      ...publicRoutes,
      ...notGuardRoutes,
    ];

    const failedAuth =
      (!accessToken || !refreshToken);

    // if (failedAuth) {
    //   const isPathMatched =
    //     guardRoutes.map((r) => r.path).includes(history.location.pathname) ||
    //     guardRoutes.find((r) => matchPath(history.location.pathname, r.path));

    //   // Set a redirected url so that user can go into guarded route if they successfully login
    //   if (!authenticationStore.loggedUser && isPathMatched)
    //     authenticationStore.setRedirectUrl(history.location.pathname);
    // }

    if ((accessToken || refreshToken) && !authenticationStore.loggedUser) {
      const storageLoggedUser = retrieveFromCookie('loggedUser');
      const visitedAsGuest = storageLoggedUser
        ? JSON.parse(storageLoggedUser)?.visitedAsGuest
        : false;
      const customerDeclarationLink = storageLoggedUser
        ? JSON.parse(storageLoggedUser)?.customerDeclarationLink
        : null;

      if (
        visitedAsGuest &&
        customerDeclarationLink
      ) {
        setIsChecked(true);
        return logout();
      }

      await authenticationStore
        .checkToken(
          accessToken,
          refreshToken,
          visitedAsGuest,
          customerDeclarationLink
        )
        .then(() => {
          // if (redirectTo) navigate(redirectTo);
        });
    }

    setIsChecked(true);
  }, [authenticationStore, authenticationStore.loggedUser, history]);

  React.useEffect(() => {
    if (!navigator.onLine) {
      const loggedUser =
        retrieveFromStorage('loggedUser') || retrieveFromCookie('loggedUser');
    }
  }, []);

  React.useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <>
      {isChecked ? (
        <Routes>
          {/* Public route */}
          {(publicRouters || [])
            .filter((item: any) => !item.isLayout)
            .map((item: any) => (
              <Route
                key={item.path}
                path={item.path}
                Component={item.component}
              />
            ))}
          {/* Guard route */}
          {(authenticationStore?.loggedUser != null || !navigator.onLine) && (
            <Route
              path='/*'
              Component={(props: any) => <GuardLayout {...props} exact />}
            />
          )}
          {/* No guard route */}
          <Route
            path='*'
            Component={(props: any) => <DefaultLayout {...props} exact />}
          />
        </Routes>
      ) : (
        <Box className='center-spin'>
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default observer(Router);
