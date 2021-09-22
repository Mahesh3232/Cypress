describe('Traversing the Dom in cypress', () => {
    it('children()to get the children element of dom', () => {
        cy.visit('https://www.decathlon.in/')
        cy.get('.useful_links.d-flex').children('a').should('have.length', "4")
    })

    //ancestor

    it('close()to validate the closet ancestor of the element()', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.badge-light').closest('ul').should('have.class', 'list-group')
    })


    it('last() to retrive the last element in the list', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().last().should('contain', 'Lentils')

    })


    it('eq() to retrive the specific element in the list based on index', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().eq(3).should('contain', 'Espresso')
    })

    it('first() to retrive the first element of the list', () => {
        cy.visit('https://www.decathlon.in/')
        cy.get('.useful_links.d-flex').children().first().should('contain', 'Sign in')
    })

    it('filter() to retrive the element that matched a specigic condition', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('div[data-toggle="buttons"]').children().filter('.active').should('have.text', "Button-1")
        cy.get('div[data-toggle="buttons"]').children().filter('.active').should('have.attr', "type")
    })

    it('find() to retrive the element that have specfic selector or specific', () => {
        cy.visit('https://www.decathlon.in/')
        cy.get('.location_bar.text-center').find('p').should('have.class', 'm-0')
        //cy.get('.pagination.traversal-pagination').find('li').should('have.length', "7")
    })

    it('find() 2nd example to retrive the element that have specfic selector or specific', () => {
        cy.visit('https://www.espncricinfo.com/series/india-tour-of-england-2021-1239527/england-vs-india-1st-test-1239543/full-scorecard')
        cy.get('.table.batsman').first().find('tbody').find('tr').should('have.length', '23')

    })

    it('nextAll() to get the all the next siblings with a specific parent (DOM element)', () => {

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length', '3')

    })

    it('nextuntil() to get the all siblings element for the  difined elements', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').nextUntil('ul').should('have.length', 4)
    })

    it('.not() to remove the element from the set of elements', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().not('.list-header').should('have.lenght', '9')
        //cy.get('.traversal-food-list').children().not('.list-header').should('have.length','9')
    })

    it('parent()', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('thead').parents().should('match', 'table')
    })

    it('prevAll()', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id=veggie]').prevAll().should('have.length', '6')
    })

    it('prevUntil()', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id=veggie]').prevUntil('ul').should('have.length', '6')

    })

    it.only('siblings()',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id="fruits"]').siblings().should('have.length', '10')
    })

})