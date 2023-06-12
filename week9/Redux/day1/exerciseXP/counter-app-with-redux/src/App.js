import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { increaseCount, decreaseCount } from './actions';
import { store } from './store/index';

const App = () => {
const handleDecrease = ()=>{
  store.dispatch(decreaseCount())
}
const handleIncrease = ()=>{
  store.dispatch(increaseCount())
}

  return (
    <div>
      <h1>Counter App with Redux</h1>
      <p>Count: {store.getState().count}</p>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
};

export default App;
