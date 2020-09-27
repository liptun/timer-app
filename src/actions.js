import { v4 as uuid } from 'uuid'

export const pushState = (state) => ({
    type: 'PUSH_STATE',
    state,
})

export const addCounter = () => ({
    type: 'ADD_COUNTER',
    item: {
        uuid: uuid(),
        name: 'Clock',
    },
})

export const removeCounter = (uuid) => ({
    type: 'REMOVE_COUNTER',
    uuid,
})

export const renameCounter = (uuid, name) => ({
    type: 'RENAME_COUNTER',
    uuid,
    name,
})
