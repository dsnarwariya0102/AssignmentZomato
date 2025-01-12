import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      const newItem = {
        product_id: Date.now(),
        ...action.payload,
      };

      state.push(newItem);
    },
    deleteItem: (state, action) => {
      const index = state.findIndex(item => item.product_id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});
export const {addCart, deleteItem} = cartSlice.actions;
export default cartSlice.reducer;
