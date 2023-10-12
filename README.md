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


gerencia um estado 'useState' que é tudo que é rederizado na tela que é atualizada na tela. (mais atomicos usamos ele dentro de componentes)


## UseContextApi

gerencia os estados globais fazendo compartilhamento para toda nossa arvore de componentes. (onde varios componentes vao estar compartilhando.)


## useState

-setStates sao assincronas, chamar dois sets referentes no mesmo escopo pode trazer erros se nao cuidar pode nao pegar o valor atual.

errado: (ja espero colocar o valor depois de atualizar no excopo)
function handleIncrement() {
    setCount(prevState => prevState +1)
    setMinhastring('guilherme tem contagem' + count + 1)  
    })
}

certo: (faco dentro do escopo que atualizar ser chamado o estado atualizado para nosso outro state e retorno o valor)
function handleIncrement() {
    setCount(prevState => {
      setMinhastring('guilherme tem contagem' + prevState + 1)
      return prevState +1
    })
}


## useEffect 

trabalhamos mais o cicli de vida de um componente da atualiza, vida e morte. 

(atualiza) = [tenhomMeuItem]
(semCiclo) = []
(morte)    = return dentro do escopo do useEffect;

useEffect(() => {
    console.log('')

    return () => {
        console.log('holla destruction')
    }
}, [])