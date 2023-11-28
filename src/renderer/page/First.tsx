import { setTestData } from '@renderer/redux/common/common.slice';
import { useAppDispatch, useAppSelector } from '@renderer/redux/store';
import Common from '@util/common';
import React, { ReactElement, useEffect } from 'react';

const First = (): ReactElement => {
  const dispatch = useAppDispatch();

  const { testData } = useAppSelector((state) => {
    return state.common;
  });

  const setTest = () => {
    dispatch(setTestData('test 1111'));
  };

  useEffect(() => {
    Common.debug('====================');
    Common.debug(testData);
  }, [testData]);

  useEffect(() => {
    Common.debug('====================');
    Common.debug('First~!');
    setTest();
  }, []);

  return (
    <div>
      <h1>💖 Hello World!</h1>
    </div>
  );
};

export default First;
