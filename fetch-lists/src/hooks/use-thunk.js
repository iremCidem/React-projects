import { useCallback } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

function UseThunk(thunk) {
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(null);
  const runThunk = useCallback(() => {
    setisLoading(true);
    dispatch(thunk())
      .unwrap()
      .then(() => setisLoading(false))
      .catch((err) => {
        setisError(err);
        setisLoading(false);
      });
  }, [dispatch, thunk]);
  return [runThunk, isLoading, isError];
}
export { UseThunk };
