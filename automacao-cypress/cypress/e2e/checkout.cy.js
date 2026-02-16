describe('Checkout - Saucedemo', () => {

  it('CT-008 — Finalizar compra com sucesso', () => {

    // Acessar site
    cy.visit('https://www.saucedemo.com')

    // Login
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Validar login
    cy.url().should('include', '/inventory')

    // Adicionar produto
    cy.contains('Add to cart').first().click()

    // Abrir carrinho
    cy.get('.shopping_cart_link').click()

    // Checkout
    cy.get('#checkout').click()

    // Preencher dados
    cy.get('#first-name').type('Kamila')
    cy.get('#last-name').type('Meira')
    cy.get('#postal-code').type('12345')

    cy.get('#continue').click()

    // Finalizar
    cy.get('#finish').click()

    // Validar sucesso
    cy.contains('Thank you for your order').should('be.visible')

  })

})

