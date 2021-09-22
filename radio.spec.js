describe('verify the radio button functionality', () => {
    // it('verify the functionality of round trip radio button', () => {
    //     cy.visit("https://www.spicejet.com/")
    //     cy.get("input[value='RoundTrip']").as('roundTrip')
    //     cy.get("input[value='OneWay']").as('oneWay')
    //     cy.get('@roundTrip').first().check()
    //     cy.get('@roundTrip').should('be.checked')
    //     cy.get('@oneWay').first().check()
    //     cy.get('@roundTrip').should('not.be.checked')
    // })

    it('verify the raio button functionality with check()', () => {
        cy.visit("http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get("input[value='green']").as('green')
        cy.get("input[value='blue']").as('blue')
        cy.get('@green').check()
        cy.get('@green').should('be.checked')
        // cy.get('@blue').check()
        // cy.get('@blue').should('be.checked')
        //cy.get('@green').should('not.be.checked')
        cy.get('@blue').should('not.be.checked')
    })

    it('verify the radio button functionality with check()', () => {
        cy.visit("https://designsystem.digital.gov/components/radio-buttons/")
        cy.get("input[value='sojourner-truth']").as('sojourner')
        cy.get("input[value='frederick-douglass']").as('frederick')
        cy.get('@sojourner').check()
        cy.get('@sojourner').should('be.checked')
        //cy.get('@frederick').check({ force: true })
        //cy.get('@frederick').should('be.checked')
        cy.get('@frederick').should('not.be.checked')
        //cy.get('@sojourner').should('not.be.checked')
    })

    it('verify the radio button is disabled or not', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="cabbage"]').as('cabbage')
        cy.get('@cabbage').should('be.disabled')
        cy.get('input[value="pumpkin"]').should('not.be.disabled')
    })

    it('validate the singal check box', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="option-1"]').as('option-1')
        cy.get('@option-1').check()
        cy.get('@option-1').should('be.checked')
        cy.get('@option-1').uncheck()
        cy.get('@option-1').should('not.be.checked')
    })

    it.only('validate the multipal checkbox', () => {
        cy.visit("http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get('#checkboxes').as('checkboxs')
        cy.get('@checkboxs').find('input').check(['option-1', 'option-2', 'option-3', 'option-4'])

    })
})
