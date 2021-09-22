




describe("check the functionality of the dropdown", () => {

    // it("validate the functionality of spicejet dropdown", () => {
    //     cy.visit("https://www.spicejet.com/")
    //     cy.get("#ctl00_mainContent_DropDownListCurrency").select("INR")
    // })

    // it("Validate the dropdown functionality", () => {
    //     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //     cy.get("#dropdown-class-example").select("Option3")
    // })

    it("validate functionality of the google dropdown", () => {
        cy.visit("www.google.com")
        cy.get("input[name='q']").type('python')
        //cy.wait(1000)
        cy.get("div[class='aajZCb']").find('li').each(function (el) {
            cy.log(el.text())
            if (el.text().includes('tutorial')) {
                el.click()
            }
            cy.url().should('include', 'tutorial')
        })
    })

    // it("validating the functionality of oyo dropdown", () => {
    //     cy.visit("https://www.oyorooms.com/")
    //     cy.get("input[id='autoComplete__home']").type('pune')
    //     cy.get('div[class="d-popup geoSuggestionsList"]').find('div').each(function (el) {
    //         // cy.log(el.text())
    //         if (el.text().includes('Pimpri')) {
    //             el.click()
    //         }
    //     })
    //     // cy.get("#root > div > div.homePage__container > div.cmsWrapper.cmsWrapper--topFold > div.searchContainer > div > div > div > div.oyo-cell.oyo-cell--3-col.oyo-cell--4-col-tablet.oyo-cell--4-col-phone.homeSearchWidget__gutter.homeSearchWidget__dateRangePicker > div > div").click()
    //     // cy.get("#root > div > div.homePage__container > div.cmsWrapper.cmsWrapper--topFold > div.searchContainer > div > div > div > div.oyo-cell.oyo-cell--3-col.oyo-cell--4-col-tablet.oyo-cell--4-col-phone.homeSearchWidget__gutter.homeSearchWidget__dateRangePicker > div > span > div > div > div:nth-child(2) > table > tbody > tr:nth-child(6) > td.DateRangePicker__Date.DateRangePicker__Date--is-selected > span").click()
    //     // cy.get("#root > div > div.homePage__container > div.cmsWrapper.cmsWrapper--topFold > div.searchContainer > div > div > div > div.oyo-cell.oyo-cell--3-col.oyo-cell--4-col-tablet.oyo-cell--4-col-phone.homeSearchWidget__gutter.homeSearchWidget__dateRangePicker > div > span > div > div > div:nth-child(3) > table > tbody > tr:nth-child(1) > td:nth-child(4) > span").click()
    //     // cy.get("#root > div > div.homePage__container > div.cmsWrapper.cmsWrapper--topFold > div.searchContainer > div > div > div > div.oyo-cell.oyo-cell--2-col.oyo-cell--8-col-tablet.oyo-cell--4-col-phone.homeSearchWidget__gutter.homeSearchWidget__search > button").click()
    //     // cy.url().should('include', 'Pimpri')
    // })
    // it("validating the functionality of oyo dropdown", () => {
    //     cy.visit("https://www.oyorooms.com/")
    //     cy.get("input[id='autoComplete__home']").type('pune')
    //     cy.get('div[class="d-popup geoSuggestionsList"]').find('div').then(function (el1) {
    //         Array.from(el1).forEach(function (el) {
    //             if (el.textContent.includes('Viman')) {
    //                 el.click()
    //             }
    //         })
    //     })
    // })
    // it("validate drop doen functionality", () => {
    //     cy.visit("https://ksrtc.in")
    //     cy.get("#fromPlaceName").type("BAL")
    //     cy.get(".ui-autocomplete >li>a").each((el2) => {
    //         if (el2.text() == "BALEHONNUR") {
    //             cy.wrap(el2).click()
    //         }
    //     })
    // })


    // it("validating the functionality of fab hotel dropdown", () => {
    //     cy.visit("https://www.fabhotels.com/")
    //     cy.get("#autocomplete").type("Pune")
    //     cy.get('span[class="heading"]').then(function (el1) {
    //         cy.log(el1.text())
    //         Array.from(el1).forEach(function (el) {
    //             if (el.textContent.includes('Pune')) {
    //                 el.click()
    //             }
    //         })
    //     })
    // })
    // it("validate drop doen functionality of fab hotel", () => {
    //     cy.visit("https://www.fabhotels.com/")
    //     cy.get("#autocomplete").type("mumbai")
    //     cy.get("span[class='heading']").each((el) => {
    //         if (el.text() == "South Mumbai") {
    //            (el).click()
    //         }
    //     })
    // })
    it("validating the functionality of oyo dropdown", () => {
        cy.visit("https://www.fabhotels.com/")
        cy.get("#autocomplete").type('mumbai')
        cy.get('div[class="search-wrapper"]').find('li').each(function (el) {
            cy.log(el.text())
            if (el.text().includes('South')) {
                el.click()
            }
        })
    })
})


// it.only("validating the functionality of oyo dropdown", () => {
//     cy.visit("https://www.oyorooms.com/")
//     cy.get("a[class='c-nn640c mddCityItem__cityItem']").eq(6).each(function (el) {
//         cy.log(el.text())
//     })
    // cy.get('div[class="d-popup geoSuggestionsList"]').find('div').then(function (el1) {
    //     Array.from(el1).forEach(function (el) {
    //         if (el.textContent.includes('Viman')) {
    //             el.click()
    //         }
    //     })
    // })
// })