import React, { useState } from 'react'
import './ListInput.css'

const ListInput = ({addList}) => {

    const [title, setTitle] = useState("")

    const handleAddList = (e) => {
        e.preventDefault()
        addList({
            id: Date.now(),
            title
        })

        setTitle("")
    }

    return (
        <form onSubmit={handleAddList}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button type="submit">Adicionar Lista</button>
        </form>
  );

}
export default ListInput