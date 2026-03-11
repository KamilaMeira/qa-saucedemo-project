# 🔌 Casos de Teste de API

Os testes de API foram realizados utilizando o Postman e a API pública JSONPlaceholder.

Objetivo: validar o funcionamento dos endpoints REST e garantir que a API responda corretamente às requisições.

---

## 🧪 Endpoint 1 — Listar usuários

**Método:** GET  
**Endpoint:** /users  

### Cenário
Verificar se a API retorna a lista de usuários.

### Passos
1. Enviar requisição GET para /users

### Resultado esperado
- Status Code 200
- Retorno de uma lista de usuários
- Estrutura JSON válida

---

## 🧪 Endpoint 2 — Buscar usuário por ID

**Método:** GET  
**Endpoint:** /users/1  

### Cenário
Verificar se a API retorna os dados de um usuário específico.

### Passos
1. Enviar requisição GET para /users/1

### Resultado esperado
- Status Code 200
- Retorno de um usuário
- Campo "id" igual a 1

---

## 🧪 Endpoint 3 — Criar usuário

**Método:** POST  
**Endpoint:** /users  

### Body da requisição

```json
{
 "name": "Kamila",
 "email": "kamila@test.com"
}
