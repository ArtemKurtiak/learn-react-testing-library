import {useReducer} from "react";

const App = () => {

    const [store, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'increment':
                return {...state, count: state.count + 1}
            case 'decrement':
                return {...state, count: state.count - 1}
            default:
                return {...state}
        }
    }, {count: 0})

    return <div style={{margin: 20}} >
        <h5 data-testid={'count'} >{store.count}</h5>
        <button data-testid={'increment'} onClick={() => {
        dispatch({type: 'increment'})}
        }  >+</button>
        <button data-testid={'decrement'} onClick={() => {
        dispatch({type: 'decrement'})}
        }  >-</button>
    </div>
}

export default App;
