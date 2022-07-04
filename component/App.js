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

    <button onclick="dispatch('ADD', 'PORSCHE')">Add Car</button>
  `;
}

export default connector(App);
