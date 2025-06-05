# CRUD ⚙️

CRUD simples desenvolvido com **Node.js**, **TypeScript** e **JavaScript**, utilizando **Docker** para o ambiente de execução.

Atualmente funciona com dados em memória. Banco de dados será implementado em breve.

> 🔗 Repositório: [github.com/vitorgabripr/CRUD](https://github.com/vitorgabripr/CRUD)

---

## 🚀 Tecnologias

- Node.js
- TypeScript
- JavaScript
- Docker

---

## 🐳 Rodando com Docker

### Pré-requisitos:

- [Docker](https://www.docker.com/) instalado

### Comandos:

1. Clone o repositório:

```bash
git clone https://github.com/vitorgabripr/CRUD.git
Acesse o diretório:

bash
Copy
Edit
cd CRUD
Construa a imagem:

bash
Copy
Edit
docker build -t crud-app .
Rode o container:

bash
Copy
Edit
docker run -p 3000:3000 crud-app
A aplicação estará disponível em:

arduino
Copy
Edit
http://localhost:3000
📂 Estrutura do Projeto
pgsql
Copy
Edit
CRUD/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── models/ (futuro)
│   └── index.ts
├── Dockerfile
├── package.json
├── tsconfig.json
└── README.md
🔥 Funcionalidades
✅ Criar registros

✅ Listar registros

✅ Atualizar registros

✅ Deletar registros

❌ Banco de dados (em desenvolvimento)

📌 Próximos passos
🔗 Integração com banco de dados (PostgreSQL, MongoDB ou outro)

🛠️ Validações

🧪 Testes automatizados

🚀 Deploy em produção

📄 Licença
Este projeto está sob licença MIT. Veja mais em LICENSE.
