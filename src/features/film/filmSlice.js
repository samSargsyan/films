import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchFilm, fetchFilms } from './filmAPI';

const initialState = {
  loading: false,
  filmList: [],
  filmName: ''
};

export const getFilms = createAsyncThunk(
  'films/fetchFilms',
  async (data) => {
    const response = await fetchFilms(data);
    return response.results;
  }
);

export const getFilm = createAsyncThunk(
  'films/fetchFilm',
  async (data) => {
    const response = await fetchFilm(data);
    return response.results;
  }
);

export const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    filmReducer: (state,action) => {
      state.filmName = action.payload.film;
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFilms.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFilms.fulfilled, (state, action) => {
        state.loading = false;
        state.filmList = action.payload;
      })
      .addCase(getFilms.rejected, (state, action) => {
        state.loading = false;
        console.log('something went wrong');
      })
      .addCase(getFilm.fulfilled, (state, action) => {
        state.loading = false;
        state.filmList = action.payload;
      });
  },
});

export const selectFilms = (state) => state.film.filmList;
export const selectFilm = (state) => state.film.filmList.filter((item)=>{
  return item.title === state.film.filmName;
});

export const { filmReducer } = filmSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

// We can also write thunks by hand, which may contain both sync and async logic.
// // Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default filmSlice.reducer;
