## entender o mal da performance

O principio sera entender o algoritmo de reconciliacao que gera uma DOM(arvore de elementos) que nao sao gerados diretos, 

React usa o virtual DOM (gera uma nova versao do HTML que o usuario nao consegue visualizar e comparar diferencas de HTML 'DOM' pelo algoritmo de reconciliacao.)

exemplo, sao as keys do react, ele nao reescreve toda lista o react vai pegar por si so e realocar a a posicao da key. Por isso nao usamos indece ou numero aleatorios da lista para saber qual item era qual.


## useMemo

1. Pure functional components
2. Renders too often
3. Re-render with same groups

Quando criamos funcoes ou variaveis no corpo do nosso componente, toda vez que o react entrar no corpo e criar o virtual DOM todo aquele codigo vai ser executado do zero.

(useMemo vai fazer calculos caso a informacao que eles precisam nao tenham sido alterado. 

exemplo tenho setState em um input mas no mesmo componente tenho uma lista por estar no mesmo escopo a toda vez que o inpit receber o valor a lista sera renderizada somente or cada digito no input)

```js
const countItemsWithOne = useMemo(() => {
    console.log('teste')

    return items.filter(item => item.includes('1')).length
  }, [items])
// useMemo usa o escopo da funcao e recebe um array do parametro que esta sendo atualizado
```


## useCallback

nesse caso controlamos os render pelo componente filho por meio de callbacks.