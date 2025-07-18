import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Use 1 if quantity is undefined
        existingItem.quantity = action.payload.quantity ?? existingItem.quantity ?? 1;
      } else {
        state.push({
          ...action.payload,
          quantity: action.payload.quantity ?? 1  // Fallback to 1
        });
      }
    },
    
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload); // Remove item by id
    },
  },
});

export const { addItem: AddItem, removeItem: RemoveItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;