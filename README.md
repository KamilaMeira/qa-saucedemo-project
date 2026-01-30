# casos-de-teste-login.md
✅ CASOS DE TESTE — LOGIN 

ID: CT-001
Cenário: Login com usuário e senha válidos

Pré-condição:
Usuário cadastrado no sistema

Passos:
1. Acessar https://www.saucedemo.com
2. Informar usuário "standard_user"
3. Informar senha "secret_sauce"
4. Clicar no botão Login

Resultado esperado:
Usuário deve ser autenticado e redirecionado para a página de produtos

Status: Não executado

❌ CT-002 — Login com senha inválida

ID: CT-002
Cenário: Login com senha inválida

Pré-condição:
Usuário cadastrado no sistema

Passos:
1. Acessar o site
2. Informar usuário válido
3. Informar senha inválida
4. Clicar em Login

Resultado esperado:
Sistema deve exibir mensagem de erro informando credenciais inválidas

Status: Não executado

❌ CT-003 — Login com usuário inválido

ID: CT-003
Cenário: Login com usuário inválido

Pré-condição:
Usuário não cadastrado

Passos:
1. Acessar o site
2. Informar usuário inválido
3. Informar senha válida
4. Clicar em Login

Resultado esperado:
Sistema deve exibir mensagem de erro informando credenciais inválidas

Status: Não executado

