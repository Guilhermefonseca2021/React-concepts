import { useState, useMemo, useCallback } from 'react'
import './App.css'
import { Item} from './components/item';

function App() {
  const [items, setItems] = useState<string[]>([])
  const [wishList, setWishList] = useState<string[]>([])

  const [newItem, setNewItem] = useState('');

  function addItemToList() {
    setItems([...items, `Item ${items.length}`]);
  }

  const countItemsWithOne = useMemo(() => {
    console.log('teste')

    return items.filter(item => item.includes('1')).length
  }, [items])

  const addItemWishList = useCallback((item: string) => {
    setWishList(state => [...state, item]);
  }, [])

  return (
    <>
      <input type="text" onChange={event => setNewItem(event.target.value)} value={newItem} />
      <button onClick={addItemToList}> add</button>
      <div>
        Contagem: {countItemsWithOne}
      </div>
      <ul>
        {items.map(item => {
          return (
            <Item  
              onAddItemWishList={addItemWishList}
              countItemsWithOne={countItemsWithOne}
              key={item} 
              title={item} 
            />
          )
        })}
      </ul>
    </>
  )
}

export default App