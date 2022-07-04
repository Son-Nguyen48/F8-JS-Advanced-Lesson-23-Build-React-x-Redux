const init = {
  cars: ["BMW", "HONDA", "DUNCATI", "MERCEDES"],
  prices: ["100", "200", "300", "400"]
};

export default function reducer(state = init, action, args) {
  switch (action) {
    case "ADD":
      console.log(args);
      const [...newCar] = args;
      return {
        ...state,
        cars: [...state.cars, newCar.join("")]
      };
    default:
      return state;
  }
}
