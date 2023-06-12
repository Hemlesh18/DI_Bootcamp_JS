
const initialState={
    count:0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREASE_COUNT':
        state.count += 1
        console.log(state)
        return state


      case 'DECREASE_COUNT':
        state.count -=1
        console.log(state)
        return state
      default:
        return state;
    }
  };

    export default reducer;
