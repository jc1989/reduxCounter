const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "DECREMENT" action every time the -1 button is pressed
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT" }));

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));

// Dispatch the "INCREMENT" action every time the +5 button is pressed
const incrementFiveButton = document.getElementById('incrementFive');
incrementFiveButton.addEventListener('click', e => dispatch({ type: "INCREMENTFIVE" }));

// Dispatch the "DECREMENT" action every time the -5 button is pressed
const decrementFiveButton = document.getElementById('decrementFive');
decrementFiveButton.addEventListener('click', e => dispatch({ type: "DECREMENTFIVE" }));

// Dispatch the "ZERO" action every time the Zero button is pressed
const zeroButton = document.getElementById('zero');
zeroButton.addEventListener('click', e => dispatch({ type: "ZERO" }));

// Dispatch the "COLOR" action to change the color
const colors = document.getElementById('colors');
colors.addEventListener('change', e => {
    dispatch({ type: "COLORS", color: e.target.value })
});

//Dispatch the "changeNumber" action to change the number
const changeNumber = document.getElementById('changeNumber');
changeNumber.addEventListener('change', e => dispatch({ type: "CHANGENUMBER", value: e.target.value }));
