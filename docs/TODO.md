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
```