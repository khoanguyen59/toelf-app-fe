import RouterComponent from '@/routers';
import { observer } from 'mobx-react';
import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <RouterComponent />
      <GlobalStyles />
    </>
  );
}

export default observer(App);
