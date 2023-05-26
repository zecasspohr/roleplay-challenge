# Roleplay Challenge
API para simular jogadas de dados num jogo de tabuleiro

## Instalação
Instale as dependencias do projeto executando
```
npm install
```

## Execução
Para rodar o projeto execute
```
npm run dev
```
O server será executado na porta 5000

## Requisição
O endpoint para executar o roll de dados está em POST /api/round/play<br>
Você deve passar dados no seguinte padrão:
```
{
    "players": [{
        "name": "Player 1",
        "dicesInfo": "3d20"
    }]
}
```
### Melhorias

- [ ] Validação dos valores passados
- [ ] Abstrair Dice e aplicar a interface em StandardDice
- [ ] DiceFactory poderá retornar vários tipos de Dices de acordo com o padrão passado
