import React, { useState } from 'react'
import ListItem from './ListItem';
import ItemInput from './ItemInput';

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
    <div>
      <button onClick={() => setSelected(!selected)}>{list.title}</button>
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