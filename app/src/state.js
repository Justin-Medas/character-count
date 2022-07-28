/**
 * @state
 * Redux State Management.
 */

import {configureStore} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

const trackCharacters = createSlice({
  // name is reserved property to identify a slice instance
  name: 'inputCharacters',
  // initialState is a reserved property to track obviously, initialState
  initialState: {
    // non reserved properties passed into state as defined by developer
    characters: '',
  },
  // reducers is a reserved property in react, mini functions used to modify state
  // Each function does a small thing on a per-component basis
  reducers: {
    // entire redux state object as is when function is called, and then actions to perform thereafter
    updateCharacters: (state, action) => {
      state.characters = action.payload;
    },
  }
});

// We're exporting the entire store, which is a collection of slices.
// Using reducer key which is a reserved value in configureStore
// and passing it selection, which is the name of our slice, 
// and then using the createSlice name as the value (a little redundant)
const store = configureStore({
  // A reducer is a pure function that takes an action and the previous state of the 
  // application and returns the new state. The action describes what happened and 
  // it is the reducer's job to return the new state based on that action.
  reducer: {
    inputCharacters: trackCharacters.reducer
  }
});

// expose reducer function to be used in React Components, 
// where actions is the entire gambit of functions inside reducers
export const {updateCharacters} = trackCharacters.actions
export default store;