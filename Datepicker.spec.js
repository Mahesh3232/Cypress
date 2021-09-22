


describe("calender", () => {

    // it("Date time picker", () => {
          let Dt = new Date()
    //     cy.log(Dt.getDate())//todays date
    //     cy.log(Dt.getFullYear())//current year
    //     cy.log(Dt.getMonth())//current months index
    //     cy.log(Dt.toLocaleString('default', { month: "long" }))//to show the current month
    //     cy.log(Dt.toLocaleDateString())//to show the todays date 9/6/2021
    //     cy.log(Dt.toLocaleDateString('en-Us', { weekday: 'long' }))//to show to current day monday
    // })
    it("date and time picker ",()=>{
        cy.visit("http://www.webdriveruniversity.com/Datepicker/index.html")
        Dt.setDate(Dt.getDate()+200)
        let date=Dt.getDate()//24
        let month=Dt.toLocaleString('default',{month:"long"})//march 
        let fullyear=Dt.getFullYear()//2021
        // //cy.log(date,month,fullyear)
       function SelectDate(){
            cy.get('#datepicker').click()
            cy.get('.datepicker-switch').first().click()
        }
    })
})