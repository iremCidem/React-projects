import React, { useReducer } from "react";
import Button from "../components/button";
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "getValue":
      return {
        ...state,
        value: action.payload,
      };
    case "addValue":
      return {
        ...state,
        count: state.count + state.value,
        value: 0,
      };
    default:
      throw new Error("wrong action type");
  }
};
export default function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    value: 0,
  });
  console.log(state);
  function Increment() {
    dispatch({
      type: "increment",
    });
  }
  function Decrement() {
    dispatch({
      type: "decrement",
    });
  }
  function getValue(e) {
    const value = parseInt(e.target.value) || 0;

    dispatch({
      type: "getValue",
      payload: value,
    });
  }
  function addValue() {
    dispatch({
      type: "addValue",
    });
  }
  return (
    <div>
      <p>Current count{state.count}</p>
      <div className="flex flex-row ">
        <Button primary handleClick={Increment}>
          Increment
        </Button>
        <Button primary handleClick={Decrement}>
          Decrement
        </Button>
      </div>

      <div>Add a lot</div>
      <div>
        <input
          onChange={getValue}
          value={state.value}
          type="number"
          className="rounded text-pink-500 border border-pink-500"
        />
      </div>
      <Button primary handleClick={addValue}>
        Add It!
      </Button>
    </div>
  );
}
//usereducer hooku usestate için bir alternatiftir,
//state üretir,ve değiştirir.
//bir component içinde ikisinden birini kullanırız.
//birbiriyle yakından ilişkili birden fazla statee sahipsek usereducer kullanmak mantıklıdır.
//ayrıca da statein gelecekteki değeri şuanki durumuna bağlı ise de usereducer kullanmak mantıklıdır.
//burada count ve value birbiriyle ilişkilidir.
//değişikliği yapan dispatch fonksiyonudur, reducer fonksiyonu argüman olarak state ve action alır, state = obje, dispatch = reducer,dispatch fonksiyonunu her kullandığımda reducer işlemi gerçekleşir.
//reducer fonksiyonu içinde async await request vs kullanmıyoruz.sadece içine aldığı state ve acitonu kullanıyoruz.
