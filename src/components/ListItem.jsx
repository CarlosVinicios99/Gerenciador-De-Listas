import React from 'react'
import './ListItem.css'

const ListItem = ({item, removeItem, markItem}) => {
  return (
    <li className="item">
      <span 
        onClick={markItem} 
        style={{textDecoration: item.isDone ? "line-through": "none"}}
        className="item-description"
      >
        {item.description}
      </span>
      <button onClick={removeItem} className="item-button">
        <img src="./../../public/images/icon-lixeira.png" alt="" className="icon-lixeira"/>
      </button>
    </li>   
  )
}
export default ListItem;