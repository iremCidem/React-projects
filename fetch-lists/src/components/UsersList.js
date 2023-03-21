import React from "react";
import { fetchUsers, addUser, removeUser } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Skeleton from "./skeleton";
import Button from "./Button";
import { UseThunk } from "../hooks/use-thunk";
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from "./expandablePanel";
import AlbumList from "./albumsList";

export default function UsersList() {
  const dispatch = useDispatch();
  const [doFetchUsers, isLoadingUsers, LoadingUsersError] =
    UseThunk(fetchUsers);
  const [doCreate, isCreating, CreatingError] = UseThunk(addUser);

  const { userlist } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);
  function handleAddUser() {
    doCreate();
  }
  function handleDeleteClick(user) {
    dispatch(removeUser(user));
  }

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={3} className="h-10 w-full" />;
  } else if (LoadingUsersError) {
    content = <div>error fetching data</div>;
  } else {
    content = userlist.map((user) => {
      const header = (
        <>
          <button onClick={() => handleDeleteClick(user)}>
            <GoTrashcan />
          </button>
          <div
            key={user.id}
            className="flex p-2 justify-between items-center cursor-pointer"
          >
            {user.name}
          </div>
        </>
      );
      return (
        <ExpandablePanel key={user.id} header={header}>
          <AlbumList user={user} />
        </ExpandablePanel>
      );
    });
  }
  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button loading={isCreating} onClick={handleAddUser}>
          + Add User
        </Button>

        {CreatingError && "error creating user"}
      </div>
      {content}
    </div>
  );
}
//hem redux toolkit hem de usestatei projemizde beraber kullanabiliriz.(redux toolkit query ile farklı bir yol yapabiliriz.)
//dispatch(fetchUsers()) kullanımında .then ve .catch ile yaptığımız mantık aynı çalışmaz
//.then yazdığımızda error veya cevaptan biri varsa işlem yapar.unwrap fonksiyonu ile bu sorunu çözdük.
