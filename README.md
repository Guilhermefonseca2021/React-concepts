## Fetch API with axios 

axios pega nossos dados como JSON por padrao, podemos dar um console.log(data) e ler toda nossa api restfull.

### Forma mais comun (sem axios)

useEffect(() => {
   fetch('https...')     
    .then(response =>   
        response.json())
    .then(data => {
       setRepositories(data);
    })
}, [])

### Com axios.

cons [data, setData] = useState([])
useEffect(() => {
    axios.get(url)
    .then(response => {
        setData(response.data)
        })
    .finally(() => {
        setFetching(false)
    })
}, [url])

<p> Criamos um hook para nossa API(para ter mais controle das propriedades) </p>


## Hooks no React


gerencia um estado 'useState' que é tudo que é rederizado na tela que é atualizada na tela.


## UseContext

gerencia os estados globais fazendo compartilhamento para toda nossa arvore de componentes