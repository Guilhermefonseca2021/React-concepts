## derived-state

entender os conceitos de quando o componente é renderizado.

1. devemos entender estados derivados; 

toda vez que o componente esta atualizando useEffect, de inicial podemos ditar quando useeffect renderizar usando condicionais.

ex:

```js
const [search, setSearch] = useState('');
const [ filteredRepos, setFilteredRepos] = useState<Repo[]>([])

useEffect(() => {
    if(search.length) {
      ...
    }
}, []) 
```


ja evita duas renderizacoes aqui dentro, Um dos erros mais comuns no React (e você provavelmente já cometeu também) é a criação de estados derivados, que são estados criados a partir de outra informação já presente no componente. 

Esses estados acabam causando renderizações desnecessárias, que podem ser substituídos facilmente por variáveis calculadas em tempo de execução. 


ex: 

```js
const filteredRepos = search.length > 0
    ? repos.filter(repo => repo.name.includes(search))
    : [];
```

pode caminhar como propriedades tambes, imagina se fosse um select com uma lista de opcoes para o usuario selecionar, eai tenho um estado para salvar, posso criar so um id