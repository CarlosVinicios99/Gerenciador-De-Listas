import React, { useState } from 'react'

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
    <form onSubmit={handleAddItem}>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
      <button type="submit">Adicionar Item</button>
    </form>
  )
}

export default ItemInput