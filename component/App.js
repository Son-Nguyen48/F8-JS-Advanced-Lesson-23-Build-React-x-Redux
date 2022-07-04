import html from "../core.js";
import { connect } from "../store.js";

const connector = connect((state) => ({
  cars: state.cars,
  prices: state.prices
}));

function App(props) {
  console.log(props);
  return html`
    <ul class="menu">
      ${props.cars.map((car) => `<li>${car}</li>`)}
    </ul>
    <input type="text" placeholder="Enter the car name" id="input" />
    <button onclick="dispatch('ADD', '')">Add Car</button>
  `;
}

export default connector(App);
