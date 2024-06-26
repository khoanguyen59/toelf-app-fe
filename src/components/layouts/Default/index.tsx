import { defaultRoutes } from '@/routers/routes';
import { theme } from '@/themes/MolunderTheme';
import { useMediaQuery } from '@mui/material';
import { observer } from 'mobx-react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import PageNotFound from '@/pages/PageNotFound';

export default observer(() => {
  const isWeb = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      <Routes>
        {defaultRoutes
          .filter((item: any) => !item.isLayout)
          .map((item: any) => {
            return (<Route
              key={item.path}
              path={item.path}
              Component={item.component}
            />)
          })}
        {/* <Route component={PageNotFound} /> */}
      </Routes>
    </>
  );
});
