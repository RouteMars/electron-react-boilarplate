import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { CommonType } from '@renderer/redux/type/commonType';

interface CommonState {
  testData: string;
}

const initialState: CommonState = {
  testData: '',
};

const commonSlice = createSlice({
  name: CommonType.NAME,
  initialState,
  reducers: {
    setTestData(state, action: PayloadAction<string>) {
      state.testData = action.payload;
    },
  },
});

export const { setTestData } = commonSlice.actions;

export default commonSlice.reducer;
