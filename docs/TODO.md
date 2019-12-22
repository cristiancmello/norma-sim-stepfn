# lamda NORMA

```
1. Define o state 'Halt'
2. Define o state 'Fetch' como uma task para função lambda 'Fetch'
  2.1 Defina a função lambda Fetch
3. Escreva um script de test chamado test.sh testando examples/basic-program.sh
4. Define o state 'Decode' como uma task para função lambda 'Decode'
  4.1 Teste 'Decode' e note o novo output com "decoded" feito
5. Define o state 'Execute' como Choice para se decidir entre pelo menos 1 instrução
6. Define o state 'dec' como uma task para função lambda 'dec'
7. Faça choice 'dec' de 'Execute' apontar para state 'dec'
8. Define o state 'VerifyNextInstruction' como uma task para função lambda 'HasNextInstruction'
9. Define o state 'HasNextInstruction?' como uma Choice para Halt ou RepeatCycle
10. Renomear test.sh para step-functions-start-execution-example.sh
11. Criar test.sh
12. Define o state 'RepeatCycle'
13. Alterar o example para incluir mais 1 instrução para verificar se HasNextInstruction e RepeatCycle
    estão funcionando
    13.1 Percebemos que fetch.js começou a quebrar, pois não se esperava receber input json
    partindo de uma função lambda. fetch.js estava esperando input json de CLI
    13.2 Foi feito a correção utilizando try...catch no trecho com "const input = JSON.parse(...)"
    13.3 Executado mais uma vez o test.sh e deu tudo certo!
14. Definir a instrução inc e criar uma função lambda para tal
  14.1 Testar instrução inc alterando o exemplo
15. Definir a instrução beqz e criar uma função lambda para tal
  15.1 Experimentá-la com um exemplo simples
    15.1.1 Exemplo 1: beqz quando variável é zero
    15.1.2 Exemplo 2: beqz quando variável é diferente de zero
16. Elaborar um exemplo da função clássica swap de 2 variáveis
```