import html from "../core.js";
import { connect } from "../store.js";

const connector = connect();

function Prices(props) {
  console.log(props);
  return html`
    <ul>
      ${props.prices.map((car) => `<li>${car}</li>`)}
    </ul>

    <button onclick="dispatch('ADD', 'PORSCHE')">Add Car</button>
  `;
}

export default connector(Prices);
