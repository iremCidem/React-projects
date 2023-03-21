import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "./Apis/albumsApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    users: usersReducer, //state objemiz içinde users keyi ile saklanan veriler bulunuyor.
    //albums: albumsApi.reducer, //albums, api içindeki reducerpathten geldi.ancak bu ismi yazarken string sorunu yaşamamak için aşağıdaki yolu kullanabiliriz.
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware); //concat ile default ve apiyı birleştiriyoruz.
  },
});
setupListeners(store.dispatch); //tek seferlik bir kurulum
export * from "../thunks/fetchUsers"; //fetchusers içindeki herşeyi bu store içinden export ediyoruz.
export * from "../thunks/addUser";
export * from "../thunks/removeUser";
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "./Apis/albumsApi";
//bir api oluşturduğumuzda bizim için otomatik olarak bir reducer oluşturur.
