import React, { useContext } from 'react'
import {Store} from '../App'
function App3() {
    const {value,setValue} = useContext(Store)
    return (
        <div>
            <button onClick={()=>setValue(0)}>Reset</button>
        </div>
    )
}

export default App3
