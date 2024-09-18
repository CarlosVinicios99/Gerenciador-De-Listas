import { useState } from 'react';
import './App.css'
import List from './components/List';

function App() {

  const [lists, setLists] = useState([])

  return (
    <>
      <h1>Gerenciador de Listas</h1>
      {!lists.length ? 
        (<h2>Não há listas...</h2>) 
        : (<div>{lists.map(list => <List title={list.title} items={list.items}></List>)}</div>)
      }
    </>
  )
}

export default App;
