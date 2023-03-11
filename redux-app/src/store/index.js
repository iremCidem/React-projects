import { configureStore } from "@reduxjs/toolkit";
import songsSlice from "./slices/songSlice";
import MovieSlice from "./slices/movieSlice";
const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: MovieSlice.reducer,
  },
});

export { store };

//redux reacte özgü bir yöntem değildir bu nedenle reduxı react ile kullanabilmek için react-redux kütüphanesini ekliyoruz.
//const store ile storumuzu oluşturuyoruz, içine reducer objesi verip reducerları ekliyoruz.
//oluşturduğumuz slice: state ve onunla alakalı fonksiyonları (reducer) içerir.
//configstore içindeki reducer key ve reducer ile direkt store içinde statimizin key ve value değerini oluşturur.
//eğer state slice içindeyse o spesifik statedir, diğer tüm stateler store içindeki genel state objesidir.
