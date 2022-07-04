const init = {
  cars: ["BMW", "HONDA", "DUNCATI", "MERCEDES"],
  prices: ["100", "200", "300", "400"]
};

export default function reducer(state = init, action, ...args) {
  switch (action) {
    case "ADD":
      const inputValue = document.querySelector("#input").value;
      console.log(inputValue);
      args = inputValue;
      console.log(args);
      const [...newCar] = args;
      console.log(newCar);
      return {
        ...state,
        cars: [...state.cars, newCar.join("")]
      };
    default:
      return state;
  }
}
