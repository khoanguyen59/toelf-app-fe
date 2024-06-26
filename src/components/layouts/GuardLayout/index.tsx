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
        case MenuNames.REGISTER_SUPPLY:
          route.title = t(MENU_OFFER);
          break;
        case MenuNames.REGISTER_REQUEST:
          route.title = t(MENU_REQUEST);
          break;
        case MenuNames.MY_PROJECTS:
          route.title = t(MENU_MY_PROJECTS);
          break;
        case MenuNames.TRANSACTION_IN_PROGRESS:
          route.title = t(MENU_IN_PROGRESS);
          break;
        case MenuNames.TRANSACTION_COMPLETED:
          route.title = t(MENU_COMPLETED);
          break;
        case MenuNames.ANALYSIS_REPORT:
          route.title = t(MENU_REPORTING);
          break;
        case MenuNames.ANALYSIS_DATA_EXTRACTION:
          route.title = t(MENU_DATA_EXTRACTION);
          break;
        case MenuNames.SETTING_MATERIAL:
          route.title = t(MENU_MATERIALS);
          break;
        case MenuNames.SETTING_HUB:
          route.title = t(MENU_LOCATIONS);
          break;
        case MenuNames.SETTING_CO2EMISSION:
          route.title = t(MENU_CO2_EMISSION);
          break;
        case MenuNames.SETTING_TRANSPORT:
          route.title = t(MENU_TRANSPORT);
          break;
        case MenuNames.SETTING_PROJECTS:
          route.title = t(MENU_PROJECTS);
          break;
        case MenuNames.SETTING_COMPANIES:
          route.title = t(MENU_COMPANIES);
          break;
        case MenuNames.SETTING_EMISSIONS_CALCULATOR:
          route.title = t(MENU_EMISSIONS_CALCULATOR);
          break;
        case MenuNames.SETTING_USERS:
          route.title = t(MENU_USERS);
          break;
        case MenuNames.DECLARATION_OVERVIEW:
          route.title = t(MENU_DECLARATIONS);
          break;
        case MenuNames.DECLARATION_CUSTOMER:
          route.title = t(MENU_CUSTOMERS);
          break;
        case MenuNames.SETTING_COMPANY:
          route.title = t(MENU_COMPANY);
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
