const initialState = {
    value: 0,
    color: "#ffffff"
}

const reducer = (state = initialState, action) => {
    let { type, color } = action;
    if (type === "INCREMENT") {
        return {
            value: state.value + 1,
            color: state.color
        }
    }
    else if (type === "DECREMENT") {
        return {
            value: state.value - 1,
            color: state.color
        }
    }
    else if (type === "ZERO"){
        return {
            value: 0,
            color: state.color
        }
    }
    else if (type === "INCREMENTFIVE"){
        return {
            value: state.value + 5,
            color: state.color
        }
    }
    else if (type === "DECREMENTFIVE"){
        return {
            value: state.value - 5,
            color: state.color
        }
    }
    else if (type === "COLORS"){
        return {
            value: state.value,
            color: color
        }
    }
    return state
}
