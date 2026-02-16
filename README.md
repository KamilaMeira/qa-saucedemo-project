# 🧪 Projeto QA – Saucedemo

Projeto prático de Quality Assurance com foco em testes manuais, automação e testes de API.

---

## 📌 Objetivo
Validar as principais funcionalidades do site Saucedemo, garantindo a qualidade dos fluxos de:

- Login
- Carrinho
- Checkout

---

## 🛠️ Ferramentas utilizadas
- Jira (gestão de testes)
- Cypress (automação)
- Postman (testes de API)
- GitHub (versionamento)

---

## 📋 Tipos de teste
- Testes funcionais
- Testes manuais
- Testes automatizados
- Testes de API

---

## 📁 Organização do projeto

- `plano-de-teste.md` → Estratégia e escopo dos testes

### 📄 Casos de teste manuais
- `casos-de-teste-login.md` → Casos de teste (Login)
- `casos-de-teste-carrinho.md` → Casos de teste (Carrinho)
- `casos-de-teste-checkout.md` → Casos de teste (Checkout)

### 📸 Evidências
- `evidencias-jira.md` → Prints do backlog e board no Jira
- `evidencias-cypress.md` → Evidências da automação

### 🤖 Automação
- `automacao-cypress/` → Scripts Cypress

---

## 🤖 Casos automatizados (Cypress)

### 🔐 Login
- CT-001 — Login válido
- CT-002 — Senha inválida
- CT-003 — Usuário inválido
- CT-004 — Usuário vazio
- CT-005 — Senha vazia

### 🛒 Carrinho
- CT-006 — Adicionar produto ao carrinho
- CT-007 — Remover produto do carrinho

### 💳 Checkout
- CT-008 — Checkout com sucesso

---

## ▶️ Como executar os testes

### 1️⃣ Instalar dependências
```bash
npm install
npx cypress open
npx cypress run

👩‍💻 Autora
Kamila Meira
QA em formação | Testes Manuais | Automação | API

