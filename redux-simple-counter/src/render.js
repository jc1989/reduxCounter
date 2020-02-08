const render = (state) => {
    console.log("Inside Render")
    const counterDOM = document.getElementById('counterValue');
    console.log(state.value)
    counterDOM.innerHTML = state.value;
    counterDOM.style.color = state.color;
}