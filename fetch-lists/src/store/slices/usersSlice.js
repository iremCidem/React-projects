import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../thunks/fetchUsers";
import { addUser, removeUser } from "../store";

const usersSlice = createSlice({
  name: "userlist",
  initialState: {
    userlist: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      //immer kullandığımız için return etmemize gerek yok.
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userlist = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userlist.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(removeUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userlist = state.userlist.filter((user) => {
        return user.id !== action.payload.id;
      });
    });
    builder.addCase(removeUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
export const usersReducer = usersSlice.reducer;
//bir reducer içinde fetching işlemi yapılmaz, reducerlar 100% senkron olmalıdır.
//ancak burada bir fetching işlemi içerisinde state değişimi yapmamız gerekiyor.
//async thunk ve olarak iki farklı yöntem göreceğiz.
//burada reducers değil extra reducers kullanıyoruz(async thunk için)
//3farklı state durumu için 3tane builder, fetchusers bizim için otomatik olarak 3 farklı durum ataması yapar.
