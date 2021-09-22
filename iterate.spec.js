



describe('iterate over the element', () => {

    it('validate the title of the skincare products', () => {
        cy.visit('https://automationteststore.com')
        cy.get('#categorymenu > nav > ul > li:nth-child(4) > a').click()
        cy.get('.mt10').find('a').each(function (el) {
            let expectarr = ["Eyes", "Face", "Gift Ideas & Sets", "Hands & Nails", "Sun"]
            expect(expectarr.indexOf(el.text())).to.be.greaterThan(-1)
        })
    })
    it('validate the title of the men products', () => {
        cy.visit('https://automationteststore.com')
        cy.get('#categorymenu > nav > ul > li:nth-child(6) > a').click()
        cy.get('.mt10').find('a').each(function (el) {
            let expectarr = ["Body & Shower", "Fragrance Sets", "Pre-Shave & Shaving", "Skincare"]
            expect(expectarr.indexOf(el.text())).to.be.greaterThan(-1)
        })
    })
    it('Verify the total score', () => {
        cy.visit('https://www.espncricinfo.com/series/india-tour-of-england-2021-1239527/england-vs-india-2nd-test-1239544/full-scorecard')
        let sum = 0
        let extras = 0
        let total = 0

        cy.get('.batsman').first().find('td[class="font-weight-bold"]').each(function (el, index, arr) {
            //cy.log(el.text())
            sum = sum + Number(el.text())
        }).then(() => {
            cy.log(sum)
            cy.get('.batsman').first().find('tr[class="extras"]').children().eq(2).then((el) => {
                extras = Number(el.text())
                cy.get('.batsman').first().find('tfoot').find('td[class="text-right font-weight-bold"]').then((el) => {
                    total = Number(el.text())
                    expect(total).to.eqls(sum + extras)
                })
            })
        })
    })
})