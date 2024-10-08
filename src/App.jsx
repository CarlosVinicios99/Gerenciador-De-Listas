import { useState } from 'react';
import './App.css'
import List from './components/List';
import ListInput from './components/ListInput';

function App() {

  const [lists, setLists] = useState([])

  const addList = (list) => {
    setLists([list, ...lists])
  }

  return (
    <div className="app-container">
      <h1>Gerenciador de Listas</h1>
      <ListInput addList={addList}/>
      {!lists.length ? 
        (<h2>Não há listas...</h2>) 
        : (<div>{lists.map(list => <List key={list.id} list={list}></List>)}</div>)
      }
    </div>
  )
}

export default App;
