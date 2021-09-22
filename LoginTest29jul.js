

describe('describe the login functionality', function () {
//     it('test login with valid credentials', function () {

//         cy.visit('https://app.recast.studio/auth/login/')
//         cy.get('#login-form_email').type('mahesh.aher1999@gmail.com')
//         cy.get('#login-form_password').type('Sonu@3232')
//         cy.get('#login-form > div:nth-child(5) > div > div > div > button').click()
//         cy.wait(5000)
//         cy.get('#root > div > section > section > section > main > div > div:nth-child(1) > h4').should('have.text', 'Create New Project')

//     })

//     it('test login with invalid credentials', function () {

//         cy.visit('https://app.recast.studio/auth/login/')
//         cy.get('#login-form_email').type('mahesh.aher1999@gmail.com')
//         cy.get('#login-form_password').type('Sogfghd')
//         cy.get('#login-form > div:nth-child(5) > div > div > div > button').click()
//         cy.wait(2000)
//         cy.get('div > div > div > span:nth-child(2)').should('have.text', 'Unable to log in with provided credentials.')



//     })




    describe('describe the login functionality', function () {
        it('test login with valid credentials', function () {

            cy.visit('https://www.flipkart.com/')
            cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div.go_DOp._2errNR > div > div > div > a').click()
            cy.wait(5000)
            cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div:nth-child(1) > input').type('8208232100')
            cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div:nth-child(2) > input').type('8208232100')
            cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div._1D1L_j > button').click()
            cy.wait(5000)
            cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div:nth-child(3) > div > div > div > div').should('have.text', 'Rushi')

        })



    //     it('test login with invalid credentials', function () {

    //         cy.visit('https://www.flipkart.com/')
    //         cy.get('#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div.go_DOp._2errNR > div > div > div > a').click()
    //         cy.wait(3000)
    //         cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div:nth-child(1) > input').type('8208232100')
    //         cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div:nth-child(2) > input').type('8208232765')
    //         cy.get('body > div._2Sn47c > div > div > div > div > div._36HLxm.col.col-3-5 > div > form > div._1D1L_j > button').click()
    //         cy.wait(5000)
    //         cy.get('body > div._2Sn47c > div > div > div > div > div._3oBhRa.col.col-2-5._4H6HH5 > span > span').should('have.text', 'Login')

    //     })
})


})
