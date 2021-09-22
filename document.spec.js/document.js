



describe('document level validation', () => {
    it('validating the url', () => {
        cy.visit('https://app.recast.studio/auth/login/')
        cy.url().should('contain', 'login')
    })

    it('validating the url2', () => {
        cy.visit('https://app.recast.studio/auth/login/')
        cy.contains('Sign Up').click()
        cy.url().should('contain', 'register')
    })

    it('validating the url title', () => {
        cy.visit('https://app.recast.studio/auth/login/')
        cy.contains('Sign Up').click()
        cy.url().should('contain', 'register')
        cy.title().should('contain', 'Registration - Recast Studio')
    })

    it.only('validating any property of head section', () => {
        cy.visit('https://app.recast.studio/auth/login/?next=/')
        cy.document().should('have.property', 'charset').and('eq', "UTF-8")
        cy.document().should('have.property', 'URL')
        cy.document().should('have.property', 'head')
        cy.document().should('have.property', 'body')
        cy.document().should('have.property','baseURI')
        cy.title().should('contain','Login - Recast Studio')

    })
})