import React, { ReactElement } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import First from './page/First';

const Router = (): ReactElement => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<First />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;