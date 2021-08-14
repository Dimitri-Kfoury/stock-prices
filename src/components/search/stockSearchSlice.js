import { createSlice } from '@reduxjs/toolkit'



export const updateOptionActionCreator = (option) => {




return {type: 'stockSearch/update', payload: option}


}

const initialState = {

selectedOption: 'AAPL',
isDisabled: false,

  }


const stockSearchSlice = createSlice({
  name: "stockSearch",
  initialState,
  reducers: {
    update(state,action){

        state.selectedOption = action.payload;
        state.isDisabled = false;
        

    }
  },
});

export default stockSearchSlice.reducer;
export const selectSelectedOption = (state) => state.stockSearch.selectedOption;
export const selectIsDisabled = (state) => state.stockSearch.isDisabled;

