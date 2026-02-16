describe('Automatizar Carrinho - Saucedemo', () => {

  it('CT-006 — Adicionar produto ao carrinho', () => {

    // Acessar site
    cy.visit('https://www.saucedemo.com')

    // Login válido
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Validar login com sucesso
    cy.url().should('include', '/inventory')

    // Adicionar primeiro produto ao carrinho
    cy.contains('Add to cart').first().click()

    // Validar badge do carrinho
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('contain', '1')

    // Abrir carrinho
    cy.get('.shopping_cart_link').click()

    // Validar produto no carrinho
    cy.get('.cart_item').should('be.visible')

  })

})
describe('Remover produto do carrinho - Saucedemo', () => {

  it('CT-007 — Remover produto do carrinho', () => {

    // Acessar site
    cy.visit('https://www.saucedemo.com')

    // Login válido
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Validar login com sucesso
    cy.url().should('include', '/inventory')

    // Adicionar produto ao carrinho
    cy.contains('Add to cart').first().click()

    // Abrir carrinho
    cy.get('.shopping_cart_link').click()

    // Validar que existe item
    cy.get('.cart_item').should('exist')

    // Remover produto
    cy.contains('Remove').first().click()

    // Validar carrinho vazio
    cy.get('.cart_item').should('not.exist')

  })

})
