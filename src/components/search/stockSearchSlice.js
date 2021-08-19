import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
 

export const updateOptionActionCreator = (option) => {




return {type: 'stockSearch/update', payload: option}


}




const initialState = {

selectedOption: '',


  }


const stockSearchSlice = createSlice({
  name: "stockSearch",
  initialState,
  reducers: {
    update(state,action){

        state.selectedOption = action.payload;
        
        

    }
  },
});

export default stockSearchSlice.reducer;
export const selectSelectedOption = (state) => state.stockSearch.selectedOption;

