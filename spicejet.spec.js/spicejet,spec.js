


// describe("verify the checkbox function",()=>{
//     it('validate the checkbox functionality with check',()=>{
//         cy.visit('https://www.spicejet.com/')
//         cy.get('#ctl00_mainContent_rbtnl_Trip_1').click()
//         cy.get('label[for="ctl00_mainContent_rbtnl_Trip_1"]').should('have.class','select-label')
//     })
//     it('validate the checkbox functionality with uncheck',()=>{
//         cy.visit('https://www.spicejet.com/')
//         cy.get('#ctl00_mainContent_rbtnl_Trip_0').click()
//         cy.get('label[for="ctl00_mainContent_rbtnl_Trip_1"]').should('not.have.class','select-label')
//     })
// })






describe("validate the checkbox functionality", () => {
    it("validate the checkbox functionality with check", () => {
      cy.visit("https://www.spicejet.com/");
      cy.get("#ctl00_mainContent_rbtnl_Trip_1").click();
      cy.get('label[for="ctl00_mainContent_rbtnl_Trip_1"]').should( "have.class","select-labeL" )
    })
  
    it("validate the checkbox functinality with uncheck", () => {
      cy.visit("https://www.spicejet.com/");
      cy.get("#ctl00_mainContent_rbtnl_Trip_0").click();
      cy.get('label[for="ctl00_mainContent_rbtnl_Trip_1"]').should("not.have.class","select-label")
    })
  
    
  
    it("validate the untick functionality with check", () => {
      cy.visit("https://www.spicejet.com/");
      cy.get("#ctl00_mainContent_chk_friendsandfamily").click();
      cy.get('label[for="ctl00_mainContent_chk_friendsandfamily"]').should("not.have.text","Family & Friends")
    })
  })