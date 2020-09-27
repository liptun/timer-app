const appReducer = (state, action) => {
    switch (action.type) {
        case 'PUSH_STATE':
            return {
                ...state,
                ...action.state,
            }
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
        case 'RENAME_COUNTER':
            return {
                ...state,
                counters: state.counters.map((counter) => {
                    if (counter.uuid === action.uuid) {
                        return {
                            ...counter,
                            name: action.name,
                        }
                    } else {
                        return counter
                    }
                }),
            }
        default:
            return { ...state }
    }
}

export { appReducer as default }
