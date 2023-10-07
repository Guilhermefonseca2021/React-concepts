import { useEffect, useState } from 'react';
import './App.css'
import { useFetchAPI } from './hooks/useFetchAPI';
import axios from 'axios'

type Repository = {
  full_name: string;
  discription: string;
}

function App() {
  const { data: repositories, isFetching } = useFetchAPI<Repository[]>('https://api.github.com/users/guilhermefonseca2021/repos')
  
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


      <h1>API posts from JSONPLACEHOLDER</h1>
      <div>
        {posts.map(post => <p>{post}</p>)}
      </div>
    </>
  )
}

export default App
