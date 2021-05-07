import { applyMiddleware } from 'redux';
const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log('Action: ', action)
        const returnedValue = next(action)
        console.log('New state: ', store.getState())
    console.groupEnd()
    return returnedValue
} 

export default applyMiddleware(logger);