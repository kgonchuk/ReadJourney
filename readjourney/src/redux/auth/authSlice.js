// import { createSlice, isAnyOf } from "@reduxjs/toolkit";
// import { register, logIn, logOut, refreshUser } from "../auth/authOperation";

// export const handleAuthPending = (state) => {
//   state.isFetching = true;
// };
// export const handleAuthFullfiled = (state, { payload }) => {
//   state.isFetching = false;
//   state.isLoggedIn = true;
//   state.user = payload.user;
//   state.token = payload.token;
// };

// export const handleAuthRejected = (state, { payload }) => {
//   state.isFetching = false;
//   state.error = payload;
// };

// const initialState = {
//   user: { name: null, email: null },
//   error: null,
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
//   isFetching: false,
// };
// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(logOut.fulfilled, (state) => {
//         state.isFetching = false;
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(refreshUser.pending, (state) => {
//         state.isRefreshing = true;
//       })
//       .addCase(refreshUser.fulfilled, (state, { payload }) => {
//         state.user = payload;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.rejected, (state, { payload }) => {
//         state.isRefreshing = false;
//         state.error = payload;
//       })
//       .addMatcher(
//         isAnyOf(register.pending, logIn.pending, logOut.pending),
//         handleAuthPending
//       )
//       .addMatcher(
//         isAnyOf(register.fulfilled, logIn.fulfilled),
//         handleAuthFullfiled
//       )
//       .addMatcher(
//         isAnyOf(register.rejected, logIn.rejected, logOut.rejected),
//         handleAuthRejected
//       );
//   },
// });

// export const authReducer = authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./authOperation";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(logIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(logOut.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
