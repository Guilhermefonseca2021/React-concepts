import './App.css'
import { useFetchAPI } from './hooks/useFetchAPI';

type Repository = {
  full_name: string;
  discription: string;
}

function App() {
  const { data: repositories, isFetching } = useFetchAPI<Repository[]>('https://api.github.com/users/guilhermefonseca2021/repos')

  console.log()
  
  return (
    <>
      <h1> my Repositories </h1>
      <ul>
        { isFetching && <p>carregando...</p>}
        {/* ?   quando carregar apresente */}
        {repositories?.map(repo => {
          return(
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.discription}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
