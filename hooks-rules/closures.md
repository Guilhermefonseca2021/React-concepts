## Por que nao pode estados condicionais no Hooks

React usa o comportameno de CLOSURES. (todos componentes no React sao funcoes ou classes como faziam os incas e astecas)

```js
// 1.   
function MeuComponente(props, 1, true, 2) {

}
// 2.
function MeuComponente(props, 1, false, 2) {

}
// Propriedades e estado(hooks)
```

React nao guarda referencia para qual hook é qual,  nao podemos ter hooks condicionais por que o react vai se perder de qual o valor do estado, caso eu queira repetidas acoes, posso passar funcoes.