const initialState = {
    value: 0,
    color: "#000000"
}

const reducer = (state = initialState, action) => {
    console.log("Inside Reducer")
    console.log(state)
    let { type, value, color } = action;
    if (type === "INCREMENT") {
        console.log("Inside Increment")
        console.log(state.value)
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
    else if (type === "CHANGENUMBER"){
        return{
            value: parseInt(value),
            color: color
        }
    }
    return state
}
