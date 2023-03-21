import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="container mx-auto">
      <UsersList />
    </div>
  );
}

export default App;
//query ve mutation
//query--> data fetching ve reading için
//mutation --> change ve write data için
//hooks bileşenlerin içindeki veri getirme işlemini otomatikleştirecek,
//fetching işlemi ve state değiştirecek fonksiyonlar,(backend servera yapmak istediğimiz tüm istek türleri) oluşturduğumuz api içinde olacak.
//genel olarak bir api oluşturup bunu react tarafında kullanacağız.(burada api bir backend server değil.)
