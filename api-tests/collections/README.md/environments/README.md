
Conteúdo:

```markdown
# 🔌 Testes de API

Esta pasta contém os testes de API realizados no projeto de Quality Assurance.

Os testes foram executados utilizando o Postman com uma API pública de teste.

---

## 🛠️ Ferramentas utilizadas

- Postman
- JSONPlaceholder
- GitHub

---

## 🧪 Endpoints testados

### GET /users
Retorna a lista de usuários cadastrados.

Validações realizadas:
- Status code 200
- Estrutura da resposta JSON
- Lista de usuários retornada

---

### GET /users/{id}

Retorna um usuário específico.

Validações realizadas:
- Status code 200
- ID do usuário retornado
- Estrutura do objeto

---

### POST /users

Cria um novo usuário.

Validações realizadas:
- Status code 201
- Retorno do objeto criado

---

## 📁 Estrutura da pasta
