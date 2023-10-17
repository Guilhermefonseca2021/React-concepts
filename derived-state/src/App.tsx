import { useEffect, useState } from 'react'
import './App.css'

interface Repo  {
  name: string;
  description: string;
}

function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [search, setSearch] = useState('');
  // const [ filteredRepos, setFilteredRepos] = useState<Repo[]>([])
  console.log('renderizou')

  useEffect(() => {
    fetch('https://api.github.com/users/guilhermefonseca2021/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
  }, [])

  const filteredRepos = search.length > 0
    ? repos.filter(repo => repo.name.includes(search))
    : [];

  // useEffect(() => {
  //   if(search.length) {
  //     setFilteredRepos(repos.filter(repo => repo.name.includes(search)))
  //   }
  // }, [search])

  return (
    <>
      <input 
        name='search' 
        type='text'
        placeholder='Buscar...' 
        onChange={event => setSearch(event.target.value)}
        value={search}
      />

      {
        search.length > 0 ? (
          <ul>
            {filteredRepos.map(repo => {
              return(
                <li key={repo.name}>
                  {repo.name}
                </li>
              )
            }) }
          </ul>
        ) : (
          <ul>
            {repos.map(repo => {
              return(
                <li key={repo.name}>
                  {repo.name}
                </li>
              )
            }) }
          </ul>
        )
      }
    </>
  )
}

export default App
