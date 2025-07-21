# CRUD ⚙️

CRUD desenvolvido com **Node.js**, **TypeScript** e **JavaScript**, utilizando **Docker** para o ambiente de execução.

Atualmente funciona com dados em memória. Banco de dados será implementado em breve.

---

## 🚀 Tecnologias

- Node.js
- TypeScript
- JavaScript
- Docker
- JWS
- MySQL

---

## 🐳 Rodando com Docker

### Pré-requisitos:

- [Docker](https://www.docker.com/) instalado

### Comandos:

1. Clone o repositório:

```bash
git clone https://github.com/vitorgabripr/CRUD.git
```

2. Acesse o diretório:

```bash
cd CRUD
```

3. Construa a imagem:

```bash
docker build -t crud-app
```

Rode o container:

```bash
docker run -p 3000:3000 crud-app
```

A aplicação estará disponível em:

```bash
http://localhost:3000
```

🔥 Funcionalidades
✅ Criar registros

✅ Listar registros

✅ Atualizar registros

✅ Deletar registros

❌ Authenticação (em desenvolvimento)

❌ Banco de dados (em desenvolvimento)

📌 Próximos passos
🔗 Integração com banco de dados (MySQL ou MongoDB)

💻 Authenticação

🛠️ Validações

🧪 Testes automatizados

🚀 Deploy em produção

📄 Licença
Este projeto está sob licença MIT. Veja mais em LICENSE.
