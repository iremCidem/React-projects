import {
  useAddAlbumMutation,
  useFetchAlbumsQuery,
  useRemoveAlbumMutation,
} from "../store/store";
import Skeleton from "./skeleton";
import ExpandablePanel from "./expandablePanel";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";

const AlbumList = ({ user }) => {
  const { data, isError, isLoading } = useFetchAlbumsQuery(user); //bu bir result object, içindeki kelimeler özel. const result = usefetchalbumsquery ile görebiliriz.
  //burada hooka gönderdiğimiz user, api içindeki queryde yakalanır.her kullanıcı için özel albümler göndereceğimizden dolayı bunu yapıyoruz.
  const [addAlbum, results] = useAddAlbumMutation(); //results içinde isloading vs var.
  const [removeAlbum, albumResults] = useRemoveAlbumMutation();
  let content;
  if (isLoading) {
    content = <Skeleton className={"h-10 w-full"} times="3" />;
  } else if (isError) {
    content = <div>getting albums error</div>;
  } else {
    content = data.map((item) => {
      const header = (
        <div key={item.id}>
          <button onClick={() => handleDeleteAlbum(item)}>
            <GoTrashcan className="mr-3" />
          </button>
          {item.title}
        </div>
      );
      return (
        <div>
          <ExpandablePanel header={header}>some photos</ExpandablePanel>
        </div>
      );
    });
  }
  function handleAddAlbum() {
    addAlbum(user);
  }
  function handleDeleteAlbum(item) {
    removeAlbum(item);
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="font-bold"> Albums of {user.name} </div>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>

      {content}
    </div>
  );
};

export default AlbumList;
//oluşturduğumuz hooku burada kullanacağız.
//komponent her render edildiğinde o usera bağlı albumler getirilecek.aynı komponent birden fazla render edilse bile RTK query sayesinde tek bir request yapılır.
// {
//   data &&
//     content.map((item) => {
//       return (
//         <div className="flex ">
//

//
//         </div>
//       );
//     });
// }
