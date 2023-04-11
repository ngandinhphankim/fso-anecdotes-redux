const filterReducer = (state = 'ALL', action) => {
    switch (action.type) {
        case 'ALL':
            return state
        case 'SET_FILTER':
            return action.payload

        default:
            break;
    }
    return state
}

export const filterChange = filter => {
    return {
        type: 'SET_FILTER',
        payload: filter,
    }
}

export default filterReducer