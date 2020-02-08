const initialState = {
    value: 0
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    if (type === "INCREMENT") {
        return {
            value: state.value + 1
        }
    }
    else if (type === "DECREMENT") {
        return {
            value: state.value - 1
        }
    }
    else if (type === "ZERO"){
        return {
            value: 0
        }
    }
    else if (type === "INCREMENTFIVE"){
        return {
            value: state.value + 5
        }
    }
    else if (type === "DECREMENTFIVE"){
        return {
            value: state.value - 5
        }
    }
    else if (type === "USERENTRY"){
        return {
            value: state.value
        }
    }
    return state
}