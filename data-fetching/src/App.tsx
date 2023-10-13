import { useEffect, useState } from 'react';
import './App.css'
import { useFetchAPI } from './hooks/useFetchAPI';
import useHookState from './hooks/useHookState';
import UseEffect from './UseEffect';

type Repository = {
  full_name: string;
  discription: string;
}

function App() {
  const { data: repositories, isFetching } = useFetchAPI<Repository[]>('https://api.github.com/users/guilhermefonseca2021/repos')
  const { count, minhastring, countNoHook, handleIncrement } = useHookState('nome do youtube')

  const [value, setValue] = useState('initial value')
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log('hello from useEffect');

    return () => {
      console.log('hello from destruction')
    }
  }, [])

  
  return (
    <>
    
      <h1> my Repositories (Axios fetch)</h1>
      <ul className='repos'>
        { isFetching && <p>carregando...</p>}
        {repositories?.map(repo => {
          return(
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.discription}</p>
            </li>
          )
        })}
      </ul>


      <main>
      <div className='hook-container'>
        <h2>Contador hoook useState</h2>
        <p>contagem com hook: {count}</p>
        <p>contagem sem hook: {countNoHook}</p>
        <p>nome: {minhastring}</p>

        <button onClick={handleIncrement}> Somar</button>
      </div>


      <h2>useEffect</h2>
      <div className='useeffect-container'>
        <div>
          <p>com useeffect</p>
          <input 
            type="text" 
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </div>
        <div>
          <p>sem useeffect</p>
          <input 
            type="checkbox" 
            checked={checked}
            onChange={e => setChecked(e.target.checked)}
          />

        </div>
      </div>

      <UseEffect />

      </main>
    </>
  )
}

export default App
