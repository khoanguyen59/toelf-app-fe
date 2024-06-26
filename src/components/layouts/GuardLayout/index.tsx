import {
  BOTTOM_NAVIGATION_HEIGHT,
} from '@/constants/css.constants';
import { I18N } from '@/enums/i18n.enum';
import { MenuNames } from '@/routers/RouteCategoryName.enum';
import { CustomRoute, guardRoutes, routeCategories } from '@/routers/routes';
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

  const {
    MENU_REQUEST,
    MENU_IN_PROGRESS,
    MENU_COMPLETED,
    MENU_REPORTING,
    MENU_MATERIALS,
    MENU_LOCATIONS,
    MENU_MARKETPLACE,
    MENU_CO2_EMISSION,
    MENU_TRANSPORT,
    MENU_OFFER,
    MENU_DATA_EXTRACTION,
    MENU_MY_PROJECTS,
    MENU_PROJECTS,
    MENU_COMPANIES,
    MENU_EMISSIONS_CALCULATOR,
    MENU_USERS,
    MENU_DECLARATIONS,
    MENU_CUSTOMERS,
    MENU_COMPANY,
  } = I18N;

  const accessibleRoutes = guardRoutes;

  const menuItems = accessibleRoutes
    .filter((route: CustomRoute) =>
      route.isMenu
    )
    .map((route: CustomRoute) => {
      switch (route.name) {
        case MenuNames.HOME_EXCHANGE:
          route.title = t(MENU_MARKETPLACE);
          break;
        case MenuNames.HOME_SUPPLY:
          route.title = t(MENU_OFFER);
          break;
        case MenuNames.HOME_REQUEST:
          route.title = t(MENU_REQUEST);
          break;
      }
      return route;
    });
  const guardedRoutes = accessibleRoutes.filter((route: CustomRoute) =>
    !route.isLayout
  );
  const categoriesAvailable = menuItems.map((menu) => menu.category);
  const categoryItems = routeCategories.filter((routeCategory) =>
    categoriesAvailable.includes(routeCategory.name)
  );
  const mobileMenuItems = guardRoutes.filter((route: CustomRoute) =>
    route.isMobileMenu
  );

  const isHomeRequest = (): boolean => {
    return isMatchPath('/home/request');
  };

  const isHomeSupply = (): boolean => {
    return isMatchPath('/home/supply');
  };;

  const isTransparent = isHomeRequest() || isHomeSupply();

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
