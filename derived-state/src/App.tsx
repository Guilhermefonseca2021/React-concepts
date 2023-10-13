import './App.css'
import { useEffect, useState } from 'react'

interface Repo {
  title: string,
}


function App() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [search, setSearch] = useState('');
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => setRepos(data))
  }, []);

  useEffect(() => {
    if(search.length) {
      setFilteredRepos(repos.filter(repo => repo.title.includes(search)))
    }
  }, [search]);e

  console.log(repos)

  return (
    <>
      <input 
        name='search' 
        type='text' 
        placeholder='Buscar...' 
        onChange={e => setSearch(e.target.value)} 
        value={search}
      />

      <div>
      { search.length > 0 ? (
        <ul>
          {filteredRepos.map(repo => {
            return(
              <li key={repo.title}>
                {repo.title}
              </li>
            )
          })}
        </ul>
      ) : (
        <ul>
          {repos.map(repo => {
            return (
              <li>{repo.title}</li>
            )
          })}
        </ul>
      )}
      </div>
    </>
  )
}

export default App
