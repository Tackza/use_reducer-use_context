import React, { useContext } from 'react'
import { Store } from '../App'

function App2() {
    const { value, setValue } = useContext(Store)
    return (
        <div>
            <button onClick={() => setValue(value - 1)} disabled={value == 0}>-</button>
        </div>
    )
}

export default App2
