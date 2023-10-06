import './App.css'
import axios from 'axios'
import { useFetchAPI } from './hooks/useFetchAPI';

type Repository = {
  full_name: string;
  discription: string;
}

function App() {
  const { data } = useFetchAPI<Repository[]>('https://api.github.com/users/guilhermefonseca2021/repos')

  // useEffect(() => {
  //   fetch('https...')
  //     .then(response => response.json())
  //     .then(data => {
  //       setRepositories(data);
  //     })
  // }, [])
  return (
    <>
      <h1> my Repositories </h1>
      <ul>
        {data?.map(repo => {
          return(
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>repo.description</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
