import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

// This comes from backend
const authors = [
  {
    name: 'Charles',
    gender: 'Male',
    age: 23,
    books: [
      { name: 'Hamlet', type: 'Hardcover' },
      { name: 'Wuthering Heights', type: 'Paperback' },
    ],
  },
  {
    name: 'Emily',
    gender: 'Female',
    age: 18,
    books: [{ name: 'Hamlet', type: 'Paperback' }],
  },
  { name: 'Jonathan', gender: 'Male', age: 45, books: null },
  {
    name: 'William',
    gender: 'Male',
    age: 40,
    books: [
      { name: 'React: The Ultimate Guide', type: 'Hardcover' },
      { name: "Gulliver's Travels", type: 'Hardcover' },
      { name: 'Jane Eyre', type: 'Paperback' },
      { name: 'Great Expectations', type: 'Hardcover' },
    ],
  },
  {
    name: 'Charlotte',
    gender: 'Female',
    age: 40,
    books: [{ name: 'Great Expectations', type: 'Hardcover' }],
  },
  {
    name: 'Jane',
    gender: 'Female',
    age: 64,
    books: [
      { name: 'Little Red Riding Hood', type: 'Hardcover' },
      { name: 'The Hobbit', type: 'Ebook' },
    ],
  },
];

const initialState = {
  isLoading: false,
  error: null,
  authors,
  sortBy: null,
  types: [],
  filters: {
    type: 'All',
  },
};

export const slice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    resetBook(state) {
      state.book = null;
    },

    getBooksSuccess(state, action) {
      state.isLoading = false;
      state.books = action.payload;
    },

    // GET BOOK
    getBookSuccess(state, action) {
      state.isLoading = false;
      state.book = action.payload;
    },

    filterBooks(state, action) {
      state.filters.type = action.payload.type;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { startLoading, filterBooks, getBookSuccess, getBooksSuccess, resetBook, hasError } = slice.actions;
