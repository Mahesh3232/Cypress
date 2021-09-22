



describe('variables in cypress', () => {
    it('first varible', () => {
        cy.visit('https://automationteststore.com/index.php?rt=account/login')
        // const aa = cy.get('#loginFrm_loginname')
        // aa.type('mahesh.aher1999@gmail.com')
        // const bb= cy.get('#loginFrm_password')
        // bb.type('Sonu@3232')

        // const aa = cy.get('#loginFrm_loginname')
        // const bb= cy.get('#loginFrm_password')
        // aa.type('mahesh.aher1999@gmail.com')
        // bb.type('Sonu@3232')

        // cy.get('#loginFrm_loginname').type('mahesh.aher1999@gmail.com')
        // cy.get('#loginFrm_password').type('Sonu@3232')

        // let cc=cy.get('.maintext')
        // cy.log(cc.text)

        cy.get('.maintext').then((el) => {
            console.log(el.text())
            expect(el.text()).to.eq(' Account Login')

        })

    })
})