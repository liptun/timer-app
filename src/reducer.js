const appReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            return {
                ...state,
                counters: [...state.counters, action.item],
            }
        case 'REMOVE_COUNTER':
            return {
                ...state,
                counters: state.counters.filter(
                    (counter) => counter.uuid !== action.uuid
                ),
            }
        default:
            return { ...state }
    }
}

export { appReducer as default }
