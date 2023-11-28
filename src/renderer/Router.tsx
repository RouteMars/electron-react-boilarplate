import React, { ReactElement } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Example from './page/Example';

const Router = (): ReactElement => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Example />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
