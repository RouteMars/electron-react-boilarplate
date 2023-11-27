import Common from '@util/common';
import React, { ReactElement, useEffect } from 'react';

const First = (): ReactElement => {
  useEffect(() => {
    Common.debug('First~!');
  }, []);

  return (
    <div>
      <h1>💖 Hello World!</h1>
    </div>
  );
};

export default First;
