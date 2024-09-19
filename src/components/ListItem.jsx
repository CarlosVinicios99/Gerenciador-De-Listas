import React from 'react'

const ListItem = ({item, removeItem, markItem}) => {
  return (
    <div>
      <span onClick={markItem} style={{textDecoration: item.isDone ? "line-through": "none"}}>{item.description}</span>
      <button onClick={removeItem}>Remover</button>
    </div>   
  )
}
export default ListItem;