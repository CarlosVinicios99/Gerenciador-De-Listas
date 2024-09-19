import React from 'react'

const ListItem = ({item, removeItem, markItem}) => {
  return (
    <li>
      <span onClick={markItem} style={{textDecoration: item.isDone ? "line-through": "none"}}>{item.description}</span>
      <button onClick={removeItem}>Remover</button>
    </li>   
  )
}
export default ListItem;