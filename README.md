# NLW Connect API

Bem-vindo ao **NLW Connect**, uma API poderosa e simples para gerenciar indicações em eventos. Aumente o engajamento dos participantes com um sistema de ranking dinâmico e rastreamento de cliques!

## 📋 Sobre o Projeto

O **NLW Connect** é uma API desenvolvida para criar um sistema de indicações para eventos. Cada participante recebe um ID único ao se inscrever, que pode ser compartilhado por meio de um link personalizado. Quando novos participantes se inscrevem usando esse link, o usuário original sobe no ranking de indicações. Além disso, a API monitora os cliques nos links, permitindo uma análise completa do alcance de cada participante.

### ✨ Funcionalidades
- **Inscrição em Eventos**: Gere um ID único ao se inscrever.
- **Sistema de Indicações**: Aumente seu ranking ao convidar outros participantes.
- **Rastreamento de Cliques**: Saiba quantas vezes seu link foi acessado.
- **Ranking Dinâmico**: Veja quem está liderando as indicações em tempo real.

## 🚀 Como Funciona

1. **Inscreva-se**: Crie sua conta ou participe de um evento para receber seu ID único.
2. **Compartilhe**: Envie seu link personalizado (`exemplo.com/evento?ref=SEU_ID`) para amigos e contatos.
3. **Indique**: Cada novo participante que usar seu link aumenta sua pontuação no ranking.
4. **Acompanhe**: Veja quantos cliques seu link recebeu e sua posição no ranking.

## 🛠 Tecnologias Utilizadas

- **[Insira aqui a stack usada, ex: Node.js, Express, MongoDB]**
- **[Outras ferramentas ou frameworks, se aplicável]**

## 📦 Como Instalar

Siga os passos abaixo para rodar a API localmente:

Certifique-se de configurar o arquivo `.env` com as informações necessárias, como porta, banco de dados e chaves de API.

## 🌐 Endpoints da API

Aqui estão alguns dos principais endpoints disponíveis:

| Método | Endpoint                | Descrição                              |
|--------|-------------------------|----------------------------------------|
| POST   | `/event/register`       | Registra um novo participante e gera um ID. |
| GET    | `/event/ranking`        | Retorna o ranking de indicações.       |
| GET    | `/referral/:id/clicks`  | Mostra o número de cliques no link.    |

*(Adicione mais endpoints conforme a implementação do projeto!)*

## 📈 Exemplo de Uso

1. Um usuário se inscreve e recebe o ID `abc123`.
2. Ele compartilha o link: `https://seusite.com/evento?ref=abc123`.
3. Outro usuário clica no link e se inscreve.
4. O ranking do usuário com ID `abc123` sobe, e o contador de cliques é atualizado.

## 📧 Contato

Desenvolvido por [DevKayoS](https://github.com/DevKayoS).  
Dúvidas ou sugestões? Entre em contato via [insira um e-mail ou rede social].

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
