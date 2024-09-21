import React, { useState } from 'react'
import ListItem from './ListItem';
import ItemInput from './ItemInput';
import './List.css'

const List = ({list}) => {

  const [selected, setSelected] = useState(false)

  const [items, setItems] = useState(list?.itens ?? [])

  const removeItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId))
  }

  const addItem = (item) => {
    setItems([item, ...items])
  } 

  const markItem = (itemId) => {
    setItems(items.map(item => item.id === itemId ? { ...item, isDone: !item.isDone }: item))
  }

  return (
    <div className={selected ? "list-content-selected" : "list-content"}>
      <button className={selected ? "selector-list-selected" : "selector-list"} onClick={() => setSelected(!selected)}>
        <div className="title-list-content">
          <img src="../../public/images/icone-lista.png" alt="ícone de lista" className="icon-list"/>
          <span>{list.title}</span>
        </div>
      </button>
      {
        selected && items.length ?
          (
            <>
              <ul>
                {
                  items.map(item => (
                    <ListItem key={item.id}
                      item={item} 
                      removeItem={() => removeItem(item.id)}
                      markItem={() => markItem(item.id)}
                    ></ListItem>    
                  )
                )}
              </ul>
              <ItemInput addItem={addItem}/>
            </>
          ) :
          selected ? <ItemInput addItem={addItem}/> : null
      }
    </div>
  );

}

export default List