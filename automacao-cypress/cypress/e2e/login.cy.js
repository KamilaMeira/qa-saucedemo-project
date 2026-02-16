describe('Login - Saucedemo', () => {
  it('CT-001 - Login com credenciais válidas', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include', '/inventory')
  })


it('CT-002 — Login com senha inválida', () => { 
    cy.visit('https://www.saucedemo.com')
     // Inserindo usuário válido 
     cy.get('#user-name').type('standard_user') 
     // // Inserindo senha inválida 
     cy.get('#password').type('senha_errada') 
     cy.get('#login-button').click() 
     // Verificar se aparece mensagem de erro 
     cy.get('[data-test="error"]').should('be.visible') 
     .and('contain', 'Username and password do not match any user in this service') 
     // Garantir que não houve redirecionamento para /inventory 
     cy.url().should('not.include', '/inventory') })

  it('CT-003 — Login com usuário inválido', () => {

    cy.visit('https://www.saucedemo.com')

    // Inserindo usuário inválido
    cy.get('#user-name').type('standard')

    // Inserindo senha válida
    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()

    // Verificar se aparece mensagem de erro
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match any user in this service')

    // Garantir que não houve redirecionamento para /inventory
    cy.url().should('not.include', '/inventory')

  })


  it('CT-004 — Campo usuário vazio', () => {

    cy.visit('https://www.saucedemo.com')

    // Não preencher usuário
    cy.get('#user-name').clear()

    // Inserindo senha válida
    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()

    // Verificar mensagem de erro específica
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username is required')

    // Garantir que não houve redirecionamento
    cy.url().should('not.include', '/inventory')

  })


  it('CT-005 — Senha vazia', () => {

    cy.visit('https://www.saucedemo.com')

    // Inserindo usuário válido
    cy.get('#user-name').type('standard_user')

    // Não preencher senha
    cy.get('#password').clear()

    cy.get('#login-button').click()

    // Verificar mensagem de erro
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Password is required')

    // Garantir que não houve redirecionamento
    cy.url().should('not.include', '/inventory')

  })
})

