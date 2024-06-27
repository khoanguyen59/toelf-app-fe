import {
  BOTTOM_NAVIGATION_HEIGHT,
} from '@/constants/css.constants';
import { I18N } from '@/enums/i18n.enum';
import { MenuNames } from '@/routers/RouteCategoryName.enum';
import { CustomRoute, guardRoutes } from '@/routers/routes';
import { theme } from '@/themes/MolunderTheme';
import { Box, CssBaseline, useMediaQuery } from '@mui/material';
import { isMatchPath } from '@utils/url.utils';
import { observer } from 'mobx-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { useStore } from '@/RootStoreProvider';
import useIframeState from '@hooks/useIframeState';

const GuardLayout = () => {
  const { authenticationStore } =
    useStore();
  const isInIframe = useIframeState();  
  const isWeb = useMediaQuery(theme.breakpoints.up('sm'));
  const { t } = useTranslation();
  const accessibleRoutes = guardRoutes;

  const menuItems = accessibleRoutes
    .filter((route: CustomRoute) =>
      route.isMenu
    );
  const guardedRoutes = accessibleRoutes.filter((route: CustomRoute) =>
    !route.isLayout
  );

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          minHeight: '100vh',
          backgroundColor: (theme) => theme.palette.background.container,
        }}
      >
        <CssBaseline />
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            mt: 0,
            mb: !isWeb ? `${BOTTOM_NAVIGATION_HEIGHT}px` : 0,
          }}
        >
          <Routes>
            {guardedRoutes.map((item: CustomRoute) => (
              <Route
                key={item.path}
                path={item.path}
                Component={item.component}
              />
            ))}
            {/* <Redirect to='/my-projects' /> */}
          </Routes>
        </Box>
      </Box>
    </>
  );
};

export default observer(GuardLayout);
