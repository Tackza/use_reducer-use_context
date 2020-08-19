import React, { useContext, useState, useReducer } from 'react'
import { Space, Table } from 'antd';


const initialState = {
    list: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADDTEXT":
            return {
                ...state,
                list: [...state.list, { name: action.payload }]
            }
        case "DELETETEXT":
            const targetFilter = state.list.filter(item => action.id !== item.name)
            console.log(action.id)
            return {
                ...state,
                list: targetFilter
            }
        case "EDITTEXT":
            console.log(action)
            console.log(action)
            const targetEdit = state.list.map(item => action.payload.id === item.name ? {name: action.payload.text} : item)

            return {
                ...state,
                list: targetEdit
            }
    }
}


function App1() {
    const [text, setText] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState)

    const submit = (e) => {
        e.preventDefault()
        dispatch({ type: "ADDTEXT", payload: text })
        setText('')
    }

    const deleteTodo = (id) => {
        console.log("delete")
        dispatch({ type: "DELETETEXT", id })
    }
    // console.log(state.list)

    const editTodo = (id) => {
        const text = prompt("please Enter")
        dispatch({ type: "EDITTEXT",  payload: {text,id} })
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a onClick={() => deleteTodo(record.name)}>delete</a>
                    <a onClick={() => editTodo(record.name)}>Edit</a>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <form onSubmit={submit} style={{ justifyContent: "center" }}>
                <input onChange={(e) => setText(e.target.value)} value={text}></input>
                <button type="submit">Click</button>
            </form>

            <Table columns={columns} dataSource={state.list} />

        </div>
    )
}

export default App1
