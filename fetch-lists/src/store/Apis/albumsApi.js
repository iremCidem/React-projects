import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
//büyük state objemiz(store) içinde api statelerimizi saklamak için reducerPath(state içindeki keyi belirliyor aslında) kullanmamız gereklidir.
//reducerpath bir string, state içinde api değerlerimizi saklayacak olan key değeri bu stringdir.
const albumsApi = createApi({
  reducerPath: "albums", //state içinde verilerin saklanacağı key değeri.
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3003", //fetching işlemini yapacağı baseurl
  }),
  endpoints(builder) {
    //endpoints yapacağımız işlemleri açıkladığımız kısım.
    return {
      removeAlbum: builder.mutation({
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE",
          };
        },
      }),
      addAlbum: builder.mutation({
        invalidatesTags: (results, error, user) => {
          return [{ type: "album", id: user.id }];
        },
        //fetcing ile güncel tutmak için aynı etiketlerle eşledik,
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              //bu verileri içeren bir datayı albume ekliyoruz.
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
      fetchAlbums: builder.query({
        //usefetchalbumsquery, buradaki key kullanılarak otomatik yaratılır.
        //QUERY OR MUTATİON
        providesTags: (results, error, user) => {
          return [{ type: "album", id: user.id }];
        }, //3.argüman biz user verdik user.idye ihtiyacımız olduğu için.
        //mutation işlemi ile yaptığımız değişikliklerden sonra buradaki verileri güncel tutmak için tag ekledik.
        query: (user) => {
          return {
            url: "/albums", //BASE URL İLE BİRLEŞECEK.
            params: {
              userId: user.id,
            },
            method: "GET",
          };
          //YUKARISI REQUEST NASIL YAPILACAK AÇIKLADIĞIMIZ KISIM
        },
      }),
    };
  },
});
//RTK axios yerine fetch kullanılarak bizim yerimize veri getirme işlemini otomatik olarak yapacak.
//RTK tarafından verilmiş olan fetchbasequery fonksiyonunu kullanacağız.bu fetchin yapılandırılarak bize sunulan bir hali.

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi; //otomatik oluşturulan hooklar
export { albumsApi };
