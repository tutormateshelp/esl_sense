import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  characters: [
    { Name: "Character1", isValid: false },
    { Name: "Character2", isValid: false },
    { Name: "Character3", isValid: false },
  ],
};

export const planYourDaySlice = createSlice({
  name: "planYourDay",
  initialState,
  reducers: {
    setCharacter: (state, action) => {
      console.log(action.payload);
      console.log("before Update: ", state.characters[0]);
      const updatedCharacters = action.payload;
      updatedCharacters.forEach((updatedCharacter, index) => {
        state.characters[index].Name = updatedCharacter.name;
        state.characters[index].isValid = updatedCharacter.isValid;
      });

      console.log("after Update: ", state.characters[0]);
    },
    increment: (state, action) => {
      console.log(state.count);
      state.count += action.payload;
      console.log(state.count);
    },
  },
});

export const { setCharacter, increment } = planYourDaySlice.actions;

export const choosenPerson = (state, sequence) =>
  state.planYourDay.value(sequence);

export const selectCount = (state) => state.planYourDay.count;
export const selectCharacters = (state) => state.planYourDay.characters;

export default planYourDaySlice.reducer;

// export default planYourDaySlice.reducer;
