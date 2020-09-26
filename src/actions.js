import { v4 as uuid } from 'uuid'

export const addCounter = () => ({
    type: 'ADD_COUNTER',
    item: {
        uuid: uuid(),
        label: 'Lorem ipsum',
    },
})
export const removeCounter = (uuid) => ({
    type: 'REMOVE_COUNTER',
    uuid,
})
