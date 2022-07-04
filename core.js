export default function html([first, ...strings], ...values) {
  return values
    .reduce((acc, curr) => acc.concat(curr, strings.shift()), [first])
    .filter((value) => (value && value !== true) || value === 0)
    .join("");
}

export function createStore(reducer) {
  let state = reducer();

  let roots = new Map();

  function render() {
    for (const [root, component] of roots) {
      const output = component();
      console.log(component());
      root.innerHTML = output;
    }
  }
  return {
    //
    attach(component, root) {
      roots.set(root, component);
      render();
    },
    connect(selector = (state) => state) {
      return (component) =>
        (props, ...args) => {
          console.log(props);
          console.log(state);
          console.log(Object.assign({}, props, selector(state), ...args));
          console.log(
            component(Object.assign({}, props, selector(state), ...args))
          );
          return component(Object.assign({}, props, selector(state), ...args));
        };
    },
    dispatch(action, ...args) {
      state = reducer(state, action, ...args);
      render();
    }
  };
}
