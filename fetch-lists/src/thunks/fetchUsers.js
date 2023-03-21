//ilk adım olarak bir thunk dosyası oluşturduk ve içine yapacağımız işleme uygun bir adı verdiğimiz js dosyası kurduk.
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//ikinci adımda create işlemini yapıyoruz.ilk argüman olan string base type dır.redux otomatik olarak bu typeı
//users/fetch/pending yaparak typeı bu olan bir action oluşturur.burada ki olay işlemin gerçekleşirken pending, sonrasında fullfilled, sorun olursa rejected type almasıdır.
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const pause = (duration) => {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  };
  const response = await axios.get("http://localhost:3003/users");
  //DEV ONLY
  await pause(1000);
  return response.data;
});
//ikinci adım olarak axios kullanarak data fetching işlemini gerçekleştirdik.
export { fetchUsers };
// fetchusers bizim için otomatik olarak 3 farklı durum ataması yapar.fetchusers.pending, fulfilled, rejected.yani otomatik olarak üretilen 3 action type
//createaysntunck ile oluşturduğumuz ve döndürdüğümüz değer action.payload olarak otomatik yüklenir.
//eğer ki yükleme sorun yaşarsa error payload olarak değil error olarak döner.
