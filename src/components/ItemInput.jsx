import React, { useState } from 'react'
import "./ItemInput.css"

const ItemInput = ({addItem}) => {

  const [description, setDescription] = useState("")

  const handleAddItem = (e) => {

    e.preventDefault()
    
    addItem({
      id: Date.now(),
      description,
      isDone: false
    })

    setDescription("")
  }

  return (
    <form className="item-input-container" onSubmit={handleAddItem}>
      <input className="item-input" type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
      <button className="item-input-button" type="submit">+</button>
    </form>
  )
}

export default ItemInput